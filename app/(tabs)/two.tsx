import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Text, View } from '../../src/components/Themed';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { auth } from '../../config/firebase';

export default function TabTwoScreen() {
  const router = useRouter();
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'height' : undefined} style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <Button
        onPress={() => {
          router.push('/signIn');
        }}
      >
        Login
      </Button>
      */}
      <Button
        onPress={() => {
          auth.signOut;
          router.replace('/(auth)/signIn');
        }}
      >
        signOut
      </Button>

      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
