import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import GoBackHeader from '../../../../components/uiket/GoBackHeader';
import ChatItemMe from '../components/ChatItemMe';
import {RightArrowIcon, SaveIconMessage} from '../../../../assets/icons/icons';
import {STRINGS} from '../../../../locales/strings';
import {COLORS} from '../../../../constants/colors';
import NavbarAll from '../../../../components/uiket/NavbarAll';
import DefaulTitle from '../../../../components/uiket/DefaultTitle';
const data = [
  {id: 0, imgUrl: '../../../../assets/images/Vector.png', name: 'Языки'},
  {id: 1, imgUrl: '../../../../assets/images/Vector.png', name: 'Языки'},
  {id: 2, imgUrl: '../../../../assets/images/Vector.png', name: 'Языки'},
  {id: 3, imgUrl: '../../../../assets/images/Vector.png', name: 'Языки'},
  {id: 4, imgUrl: '../../../../assets/images/Vector.png', name: 'Языки'},
];

const StudentChooseChat = () => {
  return (
    <View style={styles.container}>
      <NavbarAll />
      <GoBackHeader title="Чат c Рафаэль Ройтман" color="#47406A" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <ChatItemMe />}
        style={styles.container2}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item: any) => item.id}
      />

      <View style={styles.send_cart}>
        <View style={styles.send_cart_item}>
          <SaveIconMessage fill={'#C8C8C8'} />
          <TextInput
            placeholder={STRINGS.ru.yourMessage}
            style={styles.input}
            placeholderTextColor={'#C8C8C8'}
          />
          <TouchableOpacity>
            <RightArrowIcon style={styles.tgicon} fill={'#C8C8C8'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StudentChooseChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 80,
  },
  data_title: {
    textAlign: 'center',
  },
  chat: {
    marginHorizontal: 15,
    position: 'relative',
  },
  send_cart: {
    position: 'absolute',
    height: 64,
    backgroundColor: COLORS.white,
    width: '100%',
    bottom: 40,
    paddingHorizontal: 20,
  },
  send_cart_item: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    borderColor: COLORS.white,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    paddingHorizontal: 19,
  },

  input: {
    width: '80%',
    marginLeft: 5,
    color: COLORS.defaultBlack,
  },

  tgicon: {
    marginLeft: 10,
    alignSelf: 'center',
  },

  myMsg: {
    color: COLORS.white,
    backgroundColor: COLORS.lighBlue,
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
  },

  myBox: {
    marginTop: 20,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  container2: {
    marginTop: 20,
    marginBottom: 30,
  },
  contentContainerStyle: {paddingHorizontal: 20},
});
