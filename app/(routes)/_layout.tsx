import { Stack } from 'expo-router';
export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="chat"
        options={{
          title: 'chat',
          headerShown: true,
        }}
      />
    </Stack>
  );
}
