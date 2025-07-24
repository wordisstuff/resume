import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


const CookieBanner: React.FC = () => {
      const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = (): void => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={styles.banner}>
      <p>{t('sorry.cookie')} 🍪</p>
      <button onClick={handleAccept} style={styles.button}>{t('sorry.accept')}</button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  banner: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    zIndex: 1000,
  },
  button: {
    marginLeft: '10px',
    padding: '5px 10px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default CookieBanner;