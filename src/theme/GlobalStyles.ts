import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

export const GlobalStyles = StyleSheet.create({
  textStyle: {
    fontSize: 12,
    color: Colors.Text,
  },
  boxShadow: {
    shadowOffset: {
      width: 2,
      height: -1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 14,
  },
});
