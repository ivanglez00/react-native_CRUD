import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class IdCambios extends Component {
    constructor(props) {
        super(props);
        this.state = {

            idGlobal: "",
            nombreGlobal: "",
            codigoGlobal: "",
            tareaGlobal: "",
            imagenGlobal: "",


            nombreGuardar: "",


        };
    }


    componentDidMount() {
        let _this = this;

        //recibe los datos de la pagina de cambios y los manda al global para utilizarlos en los inputs
        _this.setState({ idGlobal: this.props.route.params.id });
        _this.setState({ nombreGlobal: this.props.route.params.nombre });
        _this.setState({ codigoGlobal: this.props.route.params.codigo });
        _this.setState({ tareaGlobal: this.props.route.params.tarea });
        _this.setState({ imagenGlobal: this.props.route.params.imagen });

        // console.log(this.props.route.params.nombre);
    }



    render() {


        const btnCambiar = () => {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    console.log(xhttp.responseText);
                    let recibe = xhttp.responseText;

                    if (recibe == 1) {
                        alert("Ingresado correctamente");
                    }
                }
            };
            // xhttp.open("GET", "https://reactcalculadora.000webhostapp.com/Cambios.php?nombre=" + this.state.nombreGlobal + "&codigo=" + this.state.codigoGlobal + "&tarea=" + this.state.tareaGlobal + "&imagen=" + this.state.imagenGlobal + "&id=" + this.state.idGlobal, true);
            xhttp.open("GET", "https://reactcalculadora.000webhostapp.com/Cambios2.php?nombre=" + "&tarea=" + this.state.tareaGlobal + "&imagen=" + this.state.imagenGlobal + "&id=" + this.state.idGlobal, true);
            xhttp.send();

        }

        const btnGenerar = () => {
            let _this = this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:


                    let recibe = xhttp.responseText;
                    let datos = recibe.split('"');
                    console.log(datos[3]);

                    _this.setState({ imagenGlobal: datos[3] });

                }
            };
            xhttp.open("GET", "https://100k-faces.glitch.me/random-image-url", true);
            xhttp.send();
        }





        return (
            <View style={styles.view}>

                <Text style={styles.texto}> id del usuario:  {this.state.idGlobal}</Text>
                <Text style={styles.texto}> Nombre: {this.props.route.params.nombre} </Text>
                <Text style={styles.texto}> Codigo: {this.props.route.params.codigo} </Text>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: this.props.route.params.imagen }}
                />
                {/* <Text> id: {this.props.route.params.id} </Text>
        <Text> Nombre: {this.props.route.params.nombre} </Text>
        <Text> Codigo: {this.props.route.params.codigo} </Text>
        <Text> tarea: {this.props.route.params.tarea} </Text>
        <Text> imagen: {this.props.route.params.imagen} </Text>
       */}

                {/* <TextInput value={this.state.nombreGlobal} style={styles.input} placeholder={"Nombre:"} placeholderTextColor="#ffff" onChangeText={nombreGlobal => this.setState({ nombreGlobal })} /> */}
                {/* <TextInput value={this.state.codigoGlobal} style={styles.input} placeholder={"Codigo:"} placeholderTextColor="#ffff" onChangeText={codigoGlobal => this.setState({ codigoGlobal })} /> */}


                <Text style={styles.texto}>Tarea:</Text>
                <TextInput value={this.state.tareaGlobal} style={styles.input} placeholder={"Tarea:"} placeholderTextColor="#ffff" onChangeText={tareaGlobal => this.setState({ tareaGlobal })} />

                <Text style={styles.texto}>Imagen:</Text>
                
                <TextInput value={this.state.imagenGlobal} style={styles.input} placeholder={"Imagen:"} placeholderTextColor="#ffff" onChangeText={nombreGlobal => this.setState({ imagenGlobal })} />

                <Button title='Generar nueva  imagen' onPress={btnGenerar} />

                <Button title='Guardar Cambios ' onPress={btnCambiar} color="orange" />





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
    texto: {
        fontSize: 20,

    },


})