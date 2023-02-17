import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { COLORS } from "../../constants/colors";
import { EyeIcon, OpenedEyeIcon } from "../../assets/icons/icons";

export interface DefaultInputProps {
  title?: string;
  placeholder?: string;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: ViewStyle;
  inputStyle?: string;
  textContentType?:
    | "none"
    | "URL"
    | "addressCity"
    | "addressCityAndState"
    | "addressState"
    | "countryName"
    | "creditCardNumber"
    | "emailAddress"
    | "familyName"
    | "fullStreetAddress"
    | "givenName"
    | "jobTitle"
    | "location"
    | "middleName"
    | "name"
    | "namePrefix"
    | "nameSuffix"
    | "nickname"
    | "organizationName"
    | "postalCode"
    | "streetAddressLine1"
    | "streetAddressLine2"
    | "sublocality"
    | "telephoneNumber"
    | "username"
    | "password"
    | "newPassword"
    | "oneTimeCode"
    | undefined;
  secureText?: boolean | undefined;
  onChange?: (val: string) => void;
  onFocus?: () => void;
  value?: string;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
  label?: string;
  defaultValue?: any;
  backgroundColor?: string;
  color?: string;
  placeholderColor?: string;
}

const DefaultInputEye = ({
  placeholder,
  label,
  titleStyle,
  containerStyle,
  inputStyle,
  textContentType,
  secureText,
  onChange,
  value,
  keyboardType,
  defaultValue,
  onFocus,
  backgroundColor,
  color,
  placeholderColor,
}: DefaultInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={[styles.container]}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <View
        style={[
          styles.eyeBox,
          { backgroundColor: backgroundColor ? backgroundColor : " " },
        ]}
      >
        <TextInput
          textContentType={textContentType}
          secureTextEntry={isOpen == true ? secureText : !secureText}
          style={[
            styles.input,
            {
              backgroundColor: inputStyle ? inputStyle : "#E3E3E3",
              color: color ? color : "#000",
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor ? placeholderColor : "#000"}
          onChangeText={onChange}
          value={value}
          keyboardType={keyboardType}
          defaultValue={defaultValue}
          onFocus={onFocus}
        />
        <TouchableOpacity
          onPress={() => setIsOpen(!isOpen)}
          hitSlop={{ left: 20, right: 20, bottom: 20, top: 20 }}
        >
          {isOpen == true ? (
            <EyeIcon fill={COLORS.white} />
          ) : (
            <OpenedEyeIcon fill={COLORS.white} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DefaultInputEye;

const styles = StyleSheet.create({
  title: {
    color: COLORS.defaultBlack,
    fontSize: 16,
    lineHeight: 27,
  },
  input: {
    width: "90%",
    color: COLORS.defaultBlack,
    height: 55,
    borderRadius: 45,
    paddingLeft: 24,
    fontSize: 16,
  },
  container: {
    alignSelf: "center",
    marginBottom: 20,
    width: "100%",
  },

  eyeBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    width: "100%",
  },
  inputLabel: {
    fontSize: 16,
    color: COLORS.labelText,
    marginBottom: 15,
  },
});
