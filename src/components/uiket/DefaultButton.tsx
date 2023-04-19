import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../constants/colors';

type Props = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  loadingColor?: string;
  ButtonStyle?: {
    backgroundColor?: string;
    marginBotton?: number;
    marginTop?: number | string;
    width?: number | string;
    borderWidth?: number;
    borderColor?: string;
  };
  TextStyle?: {
    color?: string;
    fontSize?: number;
  };
};

export default function DefaultButton(props: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, props.ButtonStyle]}
      disabled={props.disabled}
      onPress={props.onPress}>
      {props.loading ? (
        <ActivityIndicator
          animating={props.loading}
          size="small"
          color={props.loadingColor || COLORS.white}
        />
      ) : (
        <Text style={[styles.buttonText, props.TextStyle]}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
}

DefaultButton.defaultProps = {
  ButtonStyle: {
    backgroundColor: '#F4B840',
    marginBottom: 25,
  },
  TextStyle: {
    color: COLORS.white,
    fontSize: 16,
  },
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 55,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
});
