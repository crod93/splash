import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  CameraRoll,
  AlertIOS
} from 'react-native';
import styles from './styles.js';
import Gallery from 'react-native-gallery';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalSeparator from './helper/Modal_Separator';


class ImageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {modalVisible: false,};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _saveToPhone(img){
    CameraRoll.saveToCameraRoll(img);
    AlertIOS.alert( 'Saved Complete!','This photo now belongs to you.');


  }


    _displayGallery(){

    return(

      <View style={{flex: 1}}>



      <Modal
      animationType={"slide"}
        transparent={true}
        visible={this.state.modalVisible} >
        <View style={{flex: 1}}>
          <Gallery
            style={{flex: 1, backgroundColor: '#000000'}}
            initialPage={1}
            pageMargin={10}
            images={[
        this.props.img
      ]}

          />
          <ModalSeparator/>

        <View style={styles.btnContainer}>

        <TouchableOpacity onPress={() => {
          this.setModalVisible(!this.state.modalVisible)
                }}>
          <Icon name="md-grid" size={30} color="#929294" />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={this._saveToPhone.bind(this,this.props.img)}>
        <Icon name="md-add" size={30} color="#929294" />
        </TouchableOpacity>
        </View>
    </View>
      </Modal>
    </View>
    )
  }

  render() {
      return (
        <View style={styles.imageContainer} >
        <TouchableOpacity onPress={this.setModalVisible.bind(this)}>
          <Image
            source={{uri: this.props.img}}
            style={styles.thumbnail}
          />
        </TouchableOpacity>

        {this.state.modalVisible ? this._displayGallery() : null}


        </View>
      );
  }


}

module.exports = ImageItem;
