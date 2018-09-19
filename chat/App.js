/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 
import Main from './components/login'
import Chat from './components/Chat'


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'


import { createStackNavigator } from 'react-navigation'

const navigator = createStackNavigator({
  // Chat: { screen: Chat },
  Main: { screen: Main },
  Chat: { screen: Chat },
});

// Export it as the root component
export default navigator

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends React.Component {
//   state = {
//     messages: [],
//   }

//   componentWillMount() {
//     this.setState({
//       messages: [
//         {
//           _id: 2,
//           text: 'Hello developer',
//           createdAt: new Date(),
//           user: {
//             _id: 2,
//             name: 'React Native',
//             avatar: 'https://placeimg.com/140/140/any',
//           },
//         },
//          {
//           _id: 1,
//           text: '',
//           createdAt: new Date(),
//           user: {
//             _id: 1,
//             name: 'React Native',
//             avatar: 'https://placeimg.com/140/140/any',
//           },
//         },
//       ],
//     })
//   }

//   onSend(messages = []) {
//     this.setState(previousState => ({
//       messages: GiftedChat.append(previousState.messages, messages),
//     }))
//   }

//   render() {
//     return (
//       <GiftedChat
//         messages={this.state.messages}
//         onSend={messages => this.onSend(messages)}
//         user={{
//           _id: 1,
//         }}
//       />
//     )
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
