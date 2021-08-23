import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

import img from '../images/chat1.png';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Input} from 'react-native-elements';

export default class RoomChat extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.parent2}>
          <View style={styles.parentTop}>
            <Image style={styles.imgTop} source={img} />
            <Text style={styles.top1}>Zulaikha</Text>
          </View>
        </View>
        <ScrollView
          ref={ref => {
            this.scrollView = ref;
          }}
          onContentSizeChange={() =>
            this.scrollView.scrollToEnd({animated: true})
          }
          showsVerticalScrollIndicator={false}
          vertical={true}>
          <View style={styles.parent8}>
            <View style={styles.box1}>
              <View style={styles.box2}>
                <View style={styles.chatWrap}>
                  <Text style={styles.Textchat}>
                    Hey, welcome to Coffee Time! Today is Sunday and you know
                    what? You will get a cup of coffee free only at 7 to 9 AM.
                    If you still have some questions to ask, let me know. Have a
                    wonderful day!
                  </Text>
                </View>
                <Text style={styles.chat}>8:30</Text>
              </View>
              <View style={styles.imgWrap}>
                <Image style={styles.img} source={img} />
              </View>
            </View>

            <View style={styles.box1t}>
              <View style={styles.imgWrapt}>
                <Image style={styles.imgt} source={img} />
              </View>
              <View style={styles.box2t}>
                <View style={styles.chatWrapt}>
                  <Text style={styles.Textchatt}>What?</Text>
                </View>
                <Text style={styles.chatt}>8:30</Text>
              </View>
            </View>

            <View style={styles.box1}>
              <View style={styles.box2}>
                <View style={styles.chatWrap}>
                  <Text style={styles.Textchat}>
                    Hey, welcome to Coffee Time! Today is Sunday and you know
                    what? You will get a cup of coffee free only at 7 to 9 AM.
                    If you still have some questions to ask, let me know. Have a
                    wonderful day!
                  </Text>
                </View>
                <Text style={styles.chat}>8:30</Text>
              </View>
              <View style={styles.imgWrap}>
                <Image style={styles.img} source={img} />
              </View>
            </View>

            <View style={styles.box1t}>
              <View style={styles.imgWrapt}>
                <Image style={styles.imgt} source={img} />
              </View>
              <View style={styles.box2t}>
                <View style={styles.chatWrapt}>
                  <Text style={styles.Textchatt}>What?</Text>
                </View>
                <Text style={styles.chatt}>8:30</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.inputWrap}>
          <Input
            placeholder="Type a message..."
            leftIcon={
              <TouchableOpacity>
                <Icon name="camera" size={24} color="#9F9F9F" />
              </TouchableOpacity>
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  parent8: {
    marginHorizontal: 20,
  },
  parentTop: {
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 10,
  },
  imgTop: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  parent2: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
  title2: {
    paddingTop: 20,
    fontSize: 32,
    fontWeight: '600',
  },

  img: {
    borderRadius: 40,
    width: 40,
    height: 40,
  },
  // imgWrap: {
  //   backgroundColor: 'green',
  // },
  box1: {
    marginTop: 10,
    flexDirection: 'row',
  },
  box2: {
    paddingRight: 40,
    justifyContent: 'center',
    marginLeft: 60,
    marginRight: -20,
  },
  box3: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 5,
  },
  Textchat: {
    color: '#fff',
    fontWeight: '400',
    paddingHorizontal: 14,
  },
  chatWrap: {
    backgroundColor: '#7ECFC0',
    width: 200,
    paddingVertical: 15,
    borderRadius: 20,
  },
  chat: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#9F9F9F',
  },

  imgt: {
    borderRadius: 40,
    width: 40,
    height: 40,
  },
  // imgWrap: {
  //   backgroundColor: 'green',
  // },
  box1t: {
    marginTop: 10,
    flexDirection: 'row',
  },
  box2t: {
    paddingRight: 40,
    justifyContent: 'center',
    marginRight: 40,
    marginLeft: 20,
  },
  box3t: {
    justifyContent: 'center',
  },
  namet: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 5,
  },
  Textchatt: {
    color: '#000',
    fontWeight: '400',
    paddingHorizontal: 14,
  },
  chatWrapt: {
    backgroundColor: '#fff',
    width: 200,
    paddingVertical: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#7ECFC0',
  },
  chatt: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#9F9F9F',
  },
  top1: {
    fontWeight: 'bold',
    paddingVertical: 5,
    fontSize: 18,
  },
  top2: {
    color: '#9F9F9F',
  },
  inputWrap: {
    marginHorizontal: 20,
  },
});
