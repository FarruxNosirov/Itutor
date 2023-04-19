import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {
  FindYoursTeacher,
  RaiseYourKnowledge,
} from '../../../assets/icons/icons';
import Onboarding from '../../../components/uiket/Onboarding';
import Swiper from './Swiper';

export default class Screens extends Component {
  render() {
    return (
      <Swiper>
        {/* First screen */}
        <View style={[styles.slide]}>
          <Onboarding />
        </View>
        {/* Second screen */}
        <View style={[styles.slide]}>
          <Onboarding imagePerson={<RaiseYourKnowledge />} />
        </View>
        {/* Third screen */}
        <View style={[styles.slide]}>
          <Onboarding imagePerson={<FindYoursTeacher />} />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1, // Take up all screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  // Header styles
});
