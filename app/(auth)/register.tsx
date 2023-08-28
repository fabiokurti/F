import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import Spacing from '../../resource/Spacing';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authentication = auth;

  const signUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('check your email');
    } catch (error: any) {
      console.log(error);
      alert('signUp  faild' + error.message);
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, justifyContent: 'center', gap: Spacing.regular, padding: Spacing.regular }}
      behavior={Platform.OS === 'ios' ? 'height' : undefined}
    >
      <Text variant="titleLarge" style={{ alignSelf: 'center' }}>
        Register
      </Text>

      <TextInput mode="outlined" placeholder="Email" value={email} onChangeText={(text: string) => setEmail(text)} />
      <TextInput mode="outlined" placeholder="Password" value={password} onChangeText={(text: string) => setPassword(text)} />
      <TextInput mode="outlined" placeholder="Fullname" />
      <TextInput mode="outlined" placeholder="phone" />
      <Button onPress={signUp}>register</Button>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({});
