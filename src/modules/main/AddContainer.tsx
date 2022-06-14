import React from 'react';
import {Button} from 'react-native';

import {useReduxDispatch, useReduxSelector} from '@src/app/store/store';
import {SharedActions} from '@src/app/store/sharedSlice';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
// });

const AddContainer: React.FC = () => {
  const count = useReduxSelector(state => state.shared.count);
  const dispatch = useReduxDispatch();

  return (
    <>
      {console.log('AddContainer')}
      <Button
        title="ADD"
        onPress={() => {
          dispatch(SharedActions.setCount(count + 1));
        }}
      />
    </>
  );
};

export default AddContainer;
