import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {AppIcon} from '@src/components';
import icons from '@src/theme/icons';
import {useReduxSelector} from '@src/app/store/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const DummyOne: React.FC = () => {
  const count = useReduxSelector(state => state.shared.count);

  return (
    <View style={styles.container}>
      {console.log('DummyOne - count')}
      <Text>DummyOne</Text>
      <Text>{count}</Text>
    </View>
  );
};

export default DummyOne;
