import React from 'react';
import { AuthProvider } from '../src/frontend/providers/AuthProvider';
import { App } from '../src/frontend/App';

export default function Root() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
