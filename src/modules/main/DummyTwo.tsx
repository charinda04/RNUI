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

const DummyTwo: React.FC = () => {
  const shared = useReduxSelector(state => state.shared);

  return (
    <View style={styles.container}>
      {console.log('DummyTwo - shared')}
      <Text>DummyTwo</Text>
      <Text>{shared.dummyCount}</Text>
      <AppIcon name={icons.book} />
    </View>
  );
};

export default DummyTwo;
