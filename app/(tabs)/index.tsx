import { SafeAreaView, StyleSheet, View, TextInput, Image, TouchableOpacity  } from 'react-native';
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
      <View style={{ backgroundColor: '#1F79CC', height: '45%', width: '100%', borderRadius: 40,borderEndStartRadius: 50, borderEndEndRadius: 50 }}>
        <View style={{ paddingHorizontal: Spacing.big, width: '100%', flexDirection: 'row', marginTop: '20%', justifyContent: 'space-between' }}>
          {/* <Text style={{ paddingVertical: Spacing.regular, fontWeight: '700', color: 'white', fontSize: 20 }}>BIOTECH</Text> */}
          <View style={{ backgroundColor: 'white' }}>
            <MaterialCommunityIcons name="qrcode" size={50} />
          </View>
          <TouchableOpacity>
    <MaterialCommunityIcons name="bell" size={30} color="white" />
  </TouchableOpacity>
          {/* <Button style={{ alignSelf: 'center' }} mode="elevated">
            Edit Profile
          </Button> */}
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../assets/images/id.jpg')} style={{ width: 150, height: 150, borderRadius: 75 }} />
    </View>
        {/* <TextInput style={styles.input} onChangeText={onChangeText} value={''} placeholder="Search" /> */}
      </View>

      <Text variant="headlineMedium" style={{ paddingHorizontal: Spacing.regular, paddingTop: Spacing.small }}>
        Personal IDs
      </Text>
      <View style={{ padding: Spacing.regular, gap: Spacing.regular, flexDirection: 'row' }}>
        <Card style={{ height: 130, backgroundColor: 'white', flex: 1, alignItems: 'center', padding: Spacing.regular }}>
        <Image source={require('../../assets/images/id.jpg')} style={{ width: 150, height: 100 }} />
          {/* <Text variant="labelLarge" style={{ alignSelf: 'center', marginTop: Spacing.big }}>
            ID
          </Text> */}
        </Card>
        <Card style={{ height: 130, backgroundColor: 'white', flex: 1, alignItems: 'center', padding: Spacing.regular }}>
        <Image source={require('../../assets/images/pashaporte.jpg')} style={{ width: 150, height: 100 }} />
          {/* <MaterialCommunityIcons name="ambulance" size={50} color={'#1F79CC'} /> */}
          {/* <Text style={{}}>Pashaporta</Text> */}
        </Card>
      </View>

      {/* <Text variant="headlineMedium" style={{ paddingHorizontal: Spacing.regular, paddingTop: Spacing.small }}>
        Payment & gift cards
      </Text> */}
      <View style={{ padding: Spacing.regular, gap: Spacing.regular, flexDirection: 'row' }}>
      <Card style={{ height: 130, backgroundColor: 'white', flex: 1, alignItems: 'center', padding: Spacing.regular }}>
      <Image source={require('../../assets/images/patenta.jpg')} style={{ width: 150, height: 100 }} />
          {/* <MaterialCommunityIcons name="ambulance" size={50} color={'#1F79CC'} />
          <Text variant="labelLarge" style={{ alignSelf: 'center', marginTop: Spacing.big }}>
            Karta Shendetit
          </Text> */}
        </Card>
        <Card style={{ height: 130, backgroundColor: 'white', flex: 1, alignItems: 'center', padding: Spacing.regular }}>
        <Image source={require('../../assets/images/karteshendeti.jpg')} style={{ width: 150, height: 100 }} />

          {/* <MaterialCommunityIcons name="ambulance" size={50} color={'#1F79CC'} />
          <Text style={{}}>Patenta</Text> */}
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
    marginHorizontal: 30,
    marginVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});
