import { View, Text, Button } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BalanseIconActive,
  BalanseIconNotActive,
  CatalogIconActive,
  CatalogIconNotActive,
  FavoriteIconActive,
  FavoriteIconNotActive,
  HomeIconActive,
  HomeIconNotActive,
  ProfileIconActive,
  ProfileIconNotActive,
  UserTwoIcon,
} from "../../assets/icons/icons";
import { ROUTES } from "../../constants/routes";
import HomeScreen from "../StudentHome/home/HomeScreen";
import ProfileScren from "../StudentHome/profile/ProfileScren";
import ChatScreen from "../StudentHome/chat/ChatScreen";
import FavoritesScreen from "../StudentHome/favorites/FavoritesScreen";
import BalanesNavigation from "../StudentHome/balance";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../../components/uiket/customDrawer/CustomDrawer";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function Home({ navigation }: any) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#47406A",
          height: 100,
          paddingBottom: 10,
          justifyContent: "space-between",
          paddingHorizontal: 15,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              {focused ? <HomeIconActive /> : <HomeIconNotActive />}
              <Text
                style={{
                  color: focused ? "#F4B840" : "#69628D",
                  fontSize: 13,
                  fontWeight: "400",
                  marginTop: 5,
                }}
              >
                Главная
              </Text>
            </View>
          ),
          tabBarLabelStyle: { fontSize: 14 },
        }}
        name={ROUTES.HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              {focused ? <ProfileIconActive /> : <ProfileIconNotActive />}
              <Text
                style={{
                  color: focused ? "#F4B840" : "#69628D",
                  fontSize: 13,
                  fontWeight: "400",
                  marginTop: 5,
                }}
              >
                Профиль
              </Text>
            </View>
          ),
          // tabBarBadge: 1,
        }}
        name={ROUTES.PROFILE}
        component={ProfileScren}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                bottom: 55,
                position: "absolute",
                backgroundColor: "#F8F8F8",
                padding: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: "#47406A",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 16,
                  borderRadius: 50,
                }}
              >
                {focused ? <CatalogIconActive /> : <CatalogIconNotActive />}
              </View>
            </View>
          ),
        }}
        name={ROUTES.CATALOG}
        component={ChatScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              {focused ? <FavoriteIconActive /> : <FavoriteIconNotActive />}
              <Text
                style={{
                  color: focused ? "#F4B840" : "#69628D",
                  fontSize: 13,
                  fontWeight: "400",
                  marginTop: 5,
                }}
              >
                Избранное
              </Text>
            </View>
          ),
          // tabBarBadge: 1,
        }}
        name={ROUTES.FAVORITES}
        component={FavoritesScreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              {focused ? <BalanseIconActive /> : <BalanseIconNotActive />}
              <Text
                style={{
                  color: focused ? "#F4B840" : "#69628D",
                  fontSize: 13,
                  fontWeight: "400",
                  marginTop: 5,
                }}
              >
                Баланс
              </Text>
            </View>
          ),
        }}
        name={ROUTES.BALANESNAVIGATION}
        component={BalanesNavigation}
      />
    </Tab.Navigator>
  );
}
export default function StudentNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#fff",
          width: 302,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => {
            return <HomeIconActive color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name={ROUTES.PROFILE}
        component={ProfileScren}
        options={{
          drawerIcon: ({ color }) => {
            return <ProfileIconNotActive color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}
