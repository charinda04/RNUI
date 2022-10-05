import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {}

const MovieDetails: React.FC<Props> = props => {
  const { navigation, route } = props;
  const navParams = route.params;
  console.log(navParams.item);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <Image
        style={{ width: 100, height: 150, margin: 8, alignSelf: 'center' }}
        source={{ uri: 'https://image.tmdb.org/t/p/w300//' + navParams.item.poster_path }}
      />
      <Text style={{ fontSize: 18, color: 'black', textAlign: 'center' }}>{navParams.item.title}</Text>
      <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>{navParams.item.overview}</Text>
    </View>
  );
};

export default MovieDetails;
