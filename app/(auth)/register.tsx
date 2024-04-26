import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import Spacing from '../../resource/Spacing';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    // Here you can perform any validation on the input fields
    // For simplicity, let's assume all fields are filled and valid
    // You can replace this logic with your actual validation logic

    // After validation, you can proceed to navigate the user to the next screen
    // For now, let's just log the user data to the console

    console.log('Fullname:', fullname);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Password:', password);
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
      <TextInput mode="outlined" placeholder="Phone" value={phone} onChangeText={(text: string) => setPhone(text)} />
      <Button onPress={signUp}>Register</Button>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({});
