import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/Entypo';

import {useNavigation} from '@react-navigation/native';

const Header = ({route}) => {
  // const navigation = useNavigation();
  return (
    <View style={HeaderStyles.header}>
      <TouchableOpacity
        style={HeaderStyles.btn1}
        // onPress={() => navigation.goBack()}
      >
        {/* {console.log('ini nav', navigation)} */}
        <Icon
          name={
            route.name === 'welcome' ||
            route.name === 'home' ||
            route.name === 'profile' ||
            route.name === 'splash' ||
            route.name === 'booking'
              ? null
              : 'chevron-left'
            // 'chevron-left'
          }
          size={20}
          color={
            route.name === 'search' ||
            route.name === 'searchResults' ||
            route.name === 'detail' ||
            route.name === 'bookingDetail'
              ? '#fff'
              : '#000'
          }
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {route.name === 'bookingDetail' ? (
          <Icon3 name="dots-three-vertical" color="#fff" size={20} />
        ) : (
          <Icon2
            name={route.name === 'search' ? 'arrow-expand' : null}
            size={20}
            color={route.name === 'search' ? '#fff' : '#000'}
            // color={route.name === 'detail3' ? '#fff' : '#000'}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const HeaderStyles = StyleSheet.create({
  header: {
    // backgroundColor: '#6A4029',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  // btn1: {
  //   height: 30,
  //   backgroundColor:'blue',
  // },
});

export default Header;

// import React from 'react';
// import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import AntIcon from 'react-native-vector-icons/AntDesign';

// const Header = ({navigation, route}) => {
//   return (
//     <React.Fragment>
//       <View style={HeaderStyles.header}>
//         {route.name === 'welcome' ? (
//           <View />
//         ) : (
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Icon
//               name={'chevron-left'}
//               size={25}
//               // color="#000"
//               color={route.name === 'daftar' ? '#fff' : '#fff'}
//             />
//           </TouchableOpacity>
//         )}

//         {route.name === 'welcome' ? (
//           <View />
//         ) : (
//           <React.Fragment>
//             {route.name === 'daftar' ? (
//               <Text style={HeaderStyles.textHeader}>CUANKU Balance</Text>
//             ) : (
//               <Text style={HeaderStyles.textHeader}>{route.name}</Text>
//             )}
//           </React.Fragment>
//         )}

//         <TouchableOpacity
//           style={HeaderStyles.right}
//           onPress={() => navigation.navigate('daftar')}>
//           {route.name === 'homed' ? (
//             <AntIcon
//               name={'barschart'}
//               size={25}
//               color="#fff"
//               // color={scene.route.name === 'detail3' ? '#fff' : '#000'}
//             />
//           ) : (
//             <AntIcon />
//           )}
//         </TouchableOpacity>
//       </View>
//     </React.Fragment>
//   );
// };

// const HeaderStyles = StyleSheet.create({
//   header: {
//     backgroundColor: '#00bfff',
//     height: 60,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   textHeader: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     color: 'white',
//     paddingLeft: 20,
//   },
//   right: {
//     marginLeft: 130,
//   },
// });

// export default Header;
