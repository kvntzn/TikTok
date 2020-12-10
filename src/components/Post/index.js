import React, { useState } from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';

const Post = () => {
 
  const [paused, setPause] =  useState(false);

  const onPlayPausePress = () => {
    setPause(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri:
              'https://vod-progressive.akamaized.net/exp=1607614862~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F657%2F17%2F428287241%2F1858680762.mp4~hmac=eff1291d334250865833365e302816c9d400bd2bd9440de56e1b40cc72446aa5/vimeo-prod-skyfire-std-us/01/657/17/428287241/1858680762.mp4?filename=production+ID%3A4625996.mp4',
          }}
          style={styles.video}
          onError={(e) => console.log(e)}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
