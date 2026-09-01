const fs=require('fs');
const path='src/pages/Business.jsx';
let source=fs.readFileSync(path,'utf8');
source=source.replace("import'../business-capabilities.css';","import'../business-capabilities.css';import'../business-pricing.css';");
source=source.replace("const heroWork=",`const packagePresentation={
 Starter:{description:'Get your business professionally online',cta:'Choose Starter'},
 Standard:{description:'Let customers interact, book or order',cta:'Choose Standard'},
 Business:{description:'Manage customer information and workflows',cta:'Discuss Business Website'},
 Advanced:{description:'Connect payments and external services',cta:'Discuss Your Requirements'}
};
const guidanceOptions=[
 'I mainly need customers to see my business, services/products, prices and contact information.',
 'Customers should select products/services, order or submit structured bookings.',
 'I need customer information stored or confirmations/workflows automated.',
 'I need payments, APIs or other services connected.'
];
const heroWork=`);
source=source.replace("export default function Business(){const[a,setA]=useState({x:false,y:false,z:false});const rec=a.z?'Advanced':a.y?'Business':a.x?'Standard':'Starter';return <div className=\"business\">","export default function Business(){const[selectedLevels,setSelectedLevels]=useState([]);const highestLevel=selectedLevels.length?Math.max(...selectedLevels):0;const rec=highestLevel?packs[highestLevel-1]:null;const toggleLevel=level=>setSelectedLevels(current=>current.includes(level)?current.filter(item=>item!==level):[...current,level]);return <div className=\"business\">");
const start=source.indexOf('<section id="packages">');
const end=source.indexOf('<section className="shade" id="concepts">',start);
if(start<0||end<0)throw new Error('Pricing section markers not found');
const pricing=`<section id="packages" className="business-pricing"><small>CAPABILITY-BASED PRICING</small><h2>Choose the right starting point</h2><p className="lead">Every package includes responsive design and two months of routine content updates after deployment.</p><div className="prices">{packs.map(p=>{const presentation=packagePresentation[p.n];return <article className={p.hot?'hot':''} key={p.n}>{p.hot&&<em>MOST POPULAR</em>}<small>{presentation.description}</small><h3>{p.n}</h3><strong>{p.p}</strong><ul>{p.f.map(f=><li key={f}>✓ {f}</li>)}</ul><details><summary>See full package details</summary><p>Final scope is based on required functionality. Major extra features and integrations are quoted separately.</p></details><a className={\`button \${p.hot?'':'outline'} package-cta\`} href={wa(\`Hi Solomon, I'm interested in the \${p.n} website package (\${p.p}). \${p.n==='Advanced'?'I would like to discuss my requirements.':'Please tell me the next steps.'}\`)}>{presentation.cta}</a></article>})}</div><div className="recommender"><div className="recommender-intro"><small>QUICK GUIDANCE</small><h3>Not sure which package you need?</h3><p>Select what you want customers or your business to be able to do. I’ll suggest a starting package.</p><span>This is guidance, not a final quotation.</span></div><fieldset><legend className="sr-only">Select the capabilities your business needs</legend>{guidanceOptions.map((option,index)=>{const level=index+1;return <label key={option}><input type="checkbox" checked={selectedLevels.includes(level)} onChange={()=>toggleLevel(level)}/><span>{option}</span></label>})}</fieldset><aside className={!rec?'neutral':''} aria-live="polite"><small>BEST STARTING POINT</small>{rec?<><b>{rec.n}</b><span>{rec.p}</span><a className="button" href={wa(\`Hi Solomon, your package guide suggested \${rec.n} (\${rec.p}) based on the capabilities I selected. I'd like to discuss it.\`)}>Discuss {rec.n}</a></>:<><b>Select what you need</b><span>Starter is the basic option for a professional online presence.</span></>}</aside></div></section>
`;
source=source.slice(0,start)+pricing+source.slice(end);
fs.writeFileSync(path,source);
