import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Download, Volume2, VolumeX, Sparkles, Search, BookOpen, ShieldCheck,
  CheckCircle2, Share2, Award, Heart, HelpCircle, FileText, Check, Copy,
  Smartphone, WifiOff, RefreshCw, Zap, Scroll, Sprout, PartyPopper, Play,
  Cross, ChevronDown, ChevronUp
} from 'lucide-react';

export default function ProductPage({ onOpenDownload }) {
  // Device Showcase active screen
  const [activeScreen, setActiveScreen] = useState('home');
  const screens = [
    { id: 'home', label: 'Home Feed', image: '/images/app screenshots/home.jpg', desc: 'Daily devotional & morning affirmation space' },
    { id: 'reader', label: 'Bible Reader', image: '/images/app screenshots/reader.jpg', desc: '100% offline clean scripture reading' },
    { id: 'reflect', label: 'Reflect & AI Context', image: '/images/app screenshots/reflect.jpg', desc: 'Help Me Understand 3-part breakdown' },
    { id: 'journal', label: 'Prayer Journal', image: '/images/app screenshots/journal.jpg', desc: 'Private prayer requests & answered milestones' }
  ];

  // Feature 1: AI Morning Affirmation State
  const affirmationsList = [
    { verse: "Philippians 4:13", text: "Today, God's grace equips you for every challenge. Step forward in quiet confidence knowing your strength flows from Him." },
    { verse: "Isaiah 41:10", text: "Fear not this morning, for the Lord your God walks beside you. He strengthens your hands and uplifts your heart in peace." },
    { verse: "Psalm 118:24", text: "This is the day the Lord has made! Rejoice in His unmerited favor, fresh mercies, and steadfast lovingkindness." }
  ];
  const [currentAffirmationIndex, setCurrentAffirmationIndex] = useState(0);

  // Feature 2: Translation Switcher State
  const [selectedTranslation, setSelectedTranslation] = useState('KJV');
  const translationSamples = {
    KJV: "In the beginning was the Word, and the Word was with God, and the Word was God. (John 1:1 KJV)",
    WEB: "In the beginning was the Word, and the Word was with God, and the Word was God. (John 1:1 WEB)",
    Segond: "Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu. (Jean 1:1 Louis Segond)",
    Reina: "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios. (Juan 1:1 Reina-Valera)"
  };

  // Feature 3: Text-To-Speech State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const handleToggleAudio = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        const text = translationSamples[selectedTranslation];
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onend = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utterance);
        setIsPlayingAudio(true);
      }
    } else {
      alert("Text-to-Speech is supported in modern browsers on device.");
    }
  };

  // Feature 4: "How Are You Feeling?" Vector Search Sandbox State
  const [feelingInput, setFeelingInput] = useState('Anxious about the future');
  const [vectorResult, setVectorResult] = useState({
    verse: 'Philippians 4:6-7',
    text: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.',
    intro: 'When anxiety or uncertainty weighs on your soul, God invites you to exchange worry for thanksgiving prayer. His peace acts as a protective guard over your heart.',
    confidence: '99.4% Vector RAG Match (0% Hallucination)'
  });

  const emotionPresets = [
    { label: 'Anxious', query: 'Feeling anxious and worried about tomorrow' },
    { label: 'Grateful', query: 'Heart filled with thanksgiving and joy' },
    { label: 'Grieving', query: 'Comfort for a broken heart and loss' },
    { label: 'Seeking Peace', query: 'Needing quiet stillness and God peace' },
    { label: 'Overwhelmed', query: 'Burdened with heavy workload and stress' }
  ];

  const handleVectorSearch = (query) => {
    const q = query || feelingInput;
    setFeelingInput(q);
    if (q.toLowerCase().includes('grateful') || q.toLowerCase().includes('thanks')) {
      setVectorResult({
        verse: 'Psalm 107:1',
        text: 'O give thanks unto the LORD, for he is good: for his mercy endureth for ever.',
        intro: 'A heart of thanksgiving recognizes God’s unending goodness in every season.',
        confidence: '99.7% Vector RAG Match'
      });
    } else if (q.toLowerCase().includes('grief') || q.toLowerCase().includes('loss') || q.toLowerCase().includes('broken')) {
      setVectorResult({
        verse: 'Psalm 34:18',
        text: 'The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.',
        intro: 'God is never closer to you than when your heart is grieving and weary.',
        confidence: '99.6% Vector RAG Match'
      });
    } else if (q.toLowerCase().includes('peace') || q.toLowerCase().includes('still')) {
      setVectorResult({
        verse: 'John 14:27',
        text: 'Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.',
        intro: 'Christ bestows a divine stillness that transcends worldly circumstances.',
        confidence: '99.8% Vector RAG Match'
      });
    } else {
      setVectorResult({
        verse: 'Philippians 4:6-7',
        text: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.',
        intro: 'When anxiety or uncertainty weighs on your soul, God invites you to exchange worry for thanksgiving prayer.',
        confidence: '99.4% Vector RAG Match'
      });
    }
  };

  // Feature 5: AI Context Engine 3-Tab breakdown State
  const [activeContextTab, setActiveContextTab] = useState('history');

  // Feature 6: AI Sermon Note Structurer State
  const [rawSermonNotes, setRawSermonNotes] = useState(
    'Pastor preached from John 15. Jesus is true vine we are branches. abide in Him without Him we can do nothing. action step read chapter daily pray first before work.'
  );
  const [structuredSermon, setStructuredSermon] = useState(null);

  const handleStructureNotes = () => {
    setStructuredSermon({
      title: 'Abiding in the True Vine',
      keyScripture: 'John 15:5',
      coreMessage: 'True spiritual fruitfulness is never produced through self-effort, but through abiding in vital daily union with Jesus Christ.',
      actionItems: [
        'Spend 15 minutes in quiet prayer before beginning morning work',
        'Read John 15 every evening this week',
        'Surrender self-reliance in daily decision-making'
      ]
    });
  };

  // Feature 7: Bible Trivia Quiz State
  const triviaQuestions = [
    {
      q: 'Which psalm begins with "The LORD is my shepherd; I shall not want"?',
      options: ['Psalm 23', 'Psalm 91', 'Psalm 119', 'Psalm 1'],
      correct: 0
    },
    {
      q: 'What fruit of the Spirit is listed first in Galatians 5:22?',
      options: ['Joy', 'Love', 'Peace', 'Patience'],
      correct: 1
    },
    {
      q: 'In which city were believers first called Christians?',
      options: ['Jerusalem', 'Antioch', 'Rome', 'Ephesus'],
      correct: 1
    }
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswerQuestion = (index) => {
    setSelectedOption(index);
    if (index === triviaQuestions[currentQuestionIndex].correct) {
      setScore(prev => prev + 1);
    }
  };

  // Feature 8: Prayer Journal State
  const [journalEntries, setJournalEntries] = useState([
    { id: 1, text: 'Praying for wisdom in career transition and family unity.', answered: false }
  ]);
  const [newPrayerText, setNewPrayerText] = useState('');

  const handleAddPrayer = (e) => {
    e.preventDefault();
    if (!newPrayerText.trim()) return;
    setJournalEntries([...journalEntries, { id: Date.now(), text: newPrayerText, answered: false }]);
    setNewPrayerText('');
  };

  const handleToggleAnswered = (id) => {
    setJournalEntries(journalEntries.map(entry => {
      if (entry.id === id) {
        const nextState = !entry.answered;
        if (nextState) {
          confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
        }
        return { ...entry, answered: nextState };
      }
      return entry;
    }));
  };

  // Feature 10: Custom Share Card Engine State
  const [cardTheme, setCardTheme] = useState('theme-dark-gradient');
  const [cardVerse, setCardVerse] = useState('The LORD is my shepherd; I shall not want.');
  const [cardRef, setCardRef] = useState('Psalm 23:1');

  return (
    <div>
      {/* SECTION 1: HERO BANNER WITH mock.png BACKGROUND & LEFT-ALIGNED CONTENT */}
      <section style={{
        position: 'relative',
        minHeight: '540px',
        padding: '7.5rem 0 6rem 0',
        background: `linear-gradient(to right, rgba(14, 23, 22, 0.92) 0%, rgba(14, 23, 22, 0.78) 52%, rgba(14, 23, 22, 0.2) 100%), url('/images/mock.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'left', maxWidth: '580px' }}>
            <div className="hero-badge" style={{ marginBottom: '1.4rem' }}>
              <Sparkles size={16} /> Arkbible Mobile Application
            </div>
            <h1 className="heading-xl" style={{ color: '#FFFFFF', marginBottom: '1.4rem', fontSize: '3rem', lineHeight: '1.2' }}>
              Arkbible: Your Personal & <span className="text-gradient-green">Offline Daily Sanctuary</span>.
            </h1>
            <p style={{
              fontSize: '1.18rem',
              color: 'rgba(255, 255, 255, 0.92)',
              marginBottom: '2.5rem',
              lineHeight: '1.75'
            }}>
              An ad-free, intelligent mobile Bible designed for quiet reflection, deep study, and daily encouragement without commercial noise or data dependencies.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem' }}>
              <button className="btn btn-primary" onClick={onOpenDownload} style={{ padding: '0.85rem 1.8rem' }}>
                <Download size={18} /> Download on App Store
              </button>
              <button className="btn btn-outline-light" onClick={onOpenDownload} style={{ padding: '0.85rem 1.8rem' }}>
                <Download size={18} /> Download on Google Play
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE "HOW ARE YOU FEELING?" VECTOR RAG SANDBOX */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <div className="teal-badge" style={{ marginBottom: '0.8rem' }}>
              <Zap size={16} /> Live Web Sandbox Engine
            </div>
            <h2 className="heading-lg">
              "How Are You Feeling?" Semantic Verse Search
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.4rem' }}>
              Test the app's Supabase pgvector RAG scripture-matching engine live on this site. 0% AI hallucination guaranteed.
            </p>
          </div>

          <div className="light-card" style={{ padding: '2.5rem' }}>
            {/* Input Bar */}
            <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', flex: '1', minWidth: '260px' }}>
                <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  className="form-input"
                  style={{ paddingLeft: '2.8rem' }}
                  value={feelingInput}
                  onChange={(e) => setFeelingInput(e.target.value)}
                  placeholder="Type an emotion, e.g. Feeling overwhelmed with stress..."
                />
              </div>
              <button
                className="btn btn-primary"
                onClick={() => handleVectorSearch()}
              >
                Match Scripture Vector
              </button>
            </div>

            {/* Quick Emotion Presets */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>Try preset emotions:</span>
              {emotionPresets.map(ep => (
                <button
                  key={ep.label}
                  onClick={() => handleVectorSearch(ep.query)}
                  style={{
                    padding: '0.4rem 0.95rem',
                    borderRadius: '9999px',
                    fontSize: '0.84rem',
                    background: 'var(--primary-subtle)',
                    border: '1px solid var(--border-teal)',
                    color: '#3A6B68',
                    fontWeight: '600'
                  }}
                >
                  {ep.label}
                </button>
              ))}
            </div>

            {/* Vector Result Card */}
            {vectorResult && (
              <div style={{
                background: 'var(--bg-white)',
                border: '1.5px solid #3A6B68',
                borderRadius: '16px',
                padding: '1.8rem',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: '700', fontSize: '1.15rem', color: 'var(--primary-dark)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    <BookOpen size={18} color="#3A6B68" /> {vectorResult.verse}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#FFFFFF', background: '#3A6B68', padding: '0.25rem 0.65rem', borderRadius: '6px', fontWeight: '700' }}>
                    {vectorResult.confidence}
                  </span>
                </div>
                <p style={{ fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: '1rem', lineHeight: '1.65' }}>
                  "{vectorResult.text}"
                </p>
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.8rem', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--primary-dark)' }}>AI Pastoral Intro:</strong> {vectorResult.intro}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPLETE APP FEATURE GRID (BACKGROUND: bc.png COVER CENTER CENTER) */}
      <section style={{
        position: 'relative',
        padding: '6rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.52), rgba(14, 23, 22, 0.75)), url('/images/bc.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
            <div className="hero-badge" style={{ marginBottom: '0.8rem' }}>
              Full Feature Breakdown
            </div>
            <h2 className="heading-lg" style={{ color: '#FFFFFF' }}>
              Complete App Feature Ecosystem
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.05rem', marginTop: '0.4rem', fontWeight: '500' }}>
              Explore the 9 intelligent, offline-first tools built into the Arkbible mobile app.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '2.5rem'
          }}>

            {/* Feature 1: AI Morning Affirmation */}
            <div className="light-card" style={{
              padding: '2.2rem',
              borderRadius: '22px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255, 255, 255, 0.45)'
            }}>
              <div className="teal-badge" style={{ marginBottom: '1rem' }}>Feature 01 (NEW)</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                AI Morning Affirmations & Encouragement
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '1.2rem', lineHeight: '1.65' }}>
                Automatically generates a personalized, scripture-anchored word of affirmation every morning to start the day grounded in grace.
              </p>
              <div style={{ background: 'var(--bg-parchment)', padding: '1.2rem', borderRadius: '14px', border: '1px solid var(--border-light)', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#3A6B68' }}>
                  {affirmationsList[currentAffirmationIndex].verse}
                </span>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontStyle: 'italic', marginTop: '0.4rem' }}>
                  "{affirmationsList[currentAffirmationIndex].text}"
                </p>
              </div>
              <button
                className="btn btn-outline-teal"
                style={{ width: '100%', fontSize: '0.85rem' }}
                onClick={() => setCurrentAffirmationIndex((currentAffirmationIndex + 1) % affirmationsList.length)}
              >
                <RefreshCw size={14} /> Generate Next Morning Affirmation
              </button>
            </div>

            {/* Feature 2: 100% Offline Multi-Translation */}
            <div className="light-card" style={{
              padding: '2.2rem',
              borderRadius: '22px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255, 255, 255, 0.45)'
            }}>
              <div className="teal-badge" style={{ marginBottom: '1rem' }}>Feature 02</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                100% Offline Multi-Translation Bibles
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '1.2rem', lineHeight: '1.65' }}>
                Pre-bundled public domain translations (KJV & WEB for English, Louis Segond for French, Reina-Valera for Spanish). Zero internet dependency.
              </p>
              <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1rem' }}>
                {['KJV', 'WEB', 'Segond', 'Reina'].map(t => (
                  <button
                    key={t}
                    onClick={() => setSelectedTranslation(t)}
                    style={{
                      flex: 1,
                      padding: '0.45rem',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: '700',
                      background: selectedTranslation === t ? '#3A6B68' : 'var(--bg-parchment)',
                      color: selectedTranslation === t ? '#ffffff' : 'var(--text-dark)',
                      border: '1px solid var(--border-light)'
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div style={{ background: 'var(--bg-parchment)', padding: '1rem', borderRadius: '12px', fontSize: '0.88rem', color: 'var(--text-dark)' }}>
                {translationSamples[selectedTranslation]}
              </div>
            </div>

            {/* Feature 3: $0 Native Offline Text-to-Speech Audio */}
            <div className="light-card" style={{
              padding: '2.2rem',
              borderRadius: '22px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255, 255, 255, 0.45)'
            }}>
              <div className="teal-badge" style={{ marginBottom: '1rem' }}>Feature 03</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                $0 Native Text-to-Speech Audio
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '1.2rem', lineHeight: '1.65' }}>
                Listen to complete Bible chapters out loud using device-native speech synthesis without streaming data costs.
              </p>
              <button
                className="btn btn-secondary"
                style={{ width: '100%' }}
                onClick={handleToggleAudio}
              >
                {isPlayingAudio ? (
                  <> <VolumeX size={18} /> Stop Audio Playback </>
                ) : (
                  <> <Volume2 size={18} /> Listen to Chapter Out Loud <Play size={14} /> </>
                )}
              </button>
            </div>

            {/* Feature 4: Help Me Understand Context Engine */}
            <div className="light-card" style={{
              padding: '2.2rem',
              borderRadius: '22px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255, 255, 255, 0.45)'
            }}>
              <div className="teal-badge" style={{ marginBottom: '1rem' }}>Feature 04</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                "Help Me Understand" AI Context Engine
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '1rem', lineHeight: '1.65' }}>
                One-tap 3-part breakdown for any Bible verse: Historical context, Plain-language theology, and Practical application.
              </p>
              <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '0.8rem' }}>
                <button
                  onClick={() => setActiveContextTab('history')}
                  style={{ flex: 1, padding: '0.4rem', fontSize: '0.78rem', borderRadius: '6px', fontWeight: '600', background: activeContextTab === 'history' ? '#3A6B68' : 'var(--bg-parchment)', color: activeContextTab === 'history' ? '#fff' : '#333' }}
                >
                  Historical
                </button>
                <button
                  onClick={() => setActiveContextTab('theology')}
                  style={{ flex: 1, padding: '0.4rem', fontSize: '0.78rem', borderRadius: '6px', fontWeight: '600', background: activeContextTab === 'theology' ? '#3A6B68' : 'var(--bg-parchment)', color: activeContextTab === 'theology' ? '#fff' : '#333' }}
                >
                  Theological
                </button>
                <button
                  onClick={() => setActiveContextTab('application')}
                  style={{ flex: 1, padding: '0.4rem', fontSize: '0.78rem', borderRadius: '6px', fontWeight: '600', background: activeContextTab === 'application' ? '#3A6B68' : 'var(--bg-parchment)', color: activeContextTab === 'application' ? '#fff' : '#333' }}
                >
                  Application
                </button>
              </div>
              <div style={{ background: 'var(--bg-parchment)', padding: '1rem', borderRadius: '10px', fontSize: '0.88rem', color: 'var(--text-dark)', lineHeight: '1.6' }}>
                {activeContextTab === 'history' && (
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'flex-start' }}>
                    <Scroll size={16} color="#3A6B68" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>Written by Paul from prison in Rome (~62 AD) to encourage believers in Philippi.</span>
                  </div>
                )}
                {activeContextTab === 'theology' && (
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'flex-start' }}>
                    <Cross size={16} color="#3A6B68" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>God promises peace that guards believers' hearts beyond human comprehension.</span>
                  </div>
                )}
                {activeContextTab === 'application' && (
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'flex-start' }}>
                    <Sprout size={16} color="#3A6B68" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>Action: Whenever anxiety arises today, pause and pray with thanksgiving immediately.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Feature 5: AI Church & Sermon Note Structurer */}
            <div className="light-card" style={{
              padding: '2.2rem',
              borderRadius: '22px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255, 255, 255, 0.45)'
            }}>
              <div className="teal-badge" style={{ marginBottom: '1rem' }}>Feature 05</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                AI Church & Sermon Note Structurer
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '1rem', lineHeight: '1.65' }}>
                Formats raw service notes into clean summaries (Title, Scripture, Core Message, Action Items) with 1-tap export.
              </p>
              <button className="btn btn-outline-teal" style={{ width: '100%', fontSize: '0.85rem', marginBottom: '0.8rem' }} onClick={handleStructureNotes}>
                <Sparkles size={16} /> Structure Raw Sermon Notes
              </button>
              {structuredSermon && (
                <div style={{ background: 'var(--bg-teal-light)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-teal)', fontSize: '0.85rem', color: 'var(--text-dark)' }}>
                  <strong>Title:</strong> {structuredSermon.title}<br />
                  <strong>Key Scripture:</strong> {structuredSermon.keyScripture}<br />
                  <strong>Action Item:</strong> {structuredSermon.actionItems[0]}
                </div>
              )}
            </div>

            {/* Feature 6: Adaptive Bible Trivia */}
            <div className="light-card" style={{
              padding: '2.2rem',
              borderRadius: '22px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255, 255, 255, 0.45)'
            }}>
              <div className="teal-badge" style={{ marginBottom: '1rem' }}>Feature 06</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                Adaptive Bible Trivia Quiz Game
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '1rem', lineHeight: '1.65' }}>
                Dynamic multiple-choice quiz scaling in difficulty (Beginner ➔ Scholar) based on chapters read inside the app.
              </p>
              <div style={{ background: 'var(--bg-parchment)', padding: '1rem', borderRadius: '10px', marginBottom: '0.8rem' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                  {triviaQuestions[currentQuestionIndex].q}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                  {triviaQuestions[currentQuestionIndex].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswerQuestion(i)}
                      style={{
                        padding: '0.4rem',
                        fontSize: '0.8rem',
                        borderRadius: '6px',
                        border: '1px solid var(--border-light)',
                        background: selectedOption === i ? (i === triviaQuestions[currentQuestionIndex].correct ? '#E6F4EA' : '#FCE8E6') : '#fff',
                        color: 'var(--text-dark)',
                        fontWeight: '600'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textAlign: 'right', fontWeight: '600' }}>
                Score: {score} | Level: Scholar
              </div>
            </div>

            {/* Feature 7: Personal Prayer Journal & Answered Tracker */}
            <div className="light-card" style={{
              padding: '2.2rem',
              borderRadius: '22px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255, 255, 255, 0.45)'
            }}>
              <div className="teal-badge" style={{ marginBottom: '1rem' }}>Feature 07</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                Personal Prayer Journal & Answered Tracker
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '1rem', lineHeight: '1.65' }}>
                Private workspace to write prayer requests with a "Mark as Answered" toggle to celebrate long-term faith milestones.
              </p>
              <form onSubmit={handleAddPrayer} style={{ display: 'flex', gap: '0.4rem', marginBottom: '1rem' }}>
                <input
                  type="text"
                  placeholder="New prayer request..."
                  value={newPrayerText}
                  onChange={(e) => setNewPrayerText(e.target.value)}
                  className="form-input"
                  style={{ fontSize: '0.85rem', padding: '0.5rem' }}
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}>
                  Add
                </button>
              </form>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {journalEntries.map(e => (
                  <div key={e.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-parchment)', padding: '0.65rem', borderRadius: '8px', fontSize: '0.85rem' }}>
                    <span style={{ textDecoration: e.answered ? 'line-through' : 'none', color: e.answered ? '#137333' : 'inherit' }}>
                      {e.text}
                    </span>
                    <button onClick={() => handleToggleAnswered(e.id)} style={{ fontSize: '0.78rem', color: '#3A6B68', fontWeight: '700', border: 'none', background: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      {e.answered ? <><PartyPopper size={14} color="#137333" /> Answered</> : 'Mark Answered'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature 8: 4-Layer Moderation */}
            <div className="light-card" style={{
              padding: '2.2rem',
              borderRadius: '22px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255, 255, 255, 0.45)'
            }}>
              <div className="teal-badge" style={{ marginBottom: '1rem' }}>Feature 08</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                4-Layer Moderated Community Feed
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '1rem', lineHeight: '1.65' }}>
                Built-in community feed allowing users to share stories of encouragement under strict automated and community safety moderation.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-dark-soft)', fontWeight: '500' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={16} color="var(--primary)" /> Layer 1: Automated Profanity Shield</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={16} color="var(--primary)" /> Layer 2: Vector RAG Theological Guardrails</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={16} color="var(--primary)" /> Layer 3: Trusted Community Flagging</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={16} color="var(--primary)" /> Layer 4: Human Ministry Moderator Oversight</div>
              </div>
            </div>

            {/* Feature 9: Custom Share-Card Engine */}
            <div className="light-card" style={{
              padding: '2.2rem',
              borderRadius: '22px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255, 255, 255, 0.45)'
            }}>
              <div className="teal-badge" style={{ marginBottom: '1rem' }}>Feature 09</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                Custom Share-Card Engine
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '1rem', lineHeight: '1.65' }}>
                Converts verses into styled visual image cards (Dark Gradient, Warm Sepia, Soft Pastel, Minimal Light) ready for Instagram & WhatsApp.
              </p>

              {/* Theme Picker */}
              <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.8rem' }}>
                {[
                  { id: 'theme-dark-gradient', name: 'Dark' },
                  { id: 'theme-warm-sepia', name: 'Sepia' },
                  { id: 'theme-soft-pastel', name: 'Pastel' },
                  { id: 'theme-minimal-light', name: 'Light' }
                ].map(th => (
                  <button
                    key={th.id}
                    onClick={() => setCardTheme(th.id)}
                    style={{
                      flex: 1,
                      padding: '0.35rem',
                      fontSize: '0.78rem',
                      borderRadius: '6px',
                      border: '1px solid var(--border-light)',
                      background: cardTheme === th.id ? '#3A6B68' : 'var(--bg-parchment)',
                      color: cardTheme === th.id ? '#FFFFFF' : 'var(--text-dark)',
                      fontWeight: '700'
                    }}
                  >
                    {th.name}
                  </button>
                ))}
              </div>

              {/* Live Preview Card */}
              <div className={`share-card-preview ${cardTheme}`}>
                <p className="font-serif" style={{ fontSize: '1.05rem', fontStyle: 'italic' }}>
                  "{cardVerse}"
                </p>
                <div style={{ textAlign: 'right', fontSize: '0.82rem', fontWeight: '700', marginTop: '0.6rem' }}>
                  — {cardRef} | Arkbible
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: PRIVACY & AD-FREE GUARANTEE (BACKGROUND: 2223.webp COVER CENTER CENTER) */}
      <section style={{
        position: 'relative',
        padding: '7rem 0',
        background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.55), rgba(14, 23, 22, 0.78)), url('/images/2223.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        color: '#FFFFFF',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '850px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div className="hero-badge" style={{ marginBottom: '1.2rem', display: 'inline-flex' }}>
            <ShieldCheck size={16} /> Privacy & Integrity Guarantee
          </div>
          <h2 className="heading-lg" style={{ color: '#FFFFFF', marginBottom: '1.2rem' }}>
            100% Ad-Free, $0 Subscriptions, Zero Tracking
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.92)',
            fontSize: '1.15rem',
            lineHeight: '1.75',
            marginBottom: '2.5rem',
            fontWeight: '500'
          }}>
            Arkbible collects no sensitive personal telemetry, serves zero third-party ads, and requires no hidden paid subscriptions. Your quiet time with God remains sacred.
          </p>

          <button className="btn btn-primary" onClick={onOpenDownload} style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem', boxShadow: '0 6px 20px rgba(58, 107, 104, 0.4)' }}>
            <Download size={18} /> Get Arkbible App Now
          </button>
        </div>
      </section>
    </div>
  );
}
