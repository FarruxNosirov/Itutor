import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import GapHeight from '../../../../constants/GapHeight';
import DefaulTitle from '../../../../components/uiket/DefaultTitle';
import NavbarAll from '../../../../components/uiket/NavbarAll';
import {COLORS} from '../../../../constants/colors';
import PersonalCart from '../../../../components/uiket/PersonalCart';
import ChatRecipient from '../../../../components/uiket/ChatRecipient';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../../constants/routes';
const data = [
  {id: 0, imgUrl: '../../../../assets/images/Vector.png', name: 'Языки'},
  {id: 1, imgUrl: '../../../../assets/images/Vector.png', name: 'Языки'},
  {id: 2, imgUrl: '../../../../assets/images/Vector.png', name: 'Языки'},
  {id: 3, imgUrl: '../../../../assets/images/Vector.png', name: 'Языки'},
  {id: 4, imgUrl: '../../../../assets/images/Vector.png', name: 'Языки'},
];
type propsType = {};
const StudentChatGroup = (props: propsType) => {
  const navigation = useNavigation();
  const OnPress = () => {
    navigation.navigate(ROUTES.StudentChooseChat as never);
  };
  return (
    <View style={{position: 'relative', backgroundColor: '#F8F8F8'}}>
      <NavbarAll />
      <View style={styles.container}>
        <DefaulTitle title="Мои чаты" color="#47406A" />
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}) => (
              <PersonalCart
                title={item.name}
                editingIcon={false}
                onClick={OnPress}
              />
            )}
            style={styles.container2}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(item: any) => item.id}
          />
        </View>
        <View style={{paddingLeft: 42, marginTop: 40}}>
          <ChatRecipient />
        </View>
        <GapHeight height={100} />
      </View>
    </View>
  );
};

export default StudentChatGroup;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F8F8F8',
    height: '90%',
    marginTop: 10,
  },
  container2: {
    marginTop: 20,
  },
  contentContainerStyle: {paddingHorizontal: 20},
});
