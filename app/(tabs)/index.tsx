import { StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from '../../src/components/Themed';
import { FAB } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <FAB
        icon={'message'}
        onPress={() => {
          router.push('/chat');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
