import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import styles from './styles';

const Container = ({ row, style, children }) => (
  <View style={[styles.container, row ? styles.row : styles.column, style]}>
    {children}
  </View>
);

Container.propTypes = {
  row: PropTypes.bool,
  style: PropTypes.object,
};

export default Container;
