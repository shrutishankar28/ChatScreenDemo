import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import {chatList} from './data';
import {Header, SubHeader, Avatar} from './components';
import {Colors, GlobalStyles} from './theme';

const App = () => {
  const [input, setInput] = useState('');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Header />
        <SubHeader />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {chatList.map((item) => (
            <View style={styles.chatRow}>
              {item.username !== 'me' && (
                <Avatar photoUrl={item.profilePic} style={styles.right} />
              )}
              <View style={[styles.textBox, GlobalStyles.boxShadow]}>
                <Text style={GlobalStyles.textStyle}>{item.commentText}</Text>
              </View>
              {item.username === 'me' && (
                <Avatar photoUrl={item.profilePic} style={styles.left} />
              )}
            </View>
          ))}
        </ScrollView>
        <View style={[styles.textInputBox, GlobalStyles.boxShadow]}>
          <TextInput
            onChangeText={(text) => setInput(text)}
            value={input}
            multiline={true}
            style={styles.textInput}
          />
          <View style={styles.sendBox}>
            <Text
              style={[GlobalStyles.textStyle, {color: Colors.Red}]}
              onPress={() => Alert.alert(' Send message')}>
              Send
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 6,
    backgroundColor: Colors.White,
    position: 'relative',
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.White,
    margin: 6,
  },
  textBox: {
    alignSelf: 'center',
    backgroundColor: Colors.White,
    shadowColor: Colors.Black,
    flex: 1,
    borderRadius: 10,
    shadowOffset: {
      width: 2,
      height: -1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 14,
    padding: 10,
  },
  chatRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  left: {marginLeft: 10},
  right: {marginRight: 10},
  textInputBox: {
    padding: 10,
    margin: 10,
    borderRadius: 15,
    minHeight: 60,
    position: 'absolute',
    bottom: 20,
    backgroundColor: Colors.White,
    width: '95%',
    flexDirection: 'row',
  },
  textInput: {
    fontSize: 12,
    color: Colors.Text,
    flex: 1,
  },
  sendBox: {
    marginVertical: 2,
    marginLeft: 8,
    borderLeftColor: Colors.Border,
    borderLeftWidth: 0.5,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
