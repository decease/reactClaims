import React from 'react-native';
import { Icon, Button } from 'react-native-material-design';
import AppStore from '../stores/AppStore';

var {
  Component,
  View,
  Text,
  TextInput,
  StyleSheet
} = React;

export default class NotLoginLabel extends Component {
  state = {
    username: '',
    password: ''
  };

  onSignIn () {
    console.log(this.state);
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <Icon name={'face'} />
            <TextInput
              autoFocus={true}
              autoCorrect={false}
              placeholder={'Логин'}
              style={[styles.input]}
              underlineColorAndroid='rgba(0,0,0,0)'
              onChangeText={(text) => this.setState({username: text})}
              value={this.state.username}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name={'lock'} />
            <TextInput
              autoCorrect={false}
              placeholder={'Пароль'}
              secureTextEntry={true}
              underlineColorAndroid='rgba(0,0,0,0)'
              style={[styles.input]}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
            />
          </View>
          <View style={styles.signin}>
            <Button 
              onPress={this.onSignIn.bind(this)}
              value={'Войти'}
            />
          </View>
        </View>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent'
  },
  text: {
    margin: 10,
    fontSize: 15,
    textAlign: 'right'
  },
  inputs: {
    marginTop: 10,
    marginBottom: 10,
    flex: .25
  },
  inputContainer: {
    padding: 10,
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent'
  },
  input: {
    position: 'absolute',
    left: 61,
    top: -5,
    right: 0,
    fontSize: 16
  },
  signin: {
    alignItems: 'flex-end'
  }
});