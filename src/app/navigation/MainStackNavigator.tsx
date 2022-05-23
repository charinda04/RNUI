import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/routers';

import MainTabNavigator from './MainTabNavigator';
import { MAIN, MAIN_TAB_NAVIGATOR } from './route.actions';
import Main from '@src/modules/main/Main';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase, 'MAIN_STACK_NAVIGATOR'>;
}

const MainStackNavigator: React.FC<Props> = (): JSX.Element => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator initialRouteName={MAIN} screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={MAIN_TAB_NAVIGATOR} component={MainTabNavigator} />
      <MainStack.Screen name={MAIN} component={Main} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
