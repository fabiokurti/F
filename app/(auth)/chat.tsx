import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatsFooter from '../../src/components/chats/ChatFooter';
import { FieldValue, Firestore, collection, doc, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { app, db } from '../../config/firebase';

export interface IMessage {
  message: string;
  messageId: string;
  createdAt: any;
  conversationId: string;
  senderId: string;
}

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const collectionRef = collection(db, `chats`);
  const addField = async (message: IMessage) => {
    try {
      const timestamp = serverTimestamp();
      const data = {
        message: message,
        messageID: 1,
        createdAt: timestamp,
        conversationId: 1,
        senderId: 1,
      };
    } catch (error) {
      console.log(error);
    }
  };
  // const q = query(collectionRef, orderBy('ceratedAt', 'desc'));

  // const onSubscribe = onSnapshot(q, (snapshot) => {
  //   console.log('snapshot');
  //   setMessage(
  //     snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       createdAt: doc.data().createdAt,
  //       text: doc.data().text,
  //       user: doc.data().user,
  //     }))
  //   );
  // });
  // return () => unsubscribe();
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <Text>ChatScreen</Text>
      </SafeAreaView>
      <ChatsFooter setValue={(text: string) => setMessage(text)} value={message} send={() => {}} />
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
