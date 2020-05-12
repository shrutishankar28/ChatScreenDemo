import React from 'react';
import {Image, StyleSheet, StyleProp, ImageStyle} from 'react-native';

interface PropsType {
  photoUrl: string;
  style?: StyleProp<ImageStyle>;
}

export const Avatar = (props: PropsType) => (
  <Image
    source={{uri: props.photoUrl}}
    style={[props.style, Styles.userAvatarContainer]}
  />
);

const Styles = StyleSheet.create({
  userAvatarContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'grey',
  },
});
