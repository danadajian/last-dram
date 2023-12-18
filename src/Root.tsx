import React from 'react';
import { AuthProvider } from './AuthProvider';
import { App } from './App';

export const Root = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
