import React, { Component } from 'react';
import { View, Text , StyleSheet, Image} from 'react-native';

export default class Id extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.view}>

        {/* recibir los datos de la pantallab y imprimirlos  */}
        <Text> Nombre: {this.props.route.params.nombre} </Text>
        <Text> Codigo: {this.props.route.params.codigo} </Text>
      

         <Image 
            style={{width:100,height:100}}
            source={{uri:this.props.route.params.imagen}}
        /> 
            
      </View>
    );
  }
}



const styles = StyleSheet.create({
   
    view:{
      backgroundColor:'rgb(56,61,59)',  
      flex: 1,
    flexDirection: 'column',
    },
    
    })