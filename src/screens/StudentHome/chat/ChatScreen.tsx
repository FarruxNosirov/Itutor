import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../../constants/routes';

import StudentChatGroup from './studentChatGroup/StudentChatGroup';
import StudentChooseChat from './studentChooseChat/StudentChooseChat';

let Stack = createNativeStackNavigator();

export default function ChatScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.StudentChatGroup}
        component={StudentChatGroup}
      />
      <Stack.Screen
        name={ROUTES.StudentChooseChat}
        component={StudentChooseChat}
      />
    </Stack.Navigator>
  );
}
