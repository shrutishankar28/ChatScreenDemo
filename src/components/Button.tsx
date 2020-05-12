import React from 'react';
import {Text, StyleSheet, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, GlobalStyles} from '../theme';

interface PropsType {
  title: string;
}

export const Button = (props: PropsType) => (
  <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    colors={['#A50819', '#C30F2B', '#E0133C']}
    style={styles.button}>
    <Text
      style={[GlobalStyles.textStyle, {color: Colors.White}]}
      onPress={() => Alert.alert('Pressed')}>
      {props.title}
    </Text>
  </LinearGradient>
);

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.Red,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
