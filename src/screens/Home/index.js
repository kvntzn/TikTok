import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Post from '../../components/Post';

import posts from '../../../data/posts';

const Home = () => {
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <Post post={item.item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 45}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
      />
    </View>
  );
};

export default Home;
