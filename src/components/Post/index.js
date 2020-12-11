import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = () => {
  const [paused, setPause] = useState(false);

  const onPlayPausePress = () => {
    setPause(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri: 'https://static.pexels.com/lib/videos/free-videos.mp4',
          }}
          style={styles.video}
          onError={(e) => console.log(e)}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>

      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <Image
            style={styles.profilePicture}
            source={{
              uri:
                'https://avatars2.githubusercontent.com/u/29770932?s=460&u=6ea35588386c9b72b388f674045f965056e68abe&v=4',
            }}
          />

          <View style={styles.iconContainer}>
            <AntDesign name={'heart'} size={40} color="white" />
            <Text style={styles.statsLabel}>123</Text>
          </View>

          <View style={styles.iconContainer}>
            <FontAwesome name={'commenting'} size={40} color="white" />
            <Text style={styles.statsLabel}>123</Text>
          </View>

          <View style={styles.iconContainer}>
            <Fontisto name={'share-a'} size={35} color="white" />
            <Text style={styles.statsLabel}>123</Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.userName}>@kvntzn</Text>
            <Text style={styles.description}>
              crashing waves, summer vacation pls :)
            </Text>

            <View style={styles.songRow}>
              <Entypo name={'beamed-note'} size={24} color="white" />
              <Text style={styles.songName}>RN - Tiktok app</Text>
            </View>
          </View>
          
          <Image
            style={styles.songImage}
            source={{
              uri:
                'https://avatars2.githubusercontent.com/u/29770932?s=460&u=6ea35588386c9b72b388f674045f965056e68abe&v=4',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Post;
