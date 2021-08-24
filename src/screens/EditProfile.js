import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {getUser, updateProfile} from '../redux/actions/user';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {API_URL} from '@env';
import {Formik} from 'formik';

import img from '../images/profile.png';
import user from '../images/user.png';

import {Input} from 'react-native-elements';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: 'null',
      email: '',
      phone_number: '',
      fullname: '',
      city: '',
      address: '',
      postcode: '',
      pictureUri: '',
      isUpdate: false,
    };
  }

  componentDidMount() {
    const {token} = this.props.auth;
    this.props.getUser(token);
  }

  componentDidUpdate(prevProps, prevState) {
    const {token} = this.props.auth;
    console.log('ini token', token);
    if (prevState.isUpdate !== this.state.isUpdate) {
      this.props.getUser(token);
    }
  }

  onUpdate = values => {
    const token = this.props.auth;
    if (this.state.pictures === null) {
      const data = {
        email: values.email,
        phone_number: values.phone_number,
        fullname: values.fullname,
        city: values.city,
        address: values.address,
        postcode: values.postcode,
      };
      // console.log(data);
      if (
        data.email !== '' &&
        data.phone_number !== '' &&
        data.fullname !== '' &&
        data.city !== '' &&
        data.address !== '' &&
        data.postcode !== ''
      ) {
        this.props.updateProfile(token, data).then(() => {
          this.setState({
            isUpdate: !this.state.isUpdate,
          });
        });
        ToastAndroid.showWithGravity(
          'Success update data!',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      } else {
        ToastAndroid.showWithGravity(
          'Form cannot be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      }
    } else {
      const data = {
        email: values.email,
        phone_number: values.phone_number,
        fullname: values.fullname,
        city: values.city,
        address: values.address,
        postcode: values.postcode,
        picture: this.state.picture,
      };
      // console.log(data);
      if (
        data.email !== '' &&
        data.phone_number !== '' &&
        data.fullname !== '' &&
        data.city !== '' &&
        data.address !== '' &&
        data.postcode !== ''
      ) {
        this.props.updateProfile(token, data).then(() => {
          this.setState({
            isUpdate: !this.state.isUpdate,
          });
        });
        ToastAndroid.showWithGravity(
          'Success update data!',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      } else {
        ToastAndroid.showWithGravity(
          'Form cannot be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      }
    }
  };

  onPick = () => {
    Alert.alert('Option', 'Choose your image', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Camera',
        onPress: () => this.selectLaunch(),
      },
      {
        text: 'Galery',
        onPress: () => this.selectPict(),
      },
    ]);
  };

  selectPict = e => {
    // let options = {
    //   mediaType: 'photo',
    //   maxWidth: 150,
    //   maxHeight: 150,
    // };
    launchImageLibrary({}, response => {
      if (!response.didCancel) {
        const maxSize = 1024 * 1024 * 2;
        if (response.assets[0].fileSize < maxSize) {
          this.setState({
            picture: response.assets[0],
            pictureUri: response.assets[0].uri,
          });
        } else {
          ToastAndroid.showWithGravity(
            'Picture max size 2MB',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
          );
        }
      }
    });
  };

  selectLaunch = e => {
    let options = {
      mediaType: 'photo',
      // maxWidth: 150,
      // maxHeight: 150,
    };
    launchCamera(options, response => {
      if (!response.didCancel) {
        this.setState({
          picture: response.assets[0],
          pictureUri: response.assets[0].uri,
        });
      }
    });
  };

  render() {
    const {details} = this.props.user;
    return (
      <Formik
        initialValues={{
          email: `${details.email}`,
          phone_number: `${details.phone_number}`,
          fullname: `${details.fullname}`,
          city: `${details.city}`,
          address: `${details.address}`,
          postcode: `${details.postcode}`,
        }}
        onSubmit={values => this.onUpdate(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.parent}>
            <View style={styles.parent2}>
              <Text style={styles.title2}>Edit Profile</Text>
              <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                <Text style={styles.btnText}>Save</Text>
              </TouchableOpacity>
            </View>
            <ScrollView vertical showsVerticalScrollIndicator={false}>
              <View style={styles.parent3}>
                <View style={styles.imgWrap2}>
                  {details.picture === null ? (
                    <View style={styles.imgWrap}>
                      <Image
                        style={styles.img}
                        source={
                          this.state.pictureUri === ''
                            ? {
                                uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                              }
                            : {uri: this.state.pictureUri}
                        }
                      />
                    </View>
                  ) : (
                    <View style={styles.imgWrap}>
                      <Image
                        style={styles.img}
                        source={
                          this.state.pictureUri === ''
                            ? {
                                uri: `${API_URL}${details.picture}`,
                              }
                            : {
                                uri: this.state.pictureUri,
                              }
                        }
                      />
                    </View>
                  )}
                  <TouchableOpacity onPress={this.onPick} style={styles.edit1}>
                    <Text style={styles.h19}>Edit Image</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.h1}>Contact</Text>
                <View>
                  <Text style={styles.h2}>Email</Text>
                  <Input
                    style={styles.input}
                    value={values.email}
                    keyboardType="email-address"
                    onChangeText={handleChange('email')}
                    inputContainerStyle={styles.input}
                  />
                  <Text style={styles.t2}>Phone Number</Text>
                  <Input
                    style={styles.input}
                    inputContainerStyle={styles.input}
                    value={values.phone_number}
                    keyboardType="numeric"
                    onChangeText={handleChange('phone_number')}
                  />
                </View>
              </View>
              <View style={styles.parent3}>
                <Text style={styles.h1}>Biodata</Text>
                <View>
                  <Text style={styles.h2}>Username</Text>
                  <Input
                    style={styles.input}
                    inputContainerStyle={styles.input}
                    onChangeText={handleChange('fullname')}
                    onBlur={handleBlur('fullname')}
                    value={values.fullname}
                  />
                  <Text style={styles.t2}>City</Text>
                  <Input
                    style={styles.input}
                    inputContainerStyle={styles.input}
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    value={values.city}
                  />
                  <Text style={styles.t2}>Address</Text>
                  <Input
                    style={styles.input}
                    inputContainerStyle={styles.input}
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    value={values.address}
                  />
                  <Text style={styles.t2}>Post Code</Text>
                  <Input
                    style={styles.input}
                    inputContainerStyle={styles.input}
                    onChangeText={handleChange('postcode')}
                    onBlur={handleBlur('postcode')}
                    value={values.postcode}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  auth: state.auth,
});

const mapDispatchToProps = {getUser, updateProfile};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  parent2: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  parent3: {
    marginHorizontal: 20,
  },

  h1: {
    fontSize: 16,
    fontWeight: '600',
    // paddingTop: 10,
  },
  h19: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#5dcab6',
    // paddingTop: 10,
  },
  h2: {
    color: '#9B96AB',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  t2: {
    color: '#9B96AB',
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  title2: {
    paddingTop: 90,
    fontSize: 32,
    fontWeight: '600',
    paddingBottom: 20,
  },

  input: {
    borderColor: '#7ECFC0',
  },
  btn: {
    marginTop: 90,
    paddingHorizontal: 35,
    borderRadius: 10,
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#7ECFC0',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#7ECFC0',
    marginTop: 10,
  },
  imgWrap2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  edit1: {
    paddingVertical: 10,
    paddingBottom: 20,
  },
});
