import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatsFooter from '../../src/components/chats/ChatFooter';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../config/firebase';

const ChatScreen = () => {
  useLayoutEffect(() => {
    const collectionRef = collection(db, 'chats');
    const q = query(collectionRef, orderBy('ceratedAt', 'desc'));

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
  }, []);
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <Text>ChatScreen</Text>
      </SafeAreaView>
      <ChatsFooter />
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
