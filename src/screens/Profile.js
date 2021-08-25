import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
// import img from '../images/profile.png';
import user from '../images/user.png';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon2 from 'react-native-vector-icons/dist/Fontisto';
import Icon3 from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import BottomHeader from '../components/BottomHeader';

import {connect} from 'react-redux';
import {getUser} from '../redux/actions/user';
import {authLogout} from '../redux/actions/auth';
import {API_URL} from '@env';

class Profile extends Component {
  componentDidMount() {
    const {token} = this.props.auth;
    this.props.getUser(token);
    // console.log('ini tokennya');
    // console.log(token);
    // console.log(token.token);
  }

  onLogout = () => {
    this.props.authLogout();
    ToastAndroid.showWithGravity(
      'You are has been Log out',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    );
  };
  render() {
    const {details} = this.props.user;
    return (
      <View style={styles.parent}>
        <View>
          <View style={styles.parent2}>
            <Text style={styles.h1}>Profile</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('editProfile')}>
              <Text style={styles.h2}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.parent3}>
            {details.picture !== null ? (
              <View style={styles.imgWrap}>
                <Image
                  style={styles.img}
                  source={{
                    uri: `${API_URL}${details.picture}`,
                  }}
                />
              </View>
            ) : (
              <View style={styles.imgWrap}>
                <Image style={styles.img} source={user} />
              </View>
            )}

            <View style={styles.parent4}>
              <Text style={styles.h3}>{details.fullname}</Text>
              <Text style={styles.h4}>{details.email}</Text>
            </View>
          </View>
          <View style={styles.parent5}>
            <Text style={styles.h5}>Cards</Text>
            <Text style={styles.h6}>+ Add</Text>
          </View>

          <View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              <TouchableOpacity style={styles.parent6}>
                <Text style={styles.h7}>4441 1235 5512 5551</Text>
                <View style={styles.parent7}>
                  <Text style={styles.h8}>X Card</Text>
                  <Text style={styles.h8}>$ 1,440.2</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.parent62}>
                <Text style={styles.h7}>4441 1235 5512 5551</Text>
                <View style={styles.parent7}>
                  <Text style={styles.h8}>Z Card</Text>
                  <Text style={styles.h8}>$ 1,440.2</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View>
            <View style={styles.parent8}>
              <Icon name="star" color="#979797" size={30} />
              <Text style={styles.h9}>My Review</Text>
            </View>
            <View style={styles.parent8}>
              <Icon2 name="player-settings" color="#979797" size={30} />
              <Text style={styles.h9}>Settings</Text>
            </View>
            <TouchableOpacity onPress={this.onLogout} style={styles.parent8}>
              <Icon3 name="logout" color="#F24545" size={30} />
              <Text style={styles.h10}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        <BottomHeader navigation={this.props.navigation} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  auth: state.auth,
});

const mapDispatchToProps = {getUser, authLogout};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingBottom: 20,
  },
  parent2: {
    paddingHorizontal: 20,
    paddingTop: 30,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  h1: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
  },
  h2: {
    paddingTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#7ECFC0',
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 130,
  },
  imgWrap: {
    // paddingHorizontal: 5,
    // paddingVertical: 5,
    width: 140,
    height: 140,
    borderWidth: 4,
    borderRadius: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#7ECFC0',
  },
  parent3: {
    alignItems: 'center',
    marginTop: 20,
  },
  h3: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  h4: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6B6B6B',
    paddingTop: 6,
  },
  parent4: {
    marginTop: 20,
  },
  parent5: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  h5: {
    fontWeight: '600',
    fontSize: 14,
  },
  h6: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#7ECFC0',
  },
  parent6: {
    backgroundColor: '#7ECFC0',
    width: 220,
    height: 70,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 11,
  },
  parent62: {
    backgroundColor: '#535353',
    width: 220,
    height: 70,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginLeft: 28,
    marginRight: 20,
    marginTop: 11,
  },
  parent7: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  h7: {
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
    letterSpacing: 1.5,
    paddingBottom: 5,
  },
  h8: {
    color: 'white',
  },
  parent8: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 44,
    marginTop: 24,
  },
  h9: {
    paddingHorizontal: 37,
    fontWeight: 'bold',
    fontSize: 14,
  },
  h10: {
    paddingHorizontal: 37,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#F24545',
  },
});
