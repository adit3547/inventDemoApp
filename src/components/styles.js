import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $underlayColor: '$darkText',
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  separator: {
    backgroundColor: 'black',
    flex: 1,
    height: StyleSheet.hairlineWidth,
    marginLeft: 10,
    marginRight: 10,
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: 'grey',
    flexWrap: 'wrap',
    fontSize: 20,
  },
});
