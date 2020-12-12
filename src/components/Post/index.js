import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = ({post}) => {
  const [newPost, setNewPost] = useState(post);
  const [isLiked, setIsLiked] = useState(false);

  const [paused, setPause] = useState(false);

  const onPlayPausePress = () => {
    setPause(!paused);
  };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setNewPost({
      ...newPost,
      likes: newPost.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri: newPost.videoUri,
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
              uri: newPost.user.imageUri,
            }}
          />

          <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
            <AntDesign name={'heart'} size={40} color={isLiked ? 'red' : 'white'} />
            <Text style={styles.statsLabel}>{newPost.likes}</Text>
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <FontAwesome name={'commenting'} size={40} color="white" />
            <Text style={styles.statsLabel}>{newPost.comments}</Text>
          </View>

          <View style={styles.iconContainer}>
            <Fontisto name={'share-a'} size={35} color="white" />
            <Text style={styles.statsLabel}>{newPost.shares}</Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.userName}>{newPost.user.username}</Text>
            <Text style={styles.description}>{newPost.description}</Text>

            <View style={styles.songRow}>
              <Entypo name={'beamed-note'} size={24} color="white" />
              <Text style={styles.songName}>{newPost.songName}</Text>
            </View>
          </View>

          <Image style={styles.songImage} source={{uri: newPost.songImage}} />
        </View>
      </View>
    </View>
  );
};

export default Post;
