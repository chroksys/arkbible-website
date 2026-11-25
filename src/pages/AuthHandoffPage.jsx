import React, { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function AuthHandoffPage({ mode = 'callback', navigateTo }) {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';
  const [attemptedRedirect, setAttemptedRedirect] = useState(false);

  const { deepLinkUrl, errorMessage, isReset } = useMemo(() => {
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const hash = typeof window !== 'undefined' ? window.location.hash : '';

    const searchParams = new URLSearchParams(search);
    const hashParams = new URLSearchParams(hash.startsWith('#') ? hash.slice(1) : hash);

    const errDesc =
      searchParams.get('error_description') ||
      hashParams.get('error_description') ||
      searchParams.get('error') ||
      hashParams.get('error') ||
      '';

    const typeParam = searchParams.get('type') || hashParams.get('type') || '';
    const resetFlow = mode === 'reset-password' || typeParam === 'recovery';

    const targetPath = resetFlow ? 'reset-password' : '';
    const link = `arkbible://${targetPath}${search}${hash}`;

    return {
      deepLinkUrl: link,
      errorMessage: errDesc ? decodeURIComponent(errDesc.replace(/\+/g, ' ')) : '',
      isReset: resetFlow,
    };
  }, [mode]);

  useEffect(() => {
    if (errorMessage || typeof window === 'undefined') return;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || '');
    if (!isMobile) return;

    const timer = setTimeout(() => {
      setAttemptedRedirect(true);
      window.location.href = deepLinkUrl;
    }, 350);

    return () => clearTimeout(timer);
  }, [deepLinkUrl, errorMessage]);

  const copy = errorMessage
    ? {
        eyebrow: isFr ? 'Lien expiré ou invalide' : 'Link Expired or Invalid',
        title: isFr ? 'Impossible de vérifier ce lien' : 'We couldn’t verify this link',
        body: isFr
          ? 'Ce lien de confirmation ou de réinitialisation a peut-être expiré ou a déjà été utilisé. Veuillez demander un nouveau lien depuis l’application ArkBible.'
          : 'This verification or reset link may have expired or already been used. Please request a fresh link inside the ArkBible app.',
        cta: isFr ? 'Ouvrir l’application ArkBible' : 'Open ArkBible App',
      }
    : isReset
      ? {
          eyebrow: isFr ? 'Réinitialisation du mot de passe' : 'Password Reset',
          title: isFr ? 'Définissez votre nouveau mot de passe' : 'Set your new password',
          body: isFr
            ? 'Appuyez sur le bouton ci-dessous pour ouvrir ArkBible et choisir un nouveau mot de passe sécurisé pour votre compte.'
            : 'Tap the button below to open ArkBible and choose a new password for your account.',
          cta: isFr ? 'Ouvrir ArkBible pour réinitialiser' : 'Open ArkBible to Reset Password',
        }
      : {
          eyebrow: isFr ? 'Email confirmé' : 'Email Verified',
          title: isFr ? 'Bienvenue sur ArkBible' : 'Welcome to ArkBible',
          body: isFr
            ? 'Votre adresse email a été confirmée avec succès. Retournez dans l’application ArkBible pour continuer votre lecture et votre journal.'
            : 'Your email address has been verified. Return to the ArkBible app to continue reading and syncing your journal.',
          cta: isFr ? 'Ouvrir l’application ArkBible' : 'Open ArkBible App',
        };

  return (
    <section
      style={{
        padding: '6rem 0',
        background: 'var(--bg-light-soft)',
        minHeight: '72vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: '560px' }}>
        <div
          className="light-card"
          style={{
            padding: '2.75rem 2.25rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.1rem',
          }}
        >
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: errorMessage ? '#C0392B' : 'var(--secondary)',
            }}
          >
            {copy.eyebrow}
          </span>

          <h1
            className="heading-lg"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
              margin: 0,
              color: 'var(--primary-dark)',
            }}
          >
            {copy.title}
          </h1>

          <p
            style={{
              color: 'var(--text-dark-soft)',
              lineHeight: 1.7,
              fontSize: '1.02rem',
              margin: '0.25rem 0 0.75rem',
              maxWidth: '440px',
            }}
          >
            {copy.body}
          </p>

          {errorMessage && (
            <div
              style={{
                width: '100%',
                padding: '0.85rem 1rem',
                borderRadius: '12px',
                background: 'rgba(192, 57, 43, 0.08)',
                color: '#962D22',
                fontSize: '0.88rem',
                lineHeight: 1.5,
              }}
            >
              {errorMessage}
            </div>
          )}

          <a
            href={errorMessage ? 'arkbible://' : deepLinkUrl}
            className="btn btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '0.95rem 1.75rem',
              marginTop: '0.5rem',
              textDecoration: 'none',
            }}
          >
            {copy.cta}
          </a>

          {attemptedRedirect && !errorMessage && (
            <p style={{ fontSize: '0.86rem', color: 'var(--text-dark-muted)', margin: '0.25rem 0 0' }}>
              {isFr
                ? 'Si l’application ne s’est pas ouverte automatiquement, appuyez sur le bouton ci-dessus.'
                : 'If the app did not open automatically, tap the button above.'}
            </p>
          )}

          <p
            style={{
              fontSize: '0.86rem',
              color: 'var(--text-dark-muted)',
              lineHeight: 1.6,
              marginTop: '0.5rem',
              maxWidth: '420px',
            }}
          >
            {isFr
              ? 'Vous avez ouvert ce lien sur un ordinateur ? Ouvrez-le sur votre téléphone où ArkBible est installé, ou connectez-vous directement dans l’application.'
              : 'Opened this on a computer? Open the link on your phone where ArkBible is installed, or sign in directly in the app.'}
          </p>

          <button
            type="button"
            onClick={() => navigateTo('/')}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--primary)',
              fontWeight: 600,
              fontSize: '0.92rem',
              cursor: 'pointer',
              marginTop: '0.5rem',
            }}
          >
            {isFr ? 'Retour à l’accueil →' : 'Back to ArkBible.app →'}
          </button>
        </div>
      </div>
    </section>
  );
}
