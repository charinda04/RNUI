import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Animation from 'lottie-react-native';

import { AppIcon } from '@src/components';
import icons from '@src/theme/icons';
import DummyOne from './DummyOne';
import DummyTwo from './DummyTwo';
import AddContainer from './AddContainer';
// import anim from '@assets/lottie/react-logo.json';
import football from '@assets/lottie/football.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A6207E',
  },
});

const Main: React.FC = () => {
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <>
      {/* <View style={styles.container}>
        <Text>Main</Text>
        {console.log('Main')}
        <AppIcon name={icons.book} />
        <AddContainer />
        <DummyOne />
        <DummyTwo />
      </View> */}
      <View style={styles.animationContainer}>
        <Animation
          ref={animation => {
            animationRef.current = animation;
          }}
          style={{
            width: 200,
            height: 200,
          }}
          loop={true}
          source={football}
        />
      </View>
    </>
  );
};

export default Main;
