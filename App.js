import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {NativeBaseProvider} from 'native-base';
import {connect, useSelector} from 'react-redux';
//hello
//yo

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
import Chat from './src/screens/Chat';
import Notif from './src/screens/Notif';
import EditProfile from './src/screens/EditProfile';
import RoomChat from './src/screens/RoomChat';
// import Splash from './src/screens/Splash';

import Header from './src/components/Header';
import Loading from './src/components/Loading';

const Stack = createStackNavigator();

const App = props => {
  const {isLoading} = useSelector(state => state.globalReducer);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.auth.token === null ? (
          <React.Fragment>
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
          </React.Fragment>
        ) : (
          <React.Fragment>
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
              component={Chat}
              name="chat"
              options={{
                header: Header,
                headerTransparent: true,
              }}
            />
            <Stack.Screen
              component={Notif}
              name="notif"
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
            <Stack.Screen
              component={EditProfile}
              name="editProfile"
              options={{
                header: Header,
                headerTransparent: true,
              }}
            />
            <Stack.Screen
              component={RoomChat}
              name="roomChat"
              options={{
                header: Header,
                headerTransparent: true,
              }}
            />
          </React.Fragment>
        )}
      </Stack.Navigator>
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(App);
// export default App;
