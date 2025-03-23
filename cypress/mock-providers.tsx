import React, { PropsWithChildren } from 'react';
import { ClerkProvider } from '@clerk/clerk-expo';
import { InitialState } from '@clerk/types';

const mockClerkState = {
  user: {
    id: 'user_123',
    firstName: 'Test',
    lastName: 'User',
    primaryEmailAddress: {
      emailAddress: 'test@user.com'
    }
  }
} as InitialState;

export const MockProviders = ({ children }: PropsWithChildren) => (
  <ClerkProvider initialState={mockClerkState} publishableKey="pk_test_dml0YWwtcGVnYXN1cy05OS5jbGVyay5hY2NvdW50cy5kZXYk">
    {children}
  </ClerkProvider>
);
