import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import { AppIcon } from '@src/components';
import icons from '@src/theme/icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Main: React.FC = () => (
  <View style={styles.container}>
    <Text>Main</Text>
    <AppIcon name={icons.book} />
  </View>
);

export default Main;
