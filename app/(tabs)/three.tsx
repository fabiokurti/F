import { StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from '../../src/components/Themed';
import { FAB } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function TabThreeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <FAB
        style={{ alignSelf: 'flex-end', justifyContent: 'flex-end' }}
        icon={'message'}
        onPress={() => {
          router.push('/(auth)/chat');
        }}
      />
    </View>
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
