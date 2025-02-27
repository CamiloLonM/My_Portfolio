import React, { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
  }
}

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const GoogleLoginButton: React.FC = () => {
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'outline', size: 'large' }
    );
  }, []);

  const handleCredentialResponse = (response: JSON) => {
    console.log('Credential Response:', response);
  };

  return <div id='google-signin-button'></div>;
};

export default GoogleLoginButton;
