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
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <div className="gold-badge" style={{ marginBottom: '0.6rem' }}>
            <Heart size={14} /> Faith Testimony
          </div>
          <h3 className="heading-md" style={{ color: '#ffffff' }}>
            Share Your Story of Faith
          </h3>
          <p style={{ color: 'var(--text-light-muted)', fontSize: '0.9rem', marginTop: '0.3rem' }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                placeholder="e.g. Lagos, Nigeria / Texas, USA"
                className="form-input"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
            <div className="form-group">
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
            style={{ width: '100%', marginTop: '1rem' }}
          >
            {isSubmitting ? 'Submitting Testimony...' : (
              <>
                <Send size={18} /> Submit Story for Community Encouragement
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
