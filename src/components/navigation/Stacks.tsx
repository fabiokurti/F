import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../config/firebase';

const Stacks = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user', user);
      setUser(user);
    });
  });

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(route)" options={{ headerShown: false }} />
        </>
      ) : (
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )}
    </Stack>
  );
};

export default Stacks;
