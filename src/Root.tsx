import React from 'react';
import { AuthProvider } from './providers/AuthProvider';
import { App } from './App';

export const Root = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
