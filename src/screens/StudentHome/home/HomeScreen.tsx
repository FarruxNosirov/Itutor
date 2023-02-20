import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SearchIcon, SearchSettingsIcon} from '../../../assets/icons/icons';
import DefaulTitle from '../../../components/uiket/DefaultTitle';
import NavbarAll from '../../../components/uiket/NavbarAll';
import ModalLeft from '../../../components/uiket/modalLeft/ModalLeft';
import SearchInput from '../../../components/uiket/search/SearchInput';
import GapHeight from '../../../constants/GapHeight';
import useVisible from '../../../hooks/useVisible';
import ServiceNew from './ServiceNews/ServiceNew';
import Categories from './categories/Categories';
import Advertising from './components/Advertising';
import OurExperts from './ourExperts/OurExpert';
import UserReview from './userReviews/UserReview';

import {observer} from 'mobx-react';
const HomeScreen = observer(() => {
  const leftModalOpen = useVisible();
  return (
    <View style={{position: 'relative', backgroundColor: '#F8F8F8'}}>
      <NavbarAll clickMe={leftModalOpen.show} />
      <ScrollView style={styles.container}>
        <DefaulTitle
          title="Поиск преподавателей и учебных центров"
          color="#47406A"
        />
        <View style={styles.search_box}>
          <SearchInput Icon1={<SearchSettingsIcon />} Icon2={<SearchIcon />} />
        </View>
        <Categories title={'Категории'} />
        <OurExperts title="Наши эксперты" />
        <UserReview title="Отзывы пользователей" />
        <ServiceNew title="Новости сервиса" />
        <Advertising />

        <GapHeight height={100} />
      </ScrollView>
      <ModalLeft
        openModal={leftModalOpen.visible}
        closeModal={leftModalOpen.hide}
      />
    </View>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F8F8F8',
    height: '90%',
    paddingTop: 18,
  },
  search_box: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
});
