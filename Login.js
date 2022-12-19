import { Text, View, StyleSheet, Image, TextInput, Button, ImageBackground, ChildComponent } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { withNavigation } from 'react-navigation';


export default class Login extends Component {


  constructor(props) {
    super(props)

    this.state = {
      //declaracion de bariables, aqui se guardan los textos de los input

      codigo: "",
      nip: "",

    };

  }


  render() {
    //funcion para ir al mapa 
    const irMapa = () => {
      console.log("mapa");
      this.props.navigation.navigate("Mapa");
    }

    //hace la peticion al servidor para poder hacer login enviandole las credenciales por la url tomandolos de los inputs
    const btnClick = () => {
      let _this = this;
      //console.log("diste click");

      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "http://148.202.152.33/ws_claseaut.php?codigo="
        + this.state.codigo + "&nip=" + this.state.nip, true);
      xhttp.send();


      xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
          
          if (xhttp.responseText != 0) {
            //corta la cadena y me envia el nombre a la siguiente pantalla
            let recibe = xhttp.responseText;
            let datos = recibe.split(",");
            console.log(datos[2]);
            // _this.props.navigation.navigate("pantalla2",{nombre:datos[2]});
            //cambia de pantalla y envia el nombre tomado del servidor
            _this.props.navigation.navigate("acciones", { nombre: datos[2] });

          } else {
            alert("datos incorrectos");
          }
          //console.log(xhttp.responseText);
        }

      };



    }//fin btnclick



    return (

      <View style={styles.container}>

        <ImageBackground style={styles.background} source={require("./Imagenes/fondo01.webp")}  >
          <Text style={styles.textoudg}> LOGIN </Text>
          <Image style={styles.logoudg} source={require("./Imagenes/logoCucei.webp")} />
          {/* manda la informacion de los inputs al global para que los utilice la funcion btnclick  */}
          <TextInput style={styles.input} placeholder={"codigo:"} placeholderTextColor="#ffff" onChangeText={codigo => this.setState({ codigo })} />
          <TextInput style={styles.input} placeholder={"nip:"} placeholderTextColor="#ffff" onChangeText={nip => this.setState({ nip })} secureTextEntry={true} />
          <View style={styles.btnEntrar}>
            <Button title='entrar' onPress={btnClick} />
            <Button title='mapa' onPress={irMapa} />


          </View>
        </ImageBackground>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',

  },

  btnEntrar: {
    width: 100,
    height: 80,
    marginLeft: 150,
    marginTop: 30,
  },

  input: {

    borderWidth: 2,
    fontSize: 25,
    borderColor: '#ffff',
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },


  logoudg: {
    width: 100,
    height: 200,
    resizeMode: "contain",
    marginLeft: 150,
  },

  textoudg: {
    fontSize: 40,
    color: "red",
    textAlign: "center"

  },

  container: {
    flex: 1,
    flexDirection: 'column',
  },


})

/*
ajustar el codigo del boton para que cuando pongan las crendenciales  correctas vaya
a la pantallab  y si no son las correctas sale una ventana de alert diciendo que no
es un usuario reconocido.
quitar tambien el tabbbar de regresarse al login 

*/