import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const MotionDiv = motion.div;

const HireModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    service: 'Business Website (Standard - 350k)',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.service) {
      alert('Please fill in your name, WhatsApp number, and select a service.');
      return;
    }

    let msg = `Hello Solomon! I'd like to talk about a project.\n\n`;
    msg += `*Name:* ${formData.name}\n`;
    msg += `*WhatsApp:* ${formData.whatsapp}\n`;
    msg += `*Service:* ${formData.service}\n`;
    if (formData.notes) msg += `*Details:* ${formData.notes}\n`;

    const waUrl = `https://wa.me/256775224728?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200;300;400;700&family=Epilogue:wght@200;300;400;500&display=swap');
          
          .portfolio-modal-body {
            font-family: 'Epilogue', sans-serif;
            color: var(--text);
          }
          
          .portfolio-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(7, 9, 15, 0.95);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            backdrop-filter: blur(10px);
          }
          
          .portfolio-modal {
            background: var(--bg2);
            border: 1px solid var(--border);
            max-width: 520px;
            width: 100%;
            padding: 48px 40px;
            position: relative;
            max-height: 90vh;
            overflow-y: auto;
            border-radius: 4px;
            box-shadow: 0 0 100px rgba(0, 0, 0, 0.8);
          }
          
          .portfolio-modal-close {
            position: absolute;
            top: 20px; right: 20px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--border);
            color: var(--lime);
            width: 32px; height: 32px;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s;
            border-radius: 50%;
          }
          .portfolio-modal-close:hover { 
            background: var(--lime);
            color: var(--bg);
          }
          
          .portfolio-modal-tag {
            font-family: 'Unbounded', sans-serif;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 0.4em;
            text-transform: uppercase;
            color: var(--lime);
            margin-bottom: 12px;
            display: block;
            opacity: 0.8;
          }
          
          .portfolio-modal-title {
            font-family: 'Unbounded', sans-serif;
            font-size: 28px;
            font-weight: 700;
            color: var(--text);
            margin-bottom: 8px;
            letter-spacing: -1px;
          }
          
          .portfolio-modal-sub {
            font-size: 14px;
            color: var(--muted);
            margin-bottom: 32px;
            line-height: 1.6;
          }
          
          .portfolio-form-group {
            margin-bottom: 24px;
            display: flex;
            flex-direction: column;
            text-align: left;
          }
          
          .portfolio-form-group label {
            font-size: 10px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--muted);
            margin-bottom: 10px;
            font-weight: 600;
          }
          
          .portfolio-form-group input,
          .portfolio-form-group select,
          .portfolio-form-group textarea {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border);
            color: var(--text);
            padding: 14px 18px;
            font-size: 15px;
            font-family: 'Epilogue', sans-serif;
            outline: none;
            transition: all 0.3s;
            border-radius: 4px;
          }
          
          .portfolio-form-group select {
            -webkit-appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23AAFF3E' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 18px center;
            background-size: 12px;
            padding-right: 42px;
            cursor: pointer;
          }
          
          .portfolio-form-group input:focus,
          .portfolio-form-group select:focus,
          .portfolio-form-group textarea:focus { 
            border-color: var(--lime);
            background: rgba(170, 255, 62, 0.05);
          }

          .portfolio-form-group select option {
            background: var(--bg2);
            color: var(--text);
          }
          
          .portfolio-form-submit {
            width: 100%;
            background: var(--lime);
            color: var(--bg);
            border: none;
            padding: 18px;
            font-size: 12px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            font-family: 'Unbounded', sans-serif;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            transition: all 0.3s;
            margin-top: 8px;
            border-radius: 4px;
            box-shadow: 0 10px 30px rgba(170, 255, 62, 0.2);
          }
          .portfolio-form-submit:hover { 
            background: #ffffff;
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(170, 255, 62, 0.3);
            letter-spacing: 0.3em;
          }
          .portfolio-form-submit svg { width: 18px; height: 18px; fill: currentColor; }
          
          .portfolio-modal-note {
            text-align: center;
            font-size: 11px;
            color: var(--muted);
            margin-top: 20px;
            font-weight: 300;
          }

          @media (max-width: 480px) {
            .portfolio-modal { padding: 36px 24px; }
          }
        `}
      </style>

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="portfolio-modal-overlay portfolio-modal-body"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
          >
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="portfolio-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="portfolio-modal-close" onClick={onClose}>X</button>
              <span className="portfolio-modal-tag">Solo / Digital Artisan</span>
              <h2 className="portfolio-modal-title">Hire Solomon</h2>
              <p className="portfolio-modal-sub">Tell me about your project and I'll get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit}>
                <div className="portfolio-form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Grace Nakato" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="portfolio-form-group">
                  <label>WhatsApp Number</label>
                  <input 
                    type="tel" 
                    placeholder="+256 ..." 
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  />
                </div>

                <div className="portfolio-form-group">
                  <label>Project Category</label>
                  <select 
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select a category</option>
                    <option>Business Website (Standard - 350k)</option>
                    <option>Business Website (Basic - 150k)</option>
                    <option>Business Website (Premium - 700k)</option>
                    <option>Custom Web Application</option>
                    <option>Website Repair & Audit</option>
                    <option>E-commerce Store</option>
                  </select>
                </div>

                <div className="portfolio-form-group">
                  <label>Project Details</label>
                  <textarea 
                    placeholder="What are we building? Briefly describe your vision..."
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    style={{ minHeight: '120px' }}
                  ></textarea>
                </div>

                <button type="submit" className="portfolio-form-submit">
                  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Contact Solomon via WhatsApp
                </button>
              </form>
              <p className="portfolio-modal-note">Available for new projects in Kampala.</p>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default HireModal;
