import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import Spacing from '../../resource/Spacing';
import { useRouter } from 'expo-router';
import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../config/firebase';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const router = useRouter();
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      setUserInof(response);
      alert('check your email');
    } catch (error: any) {
      console.log(error);
      alert('signUp  faild' + error.message);
    }
  };

  const setUserInof = async (user: UserCredential) => {
    try {
      const docRef = await setDoc(doc(db, `user/${user.user.uid}`), { fullname, phone });
    } catch (error) {
      console.log(error);
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
      <TextInput mode="outlined" placeholder="Fullname" value={fullname} onChangeText={(text: string) => setFullname(text)} />
      <TextInput mode="outlined" placeholder="phone" value={phone} onChangeText={(text: string) => setPhone(text)} />
      <Button onPress={signUp}>register</Button>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({});
