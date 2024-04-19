import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';

import {Text14} from '../Text/Text';
import styles from './styles';

const Capsule = (props: any) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        props.selectedItem == props.title && styles.container1,
      ]}
      onPress={props.onPress}>
      <Text14 textStyle={styles.title}>{props.title}</Text14>
    </TouchableOpacity>
  );
};

export default memo(Capsule);
