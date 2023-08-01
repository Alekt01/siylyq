import { ClerkProvider } from '@clerk/clerk-expo';
import { Stack } from 'expo-router';

import { AuthProvider } from '@/contexts/protected-provider';

import { tokenCache } from '../cache';

const CLERK_PUBLISHABLE_KEY =
  'pk_test_ZmxlZXQtZGFuZS03MS5jbGVyay5hY2NvdW50cy5kZXYk';
export default function Layout() {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <AuthProvider>
        <Stack>
          <Stack.Screen
            name="(screens)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(auth)/login"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </AuthProvider>
    </ClerkProvider>
  );
}
