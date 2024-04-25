import { SafeAreaView, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from '../../src/components/Themed';
import { FAB } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const router = useRouter();
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text>
        Ktu shif bej ndonje editim sa per te ber ui dmth 
      </Text>
      <Text>
        Shif bej naigje vet me ndonje tutorial dhe e shofim bashk pastaj se skam koh 
      </Text>
      {/* <FAB
        style={{ alignSelf: 'flex-end', justifyContent: 'flex-end' }}
        icon={'message'}
        onPress={() => {
          router.push('/(auth)/chat');
        }}
      /> */}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
