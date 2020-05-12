import React from 'react';
import {View, StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../theme/Colors';

export const Header = () => (
  <View style={styles.container}>
    <View style={styles.section}>
      <FontAwesomeIcon name="user-circle" size={30} color={Colors.Gray} />
    </View>
    <View style={styles.section}>
      <MaterialCommunityIcons
        name="heart-multiple"
        size={30}
        color={Colors.Red}
      />
    </View>
    <View style={[styles.section]}>
      <View style={styles.redCircle}>
        <MaterialCommunityIcons
          name="chat"
          size={25}
          color={Colors.White}
          style={styles.chatIcon}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Border,
    flexDirection: 'row',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  redCircle: {
    backgroundColor: Colors.Red,
    borderRadius: 16,
    height: 32,
    width: 32,
    position: 'relative',
  },
  chatIcon: {position: 'absolute', top: 4, left: 4},
});
