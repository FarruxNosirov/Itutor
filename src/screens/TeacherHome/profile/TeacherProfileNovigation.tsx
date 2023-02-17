import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../../../constants/routes";
import TeacherProfileScren from "./teacherProfileScreen/TeacherProfileScren";
import TeacherEditingProfile from "./teacherEditingProfile/TeacherEditingProfile";

let Stack = createNativeStackNavigator();

const TeacherProfileNovigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.TeacherProfileScren}
        component={TeacherProfileScren}
      />
      <Stack.Screen
        name={ROUTES.TeacherEditingProfile}
        component={TeacherEditingProfile}
      />
    </Stack.Navigator>
  );
};

export default TeacherProfileNovigation;
