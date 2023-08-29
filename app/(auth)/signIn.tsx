import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { auth } from '../../config/firebase';
import { TextInput, Text, Button } from 'react-native-paper';
import Spacing from '../../resource/Spacing';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LogInScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      alert('signIn  faild' + error.message);
    }
    router.replace('/(tabs)/');
  };
  return (
    <View style={{ flex: 1, padding: Spacing.regular, gap: Spacing.regular, justifyContent: 'center' }}>
      <Text variant="titleLarge" style={{ alignSelf: 'center' }}>
        LOGIN
      </Text>
      <TextInput mode="outlined" placeholder="Email" value={email} onChangeText={(text: string) => setEmail(text)} />
      <TextInput mode="outlined" placeholder="Password" secureTextEntry={true} value={password} onChangeText={(text: string) => setPassword(text)} />
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button onPress={signIn}>Login</Button>
        <Button onPress={() => router.push('/register')}>register</Button>
      </View>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({});
