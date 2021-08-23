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
import SearchResult from './src/screens/SearchResult';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';
import FlightDetail from './src/screens/FlightDetail';
import Booking from './src/screens/Booking';
import BookingDetail from './src/screens/BookingDetail';
// import Splash from './src/screens/Splash';

import Header from './src/components/Header';

const Stack = createStackNavigator();

const App = props => {
  return (
    // <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          component={Splash}
          name="splash"
          options={{
            header: Header,
            headerTransparent: true,
          }}
        /> */}
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
        <Stack.Screen
          component={Search}
          name="search"
          options={{
            header: Header,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          component={SearchResult}
          name="searchResults"
          options={{
            header: Header,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          component={FlightDetail}
          name="detail"
          options={{
            header: Header,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          component={Booking}
          name="booking"
          options={{
            header: Header,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          component={BookingDetail}
          name="bookingDetail"
          options={{
            header: Header,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          component={Profile}
          name="profile"
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
