import React from 'react';
import {StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import NavigationService from '../NavigationService';
import {COLORS} from '../constants/colors';
import {ROUTES} from '../constants/routes';
import AuthStack from '../screens/Auth/AuthStack';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Notification from '../components/uiket/notification/Notification';
import PaidService from '../components/uiket/paidService/PaidService';
import ReviewAllComponent from '../components/uiket/reviewAll/ReviewAllComponent';
import Transaction from '../components/uiket/transaction/Transaction';
import EducationChooseChat from '../screens/EducationHome/educationChat/educationChooseChat/EducationChooseChat';
import TeacherInfoScreen from '../screens/EducationHome/teacherEducation/teacherInfoScreen/TeacherInfoScreen';

import NewsCartInfo from '../screens/StudentHome/home/ServiceNews/NewsCartInfo/NewsCartInfo';
import ServiceNewAll from '../screens/StudentHome/home/ServiceNews/ServiceNewAlll/ServiceNewAll';
import CategoriesCartInfo from '../screens/StudentHome/home/categories/categorieCartInfo/CategoriesCartInfo';
import CategoriesAllScreen from '../screens/StudentHome/home/categories/categoriesAll/CategoriesAllScreen';
import CategoriesSetting from '../screens/StudentHome/home/categories/categoriesSetting/CategoriesSetting';
import StudentInfoScreen from '../screens/StudentHome/home/categories/studentInfoScreen/StudentInfoScreen';
import StudentReviews from '../screens/StudentHome/home/categories/studentReviews/StudentReviews';
import OurExpertAll from '../screens/StudentHome/home/ourExperts/OurExpertAll/OurExpertAll';
import TeacherChooseChat from '../screens/TeacherHome/chatTeacher/teacherChooseChat/teacherChooseChat';
import StudentNavigation from '../screens/TabNavigations/StudentNavigation';
import EducationNavigation from '../screens/TabNavigations/EducationNavigation';
import TeacherNavigation from '../screens/TabNavigations/TeacherNavigation';
const Drawer = createDrawerNavigator();
let Stack = createNativeStackNavigator();

export default function AppRouter() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        marginTop: insets.top,
        backgroundColor: COLORS.tabBgColor,
      }}>
      <NavigationContainer ref={NavigationService.ref}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={ROUTES.AUTH} component={AuthStack} />
          <Stack.Screen
            name={ROUTES.STUDENTNAVIGATION}
            component={StudentNavigation}
          />

          <Stack.Screen
            name={ROUTES.EDUCATIONALCENTERVIGATION}
            component={EducationNavigation}
          />
          <Stack.Screen
            name={ROUTES.TEACHERNAVIGATION}
            component={TeacherNavigation}
          />
          {/* <Stack.Screen
            name={ROUTES.TeacherChooseChat}
            component={TeacherChooseChat}
          /> */}
          <Stack.Screen name={ROUTES.Notification} component={Notification} />
          <Stack.Screen name={ROUTES.PaidService} component={PaidService} />
          <Stack.Screen name={ROUTES.Transaction} component={Transaction} />
          <Stack.Screen
            name={ROUTES.ReviewAllComponent}
            component={ReviewAllComponent}
          />
          {/* <Stack.Screen
            name={ROUTES.EducationChooseChat}
            component={EducationChooseChat}
          /> */}
          <Stack.Screen
            name={ROUTES.TeacherInfoScreen}
            component={TeacherInfoScreen}
          />
          <Stack.Screen
            name={ROUTES.CategoriesAllScreen}
            component={CategoriesAllScreen}
          />
          <Stack.Screen
            name={ROUTES.CategoriesCartInfo}
            component={CategoriesCartInfo}
          />
          <Stack.Screen
            name={ROUTES.CategoriesSetting}
            component={CategoriesSetting}
          />
          <Stack.Screen name={ROUTES.ServiceNewAll} component={ServiceNewAll} />
          <Stack.Screen name={ROUTES.NewsCartInfo} component={NewsCartInfo} />
          <Stack.Screen
            name={ROUTES.StudentInfoScreen}
            component={StudentInfoScreen}
          />
          <Stack.Screen
            name={ROUTES.StudentReviews}
            component={StudentReviews}
          />
          <Stack.Screen name={ROUTES.OurExpertAll} component={OurExpertAll} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({});
