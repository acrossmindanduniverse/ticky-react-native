import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({navigation, route}) => {
  return (
    <View style={HeaderStyles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {/* {console.log('ini nav', navigation)} */}
        <Icon
          name={
            route.name === 'welcome' || route.name === 'home'
              ? null
              : 'chevron-left'
            // 'chevron-left'
          }
          size={15}
          color="#000"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name={route.name === 'aaa' ? 'chevron-left' : null}
          size={20}
          color={'gray'}
          // color={route.name === 'detail3' ? '#fff' : '#000'}
        />
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
