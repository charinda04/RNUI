import { AppIcon } from '@src/components';
import icons from '@src/theme/icons';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Home: React.FC = () => (
  <View style={styles.container}>
    <Text>Home</Text>
    <AppIcon name={icons.book} />
  </View>
);

export default Home;
