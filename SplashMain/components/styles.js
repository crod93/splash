import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  header:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:50
  },
  instructions: {
    textAlign: 'center',
    color: '#777777',
    marginTop: 8,
    marginBottom: 8,
    fontFamily:'Courier'
  },
  title:{
    color:'#111111',
    fontSize:30,
    fontFamily:'Helvetica Neue'
  },

  thumbnail: {
    width: 128,
    height: 131,
  },
  listView: {
    paddingTop: 20,
    flex:1
  },
 imageContainer: {
  flex: 1,
  alignItems: 'center',
  flexDirection: 'column',
},
btnContainer:{
  backgroundColor:'#000000',
  height:55,
  justifyContent:'space-around',
  alignItems:'center',
  flexDirection:'row'
},
spinnerStyle:{
    alignSelf: 'center',
    marginTop:15
}
});

module.exports = styles;
