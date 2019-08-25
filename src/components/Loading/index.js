import React from 'react';
import { View, Modal } from 'react-native';
import PropTypes from 'prop-types';

import {
  //BallIndicator,
  //BarIndicator,
  //DotIndicator,
  //MaterialIndicator,
  //PacmanIndicator,
  //PulseIndicator,
  //SkypeIndicator,
  //UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

import styles from './styles';
import { colors } from '~/styles';

const Loading = ({ loading }) => {
  return (
    <Modal
      transparent={true}
      onDismiss={() => {}}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicator}>
          <WaveIndicator size={48} color={colors.purple} />
        </View>
      </View>
    </Modal>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loading;
