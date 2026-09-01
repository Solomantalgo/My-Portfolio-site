const fs=require('fs');
const path='src/pages/Business.jsx';
let source=fs.readFileSync(path,'utf8');
source=source.replace("import'../business-pricing.css';","import'../business-pricing.css';import'../business-pricing-correction.css';");
fs.writeFileSync(path,source);
