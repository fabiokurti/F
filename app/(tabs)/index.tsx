import { SafeAreaView, StyleSheet, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FAB, Button, Card, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import Spacing from '../../resource/Spacing';
import React from 'react';

export default function TabOneScreen() {
  const [text, onChangeText] = React.useState('Search');

  const router = useRouter();
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ backgroundColor: 'blue', height: '35%', width: '100%', borderRadius: 50 }}>
        <View style={{ paddingHorizontal: Spacing.big, width: '100%', flexDirection: 'row', marginVertical: '20%', justifyContent: 'space-between' }}>
          <Text style={{ paddingVertical: Spacing.regular, fontWeight: '700', color: 'white', fontSize: 20 }}>BIOTECH</Text>
          <Button style={{ alignSelf: 'center' }} mode="elevated">
            Edit Profile
          </Button>
        </View>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      </View>
      <View style={{ padding: Spacing.regular, gap: Spacing.regular, flexDirection: 'row' }}>
        <Card style={{ height: 130, backgroundColor: 'white', flex: 1, alignItems: 'center', padding: Spacing.regular }}>
          <MaterialCommunityIcons name="ambulance" size={50} color={'blue'} />
          <Text variant="labelLarge" style={{ alignSelf: 'center', marginTop: Spacing.big }}>
            Ambulance
          </Text>
        </Card>
        <Card style={{ height: 130, backgroundColor: 'white', flex: 1 }}>
          <Text style={{}}>test</Text>
        </Card>
        <Card style={{ height: 130, backgroundColor: 'white', flex: 1 }}>
          <Text style={{}}>test</Text>
        </Card>
      </View>
      {/* <FAB
        style={{ alignSelf: 'flex-end', justifyContent: 'flex-end' }}
        icon={'message'}
        onPress={() => {
          router.push('/(auth)/chat');
        }}
      /> */}
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
    margin: 30,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: Spacing.regular, 
    fontWeight: '700',
  },
});
