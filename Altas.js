import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default class Altas extends Component {
    constructor(props) {
        super(props);
        this.state = {

            nombre: "",
            codigo: "",
            tarea: "",
            imagen: "",

           
        };
    }




    render() {
        //funcion que toma los datos de los input y los guarda en la bas de datos enviandolas como parametros 
        const btnGuardar = () => {
            
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                   //document.getElementById("demo").innerHTML = xhttp.responseText;
                   console.log(xhttp.responseText);
                   let recibe = xhttp.responseText;

                   if(recibe == 1){
                    alert("Ingresado correctamente");
                   }
                }
            };
            xhttp.open("GET", "https://reactcalculadora.000webhostapp.com/Altas.php?nombre="+ this.state.nombre + "&codigo="+ this.state.codigo + "&tarea=" + this.state.tarea + "&imagen=" + this.state.imagen , true);
            xhttp.send();


        }

        //funcion para generar rostros dandom de una pagina 
        const btnGenerar = () => {
            let _this = this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                  

                   let recibe = xhttp.responseText;
                   let datos = recibe.split('"');
                   console.log(datos[3]);

                   _this.setState({ imagen: datos[3] });

                }
            };
            xhttp.open("GET", "https://100k-faces.glitch.me/random-image-url", true);
            xhttp.send();
        }


        return (

            <View style={styles.view}>
                <Text style={styles.encabezado}> Ingresa los datos para guardar el usuario </Text>


                <TextInput style={styles.input} placeholder={"Nombre:"} placeholderTextColor="#ffff" onChangeText={nombre => this.setState({ nombre })} />

                <TextInput style={styles.input} placeholder={"Codigo:"} placeholderTextColor="#ffff" onChangeText={codigo => this.setState({ codigo })} />

                <TextInput style={styles.input} placeholder={"Tarea:"} placeholderTextColor="#ffff" onChangeText={tarea => this.setState({ tarea })} />

                <TextInput value={this.state.imagen}   style={styles.input} placeholder={"Imagen:"} placeholderTextColor="#ffff" onChangeText={imagen => this.setState({ imagen })} />

               

                <Button title='Generar imagen' onPress={btnGenerar}    />

                <Button title='Guardar' onPress={btnGuardar}  color="orange"   />

            </View>


        );
    }
}


const styles = StyleSheet.create({

    view: {
        backgroundColor: 'rgb(56,61,59)',
        flex: 1,
        flexDirection: 'column',
    },
    input: {

        borderWidth: 2,
        fontSize: 25,
        borderColor: '#ffff',
        marginTop: 20,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    encabezado: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 30,
    },

   


})
