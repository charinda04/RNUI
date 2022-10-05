import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {}

const Movie: React.FC<Props> = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  console.log(data);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=71ff6224b2015b77863fe3145aa571fd&language=en-US&page=1')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, color: 'black', textAlign: 'center' }}>{data.title}</Text>
          <Text style={{ fontSize: 25, color: 'red', textAlign: 'center', paddingBottom: 10 }}>Most Popular Movies:</Text>

          <FlatList
            data={data.results}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('MOVIE_DETAILS', { item });
                }}>
                <Image
                  style={{ width: 100, height: 150, margin: 8, alignSelf: 'center' }}
                  // source={{uri :item.poster_path}}/>
                  source={{ uri: 'https://image.tmdb.org/t/p/w300//' + item.poster_path }}
                />
                <Text style={{ fontSize: 18, color: 'black', textAlign: 'center' }}>{item.title}</Text>
                {/* <Text style={{ fontSize: 13, color: 'blue', textAlign: 'center' }}>
                    {item.poster_path}</Text> */}
                <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>{item.overview}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Movie;
