import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {NativeBaseProvider} from 'native-base';
// import {connect} from 'react-redux';

import Welcome from './src/screens/Welcome';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import Home from './src/screens/Home';

import Header from './src/components/Header';

const Stack = createStackNavigator();

const App = props => {
  return (
    // <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Welcome}
          name="welcome"
          options={{
            header: Header,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          component={SignUp}
          name="daftar"
          options={{
            header: Header,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          component={Login}
          name="login"
          options={{
            header: Header,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          component={ForgotPassword}
          name="forgot"
          options={{
            header: Header,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          component={Home}
          name="home"
          options={{
            header: Header,
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </NativeBaseProvider>
  );
};

// const mapStateToProps = state => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, null)(App);
export default App;
