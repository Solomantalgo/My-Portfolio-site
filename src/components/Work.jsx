import { ExternalLink, X } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../data/projects';

const Work = () => {
  const [activeProject, setActiveProject] = useState(null);
  const closePreview = () => setActiveProject(null);

  return (
    <section id="work">
      <div className="container">
        <div className="work-header reveal">
          <div>
            <span className="sec-tag">Portfolio</span>
            <h2 className="sec-title">Recent Work</h2>
          </div>
          <p className="sec-sub" style={{ margin: 0 }}>Demo sites built for different industries across Kampala.</p>
        </div>
        <div className="work-grid">
          {projects.map((project) => (
            <button key={project.title} type="button" className="work-card reveal" onClick={() => setActiveProject(project)}>
              <div className="work-thumb">
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className="work-type">{project.status}</span>
                <div className="work-overlay"><span>Preview {project.status.includes('CLIENT') ? 'Site' : 'Demo'}</span></div>
              </div>
              <div className="work-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="work-stack">
                  {project.stack.map((tag) => (
                    <span key={tag} className="stack-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
          <div className="work-card reveal" style={{ background: 'rgba(170,255,62,0.03)', border: '1px dashed rgba(170,255,62,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px', textAlign: 'center', padding: '2rem' }}>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Soon</div>
              <h3 style={{ fontFamily: 'var(--font-h)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>More Coming Soon</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>Hotel, pharmacy, tours and travel demos in progress.</p>
            </div>
          </div>
        </div>
      </div>
      {activeProject && (
        <div className="preview-modal" role="dialog" aria-modal="true" aria-labelledby="preview-title">
          <div className="preview-backdrop" onClick={closePreview} />
          <div className="preview-panel">
            <div className="preview-head">
              <div>
                <span className="preview-label">{activeProject.status}</span>
                <h3 id="preview-title">{activeProject.title}</h3>
              </div>
              <div className="preview-actions">
                <a className="preview-live-btn" href={activeProject.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  View live site
                </a>
                <button type="button" className="preview-close" onClick={closePreview} aria-label="Close preview">
                  <X size={18} />
                </button>
              </div>
            </div>
            <iframe title={`${activeProject.title} preview`} src={activeProject.url} loading="lazy" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
