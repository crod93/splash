import React, {Component} from 'react';
import{
  View,
  StyleSheet,



} from 'react-native'

class ModalSeparator extends Component{

  render() {
    return(
      <View style={styles.separator}>
      </View>
    )
  }



}

var styles = StyleSheet.create({
  separator:{
    height:2,
    backgroundColor:'#21212F',
  }


});

module.exports=ModalSeparator;
