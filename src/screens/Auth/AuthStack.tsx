/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../constants/routes';
import Login from './Login/Login';
import LanguageScreen from './languageScreen/LanguageScreen';
import Verification from './verification/Verification';
import EducationalCenter from './SelectType/EducationalCenter/EducationalCenter';
import SelectType from './SelectType/SelectType';
import Student from './SelectType/Student/Student';
import Teacher from './SelectType/Teacher/Teacher';
import Screens from './onboardingScren';
import RecoveryCode from './RecoveryScreen/RecoveryCode';

let Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.LANGUAGE} component={LanguageScreen} />
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.VERIFICATION} component={Verification} />
      <Stack.Screen name={ROUTES.Screens} component={Screens} />
      <Stack.Screen name={ROUTES.SELECTTYPE} component={SelectType} />
      <Stack.Screen
        name={ROUTES.EDUCATIONCENTER}
        component={EducationalCenter}
      />
      <Stack.Screen name={ROUTES.STUDENT} component={Student} />
      <Stack.Screen name={ROUTES.TEACHER} component={Teacher} />
      <Stack.Screen name={ROUTES.RECOVERYCODE} component={RecoveryCode} />
    </Stack.Navigator>
  );
}
