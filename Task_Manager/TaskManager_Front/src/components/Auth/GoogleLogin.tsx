import React, { useEffect } from 'react';
import User from '@/entities/User';
import { jwtDecode } from 'jwt-decode';
import { GoogleUser } from '@/types/GoogleUser';
import mapGoogleUserToUser from '@/adapters/googleUserAdapter';

declare global {
  interface Window {
    google: any;
  }
}

type GoogleCredentialResponse = {
  credential: string;
  select_by: string;
};

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const GoogleLoginButton: React.FC = () => {
  const handleCredentialResponse = (response: GoogleCredentialResponse) => {
    try {
      // 1. Decodificamos el JWT de Google
      const googleUser: GoogleUser = jwtDecode(response.credential);

      const appUser: User = mapGoogleUserToUser(googleUser);

      console.log('Google User:', googleUser);
      console.log('App User:', appUser);

      // 3. Guardamos al usuario en localStorage (temporal)
      localStorage.setItem('user', JSON.stringify(appUser));
    } catch (error) {
      console.error('Error al decodificar el JWT:', error);
    }
  };

  useEffect(() => {
    if (window.google && clientId) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('google-signin-button'),
        { theme: 'outline', size: 'large' }
      );
    }
  }, []);

  return <div id='google-signin-button'></div>;
};

export default GoogleLoginButton;
