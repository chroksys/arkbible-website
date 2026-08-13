import React, { useState } from 'react';
import { X, Send, Heart, BookOpen } from 'lucide-react';

export default function SubmitStoryModal({ isOpen, onClose, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    scripture: '',
    story: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitSuccess({
        id: Date.now(),
        name: formData.name || 'Anonymous Believer',
        location: formData.location || 'Global Community',
        scripture: formData.scripture || 'Psalm 23:1',
        story: formData.story,
        tag: 'Community Story'
      });
      setFormData({ name: '', location: '', scripture: '', story: '' });
      onClose();
    }, 750);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div style={{ marginBottom: '1.5rem', textAlign: 'center', paddingTop: '0.5rem' }}>
          <div className="gold-badge" style={{ marginBottom: '0.6rem', display: 'inline-flex' }}>
            <Heart size={14} color="#3A6B68" /> Faith Testimony
          </div>
          <h3 className="heading-md" style={{ color: 'var(--text-dark)', marginBottom: '0.3rem' }}>
            Share Your Story of Faith
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
            Encourage believers worldwide by sharing how God is working in your life.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name (or preferred alias)</label>
            <input
              type="text"
              required
              placeholder="e.g. Sister Grace"
              className="form-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-row-2col" style={{ marginBottom: '1.25rem' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label>Location</label>
              <input
                type="text"
                placeholder="e.g. Lagos, Nigeria"
                className="form-input"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
            <div className="form-group" style={{ margin: 0 }}>
              <label>Supporting Scripture</label>
              <input
                type="text"
                placeholder="e.g. Romans 8:28"
                className="form-input"
                value={formData.scripture}
                onChange={(e) => setFormData({ ...formData, scripture: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Your Testimony (max 500 characters)</label>
            <textarea
              required
              rows={4}
              maxLength={500}
              placeholder="Tell us how God answered prayer or comforted you through His Word..."
              className="form-textarea"
              value={formData.story}
              onChange={(e) => setFormData({ ...formData, story: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
            style={{
              width: '100%',
              marginTop: '1rem',
              padding: '0.85rem 1rem',
              fontSize: '0.92rem',
              whiteSpace: 'normal',
              lineHeight: '1.35',
              minHeight: '48px',
              textAlign: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box'
            }}
          >
            {isSubmitting ? 'Submitting...' : (
              <>
                <Send size={18} style={{ flexShrink: 0 }} />
                <span>Submit Faith Testimony</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
