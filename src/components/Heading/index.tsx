import React from 'react';
import { Text, View, ViewProps } from 'react-native';

import { styles } from './styles';

interface Props extends ViewProps {
  title: string;
  subTitle: string;
}

export function Heading({title, subTitle, ...rest}: Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>
        
      <Text style={styles.subTitle}>
        {subTitle}
      </Text>
    </View>
  );
}