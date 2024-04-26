import { SafeAreaView, StyleSheet, View, TextInput, Image  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FAB, Button, Card, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import Spacing from '../../resource/Spacing';
import React from 'react';

export default function TabThreeScreen() {
  const [text, onChangeText] = React.useState('Search');

  const router = useRouter();
  return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  {/* Profile photo in a circular container */}
  <View style={{ backgroundColor: 'white', width: 150, height: 150, borderRadius: 75, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
    <Image source={require('../../assets/images/id.jpg')} style={{ width: 140, height: 140, borderRadius: 70 }} />
  </View>
  {/* Profile information */}
  <View style={{ width: '80%' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <Text style={{ width: 62, marginRight: 10 }}>Name:</Text>
      <TextInput style={[styles.input, { flex: 1 }]} value="John" editable={false} />
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <Text style={{ width: 62, marginRight: 10 }}>Surname:</Text>
      <TextInput style={[styles.input, { flex: 1 }]} value="Doe" editable={false} />
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <Text style={{ width: 62, marginRight: 10 }}>Email:</Text>
      <TextInput style={[styles.input, { flex: 1 }]} value="john.doe@test.com" editable={false} />
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <Text style={{ width: 62, marginRight: 10 }}>Phone:</Text>
      <TextInput style={[styles.input, { flex: 1 }]} value="123-456-7890" editable={false} />
    </View>
  </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  input: {
    height: 40,
    marginHorizontal: 30,
    marginVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});
