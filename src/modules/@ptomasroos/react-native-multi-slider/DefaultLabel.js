import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const sliderRadius = 3;
const width = 35;
export default class DefaultLabel extends React.Component {
  static propTypes = {

    oneMarkerValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    twoMarkerValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    oneMarkerLeftPosition: PropTypes.number,
    twoMarkerLeftPosition: PropTypes.number,

    oneMarkerPressed: PropTypes.bool,
    twoMarkerPressed: PropTypes.bool,
  };


  render() {
    const {
      oneMarkerValue,
      twoMarkerValue,
      oneMarkerLeftPosition,
      twoMarkerLeftPosition,
      oneMarkerPressed,
      twoMarkerPressed,
    } = this.props;

    return (
      <View style={{ position: 'relative' }}>
        {Number.isFinite(oneMarkerLeftPosition) &&
          Number.isFinite(oneMarkerValue) && (
            <View
              style={[
                styles.sliderLabel,
                { left: oneMarkerLeftPosition - width / 2 + sliderRadius },
                oneMarkerPressed && styles.markerPressed,
              ]}
            >
              <Text style={styles.sliderLabelText}>{oneMarkerValue}</Text>
            </View>
          )}

        {Number.isFinite(twoMarkerLeftPosition) &&
          Number.isFinite(twoMarkerValue) && (
            <View
              style={[
                styles.sliderLabel,
                { left: twoMarkerLeftPosition - width / 2 + sliderRadius },
                twoMarkerPressed && styles.markerPressed,
              ]}
            >
              <Text style={styles.sliderLabelText}>{twoMarkerValue}</Text>
            </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderLabel: {
    position: 'absolute',
    bottom:-5,
    minWidth: width,
    padding:1,
    backgroundColor: '#523FD7',
    borderRadius:20,
  },
  sliderLabelText: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 17,
    color:'white'
  },
  markerPressed: {
    borderWidth: 0,
  },
});
