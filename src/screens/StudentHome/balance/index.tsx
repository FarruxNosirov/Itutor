import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../../../constants/routes";
import BalanseScreen from "./BalansScreen";

let Stack = createNativeStackNavigator();

export default function BalanesNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.BALANSE} component={BalanseScreen} />
    </Stack.Navigator>
  );
}
