import React from 'react';
import {View, Text} from 'react-native';
import Post from '../../components/Post';

const post1 =  {
  id: 'p1',
  user: {
    id: 'u1',
    imageUri: 'https://avatars2.githubusercontent.com/u/29770932?s=460&u=6ea35588386c9b72b388f674045f965056e68abe&v=4',
    username: '@kvntzn'
  },
  videoUri: 'https://static.pexels.com/lib/videos/free-videos.mp4',
  description: 'i think its summer',
  songName: 'Astronomia - Coffin dance',
  songImage: 'https://i.ytimg.com/vi/iLBBRuVDOo4/maxresdefault.jpg',
  likes: 123,
  comments: 12,
  shares: 44
}

const Home = () => {
  return (
    <View>
      <Post post={post1} />
    </View>
  );
};

export default Home;
