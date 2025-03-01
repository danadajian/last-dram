import React from 'react';
import { AuthProvider } from '../src/providers/AuthProvider';
import { App } from '../src/App';

export default function Root() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
