import React, { Component } from 'react';
import { View, Text , StyleSheet, Button} from 'react-native';

export default class Acciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  


  render() {

    


    return (
      <View style={styles.view}>
        <Text> Bienbenido: {this.props.route.params.nombre} </Text>

        {/* menu de opciones donde solo va a cambiar de pantalla segun se elija */}

        <Button title='altas'  onPress={()=> this.props.navigation.navigate("altas")}/>
        <Button title='bajas'  onPress={()=> this.props.navigation.navigate("bajas")}/>
        <Button title='cambios'   onPress={()=> this.props.navigation.navigate("cambios")}/>
        {/* recibir los datos del login y enviarlos a la pantalla de listas(pantalla b) */}
        <Button title='listas' onPress={()=> this.props.navigation.navigate("pantalla2",{nombre:this.props.route.params.nombre})}/>



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