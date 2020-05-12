import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

import {Colors, GlobalStyles} from '../theme';
import {Button} from './Button';

export const SubHeader = () => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.back}
      onPress={() => Alert.alert('GO back')}>
      <Icon name="angle-left" size={18} color={Colors.Text} />
      <Text style={[GlobalStyles.textStyle, styles.backText]}>Back</Text>
    </TouchableOpacity>
    <View style={styles.buttonContainer}>
      <Button title="Visit Profile" />
      <Button title="Meetup" />
    </View>
    <View style={styles.search}>
      <EvilIcon name="search" size={30} color="#C30E2B" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
    flexDirection: 'row',
  },
  back: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  search: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  backText: {fontSize: 14, left: -5},
});
