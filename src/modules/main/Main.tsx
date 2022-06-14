import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {AppIcon} from '@src/components';
import icons from '@src/theme/icons';
import DummyOne from './DummyOne';
import DummyTwo from './DummyTwo';
import AddContainer from './AddContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
      {console.log('Main')}
      <AppIcon name={icons.book} />
      <AddContainer />
      <DummyOne />
      <DummyTwo />
    </View>
  );
};

export default Main;
