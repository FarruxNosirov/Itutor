import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import {
  BalanseIconActive,
  BalanseIconNotActive,
  CatalogIconActive,
  CatalogIconNotActive,
  CheckerboardScrenIcon,
  CheckerboardScrenNotIcon,
  HomeIconActive,
  ProfileIconActive,
  ProfileIconNotActive,
  ReviewsScrenActiveIcon,
  ReviewsScrenIcon,
} from '../../assets/icons/icons';
import {ROUTES} from '../../constants/routes';
import ChatTeacher from '../TeacherHome/chatTeacher/ChatTeacher';
import Checkerboard from '../TeacherHome/checkerboard/Checkerboard';
import TeacherProfileNovigation from '../TeacherHome/profile/TeacherProfileNovigation';
import ReviewsScren from '../TeacherHome/reviews/ReviewsScren';
import TeacherBalansScreen from '../TeacherHome/balance/TeacherBalansScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../../components/uiket/customDrawer/CustomDrawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#47406A',
          height: 100,
          paddingBottom: 10,
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <ProfileIconActive /> : <ProfileIconNotActive />}
              <Text
                style={{
                  color: focused ? '#F4B840' : '#69628D',
                  fontSize: 13,
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                Профиль
              </Text>
            </View>
          ),
          tabBarLabelStyle: {fontSize: 14},
        }}
        name={ROUTES.TeacherProfileNovigation}
        component={TeacherProfileNovigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <ReviewsScrenActiveIcon /> : <ReviewsScrenIcon />}
              <Text
                style={{
                  color: focused ? '#F4B840' : '#69628D',
                  fontSize: 13,
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                Отзывы
              </Text>
            </View>
          ),
          // tabBarBadge: 1,
        }}
        name={ROUTES.REVIEWS}
        component={ReviewsScren}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                bottom: 55,
                position: 'absolute',
                backgroundColor: '#F8F8F8',
                padding: 5,
              }}>
              <View
                style={{
                  backgroundColor: '#47406A',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 16,
                  borderRadius: 50,
                }}>
                {focused ? <CatalogIconActive /> : <CatalogIconNotActive />}
              </View>
            </View>
          ),
        }}
        name={ROUTES.CHATTEACHER}
        component={ChatTeacher}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? (
                <CheckerboardScrenIcon />
              ) : (
                <CheckerboardScrenNotIcon />
              )}
              <Text
                style={{
                  color: focused ? '#F4B840' : '#69628D',
                  fontSize: 13,
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                Шахматка
              </Text>
            </View>
          ),
          // tabBarBadge: 1,
        }}
        name={ROUTES.CHECKERBOARD}
        component={Checkerboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <BalanseIconActive /> : <BalanseIconNotActive />}
              <Text
                style={{
                  color: focused ? '#F4B840' : '#69628D',
                  fontSize: 13,
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                Баланс
              </Text>
            </View>
          ),
        }}
        name={ROUTES.BALANSE}
        component={TeacherBalansScreen}
      />
    </Tab.Navigator>
  );
}
export default function TeacherNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#fff',
          width: 302,
        },
        headerStyle: {
          height: 0,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({color}) => {
            return <HomeIconActive color={color} />;
          },
        }}
      />
      {/* <Drawer.Screen name={ROUTES.PROFILE} component={ProfileScren} /> */}
    </Drawer.Navigator>
  );
}
