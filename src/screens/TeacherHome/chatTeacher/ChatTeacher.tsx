import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../../constants/routes';
import TeacherChatGroup from './teacherChatGroup/TeacherChatGroup';
import TeacherChooseChat from './teacherChooseChat/teacherChooseChat';

let Stack = createNativeStackNavigator();

export default function ChatTeacher() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.TeacherChatGroup}
        component={TeacherChatGroup}
      />
      <Stack.Screen
        name={ROUTES.TeacherChooseChat}
        component={TeacherChooseChat}
      />
    </Stack.Navigator>
  );
}
