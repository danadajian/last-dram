import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from '../trpc';
import { httpBatchLink } from '@trpc/client';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

const getBaseUrl = () => {
  return Platform.OS === 'web' ? '' : Constants.expoConfig?.extra?.apiUrl;
};

export const queryClientContext = React.createContext<QueryClient | undefined>(undefined);

export const ClientProvider = ({ children }: React.PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/trpc`
        })
      ]
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient} context={queryClientContext}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};
