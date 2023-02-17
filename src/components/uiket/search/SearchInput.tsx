import React from "react";
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
import { COLORS } from "../../../constants/colors";
import { SearchIcon, SearchSettingsIcon } from "../../../assets/icons/icons";

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
  Icon1?: any;
  Icon2?: any;
}

const SearchInput = ({
  placeholder,
  label,
  inputStyle,
  textContentType,
  onChange,
  value,
  keyboardType,
  defaultValue,
  onFocus,
  backgroundColor,
  color,
  placeholderColor,
  Icon1,
  Icon2,
}: DefaultInputProps) => {
  return (
    <View style={[styles.container]}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <View
        style={[
          styles.eyeBox,
          { backgroundColor: backgroundColor ? backgroundColor : "#F2F2F2" },
        ]}
      >
        <TextInput
          textContentType={textContentType}
          style={[
            styles.input,
            {
              backgroundColor: inputStyle ? inputStyle : "#F2F2F2",
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

        <View
          style={{ flexDirection: "row", alignItems: "center", height: "100%" }}
        >
          {Icon1 ? (
            <TouchableOpacity style={styles.settings}>{Icon1}</TouchableOpacity>
          ) : null}
          {Icon2 ? (
            <TouchableOpacity style={styles.search_icon}>
              {Icon2}
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  title: {
    color: COLORS.defaultBlack,
    fontSize: 16,
    lineHeight: 27,
  },
  input: {
    height: 55,
    borderRadius: 5,
    paddingLeft: 24,
    fontSize: 16,
    width: "60%",
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
    backgroundColor: "#F2F2F2",
    height: 61,
    justifyContent: "space-between",
  },
  inputLabel: {
    fontSize: 16,
    color: COLORS.labelText,
    marginBottom: 15,
  },
  settings: {
    marginRight: 19,
  },
  search_icon: {
    backgroundColor: "#F4B840",
    borderRadius: 5,
    width: 67,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
