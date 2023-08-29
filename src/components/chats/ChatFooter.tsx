import { Keyboard, StyleSheet, View } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import React, { FC, useEffect, useState } from 'react';
import { IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MATERIAL_COLORS } from '../../../resource/Colors';
import Spacing from '../../../resource/Spacing';
import ReplyItem from '../../../resource/ReplyItem';

interface Props {
  setValue: (((text: string) => void) & Function) | undefined;
  value: string;
  send: () => void;
}

const ChatsFooter = ({ setValue, value, send }: Props) => {
  const [newMssage, setNewmessage] = useState<string>('');
  // const {
  //   control,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     message: '',
  //   },
  // });
  console.log(newMssage);

  return (
    <>
      <SafeAreaView edges={['bottom']} style={styles.root}>
        <TextInput
          placeholder="Type something"
          mode="outlined"
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          outlineStyle={{ borderRadius: 20 }}
          outlineColor={MATERIAL_COLORS.grey_200}
          placeholderTextColor={MATERIAL_COLORS.grey_400}
          activeOutlineColor={MATERIAL_COLORS.grey_400}
        />

        <IconButton icon={'send'} iconColor={MATERIAL_COLORS.grey_700} onPress={send} style={{ alignSelf: 'flex-end' }} />
      </SafeAreaView>
    </>
  );
};

export default ChatsFooter;

const styles = StyleSheet.create({
  root: {
    backgroundColor: MATERIAL_COLORS.grey_300,
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: MATERIAL_COLORS.grey_200,
    marginStart: Spacing.regular,
    flex: 1,
    alignSelf: 'flex-end',
  },
});
