import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../../constants/routes';
import EducationChatGroup from './educationChatGroup/EducationChatGroup';
import EducationChooseChat from './educationChooseChat/EducationChooseChat';

let Stack = createNativeStackNavigator();

export default function EducationChat() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.EducationChatGroup}
        component={EducationChatGroup}
      />
      <Stack.Screen
        name={ROUTES.EducationChooseChat}
        component={EducationChooseChat}
      />
    </Stack.Navigator>
  );
}
