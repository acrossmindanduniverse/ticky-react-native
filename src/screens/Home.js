import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import img1 from '../images/img1.png';
import img2 from '../images/img-cr1.png';
import Icon from 'react-native-vector-icons/dist/Entypo';

import {SearchBar} from 'react-native-elements';

import TopHeader from '../components/TopHeader';
import BottomHeader from '../components/BottomHeader';

export default class Home extends Component {
  state = {
    search: '',
    array: [{id: 1}, {id: 2}, {id: 3}, {id: 4}],
  };

  updateSearch = search => {
    this.setState({search});
  };
  render() {
    return (
      <View style={styles.parent}>
        <TopHeader navigation={this.props.navigation} />
        <View style={styles.parent4}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('search')}>
            <SearchBar
              style={styles.search}
              containerStyle={styles.seacrhWrap}
              inputStyle={styles.seacrhWrap2}
              inputContainerStyle={styles.seacrhWrap3}
              placeholder="Where you want to go?"
              onChangeText={this.updateSearch}
              value={this.state.search}
              searchIcon={{size: 28}}
              disabled
            />
          </TouchableOpacity>
          <View style={styles.parent2}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('search')}>
              <Text style={styles.h1}>Trending destinations</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.h2}>View all</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            style={styles.wrapper}
            data={this.state.array}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                // onPress={() =>
                //   this.props.navigation.navigate('detail', {id: item.id})
                // }
                style={styles.wrapper2}>
                <View style={styles.itemWrap}>
                  <ImageBackground
                    imageStyle={{borderRadius: 20}}
                    source={img1}
                    style={styles.bgimg}>
                    <View style={styles.transparent}>
                      <Text style={styles.h3}>15 Airlines</Text>
                    </View>
                    <View style={styles.row1}>
                      <View>
                        <Text style={styles.city}>Tokyo,</Text>
                        <Text style={styles.country}>Japan</Text>
                      </View>
                      <View>
                        <Icon name="chevron-right" color="#fff" size={30} />
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => String(item.id)}
          />
          <View style={styles.destWrap}>
            <Text style={styles.dest}>Top 10 destinations</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.wrapper5}>
              <View style={styles.imgRad}>
                <Image style={styles.img2} source={img2} />
              </View>
              <Text style={styles.textCity}>PARIS</Text>
            </View>
            <View style={styles.wrapper5}>
              <View style={styles.imgRad}>
                <Image style={styles.img2} source={img2} />
              </View>
              <Text style={styles.textCity}>PARIS</Text>
            </View>
            <View style={styles.wrapper5}>
              <View style={styles.imgRad}>
                <Image style={styles.img2} source={img2} />
              </View>
              <Text style={styles.textCity}>PARIS</Text>
            </View>
            <View style={styles.wrapper5}>
              <View style={styles.imgRad}>
                <Image style={styles.img2} source={img2} />
              </View>
              <Text style={styles.textCity}>PARIS</Text>
            </View>
            <View style={styles.wrapper5}>
              <View style={styles.imgRad}>
                <Image style={styles.img2} source={img2} />
              </View>
              <Text style={styles.textCity}>PARIS</Text>
            </View>
          </ScrollView>
        </View>
        <BottomHeader navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  parent2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  parent3: {
    height: 200,
  },
  seacrhWrap: {
    backgroundColor: '#F2F3F4',
    borderColor: '#F2F3F4',
    borderRadius: 10,
    borderWidth: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    marginHorizontal: 20,
    marginTop: 10,
  },
  seacrhWrap2: {
    backgroundColor: '#F2F3F4',
    borderColor: '#F2F3F4',
    fontSize: 14,
  },
  seacrhWrap3: {
    backgroundColor: '#F2F3F4',
    borderColor: '#F2F3F4',
  },
  search: {
    backgroundColor: '#F2F3F4',
    borderColor: '#F2F3F4',
  },
  h1: {
    fontSize: 18,
    fontWeight: '500',
  },
  h2: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7ECFC0',
  },
  h3: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapper: {
    marginTop: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
    // marginRight: 20,
  },
  wrapper2: {
    marginRight: 25,
  },
  bgimg: {
    width: 150,
    height: 200,
    borderRadius: 20,
  },
  city: {
    color: 'white',
  },
  country: {
    color: 'white',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
  },
  transparent: {
    backgroundColor: 'white',
    width: 88,
    marginLeft: 26,
    opacity: 0.4,
    color: 'white',
    borderRadius: 30,
    height: 28,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 90,
  },
  dest: {
    fontSize: 18,
    fontWeight: '500',
  },
  destWrap: {
    paddingTop: 30,
    marginHorizontal: 20,
  },
  wrapper5: {
    marginLeft: 20,
    marginTop: 10,
  },
  imgRad: {
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#7ECFC0',
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  img2: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  textCity: {
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: '500',
  },
});
