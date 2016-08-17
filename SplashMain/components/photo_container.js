import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  RefreshControl,
  Image
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons';
import Separator from './helper/Separator.js';
import GridView from 'react-native-grid-view';
import api from './api.js';
import ImageItem from './imageItem.js';
import Spinner from 'react-native-spinkit';



class PhotoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images:[],
      isLoading:true,
    }
    this.onEndReached = this.onEndReached.bind(this);
  }
  componentWillMount() {
    api().then((res) => {

      this._addImage(res);
}).done();

  this._loadImages();
}
_addImage(image) {
    let images = Object.assign([], this.state.images);
    images.push(image);
    this.setState({images});
    if(this.state.images.length >= 13){
      this.setState({isLoading:false});
    }
}

_getImageUrls(){
  api().then((res) => {
    this._addImage(res);

}).done();

}

_loadImages(){
  for(let i=0; i<50; i++){
    this._getImageUrls();
  }



}
  _renderItem(item) {
     return <ImageItem img={item} />
 }

 onEndReached() {
      this._loadImages();
    }

    _onRefresh() {
   this.setState({isLoading: true});
   this.setState({images:[]});
   this._loadImages();
 }


 render() {
   return (
      <View style={{flex:1}}>


        <View style={styles.header}>
        <Text style={styles.title}>Splash</Text>
        <Text style={styles.instructions}>An unoffical App of Unsplash</Text>
        <Icon name="md-camera" size={35} color="#111111" />
        </View>
        <View style={{flex:1}}>
        <Separator/>


        {this.state.isLoading ? <Spinner style={styles.spinnerStyle}isVisible={this.state.isLoading} size={60} type={'ArcAlt'} color={'#111111'}/> : <GridView items={this.state.images} itemsPerRow={3} renderItem={this._renderItem} style={styles.listView} onEndReached={this.onEndReached.bind(this)} refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }/> }





        </View>
      </View>
    );
  }
}


module.exports = PhotoContainer;
