import { Easing, StyleSheet, Text, View } from 'react-native';
import React, { FC, useEffect } from 'react';
import Spacing from '../resource/Spacing';
import { IconButton } from 'react-native-paper';
import { MATERIAL_COLORS } from '../resource/Colors';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';

interface Props {
  reply: any;
  closereply: any;
  username: string | string[] | undefined;
}

const ReplyItem: FC<Props> = ({ username, reply, closereply }) => {
  return (
    <Animated.View style={[styles.replyroot]}>
      <View style={styles.replyContainer}>
        <Text>{username}</Text>
        <Text style={styles.reply}>{reply}</Text>
      </View>
      <IconButton icon={'close'} size={18} style={{ alignSelf: 'center' }} onPress={closereply} />
    </Animated.View>
  );
};

export default ReplyItem;

const styles = StyleSheet.create({
  replyroot: {
    height: 60,
    justifyContent: 'space-between',
    paddingStart: Spacing.regular,
    paddingTop: Spacing.regular,
    borderRadius: 12,
    backgroundColor: MATERIAL_COLORS.grey_200,
    flexDirection: 'row',
  },
  replyContainer: {},
  reply: {
    color: MATERIAL_COLORS.grey_500,
  },
});
