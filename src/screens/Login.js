import React from 'react';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';
import { Input, Button, Text } from 'react-native-elements';
import Container from '../components/Container';
import { onSignIn } from '../config/auth';

const Login = ({ navigation }) => (
  <Container justifyContent="center">
    <Text style={{ marginBottom: 10, color: 'grey' }} h2>
      Aplikasi Input
    </Text>
    <Text style={{ marginBottom: 50, color: 'grey' }} h2>
      Persediaan Barang
    </Text>
    <Input
      containerStyle={{ width: '80%' }}
      placeholder="Username"
      inputContainerStyle={{
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'grey',
        height: 50,
        marginVertical: 10,
      }}
      leftIcon={
        <IconSLI
          name="user"
          size={20}
          color="black"
          style={{ marginRight: 10 }}
        />
      }
    />
    <Input
      placeholder="Password"
      containerStyle={{ width: '80%' }}
      inputContainerStyle={{
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'grey',
        height: 50,
        marginVertical: 10,
      }}
      leftIcon={
        <IconSLI
          name="lock"
          size={20}
          color="black"
          style={{ marginRight: 10 }}
        />
      }
    />
    <Button
      title="Login"
      containerStyle={{ width: '40%', marginVertical: 10 }}
      onPress={() => onSignIn().then(() => navigation.navigate('SignedIn'))}
    />
  </Container>
);

export default Login;
