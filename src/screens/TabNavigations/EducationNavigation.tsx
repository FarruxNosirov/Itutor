import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import {
  BalanseIconActive,
  BalanseIconNotActive,
  CatalogIconActive,
  CatalogIconNotActive,
  HomeIconActive,
  ProfileIconActive,
  ProfileIconNotActive,
  ReviewsScrenActiveIcon,
  ReviewsScrenIcon,
  TeachersScrenActiveIcon,
  TeachersScrenNotIcon,
} from '../../assets/icons/icons';
import {ROUTES} from '../../constants/routes';
import ReviewsScren from '../EducationHome/reviews/ReviewsScren';
import TeacherInfo from '../EducationHome/teacherEducation/TeacherInfo';
import CenterProfile from '../EducationHome/profile/CenterProfile';
import EducationChat from '../EducationHome/educationChat/EducationChat';
import EducationBalansScreen from '../EducationHome/balance/EducationBalansScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../../components/uiket/customDrawer/CustomDrawer';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
function Home({navigation}: any) {
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
        name={ROUTES.CenterProfile}
        component={CenterProfile}
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
        name={ROUTES.EducationChat}
        component={EducationChat}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <TeachersScrenActiveIcon /> : <TeachersScrenNotIcon />}
              <Text
                style={{
                  color: focused ? '#F4B840' : '#69628D',
                  fontSize: 13,
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                Учителя
              </Text>
            </View>
          ),
          // tabBarBadge: 1,
        }}
        name={ROUTES.TeacherInfo}
        component={TeacherInfo}
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
        name={ROUTES.EducationBalansScreen}
        component={EducationBalansScreen}
      />
    </Tab.Navigator>
  );
}
export default function EducationNavigation() {
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
