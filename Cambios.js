import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


export default class Cambios extends Component {
    constructor(props) {
        super(props);
        this.state = {


            datosServer: [],
            idServ:"",
            nombreServ: "",
            codigoServ: "",
            tareaServ: "",
            imagenServ: "",
        };
    }


    componentDidMount() {
        let _this = this;
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://reactcalculadora.000webhostapp.com/mostrarDatos.php", true);
        xhttp.send();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                //console.log(xhttp.responseText);
                var datos = JSON.parse(xhttp.responseText);

                _this.setState({ datosServer: datos });
            }
        };
    }




    render() {

        const btnCambiar = () => {

            let nip = this.state.idServ;
            let name = this.state.nombreServ;
            let code = this.state.codigoServ;
            let task = this.state.tareaServ;
            let image = this.state.imagenServ;

            this.props.navigation.navigate("idCambios", {id:nip, nombre:name,codigo:code,tarea:task,imagen:image});

            console.log(this.state.idServ);
            console.log(this.state.nombreServ);
            console.log(this.state.codigoServ);
            console.log(this.state.tareaServ);
            console.log(this.state.imagenServ);
          }
            



        return (
            <View style={styles.view}>
                <Text>Selecciona el registro que quieres cambiar </Text>

                <Dropdown data={this.state.datosServer} labelField="Codigo"
                    containerStyle={{ backgroundColor: 'rgb(56,61,59)', }}


                    selectedTextStyle={styles.label} value={this.state.datosServer} style={styles.dropdown} onChange={item => {
                        
                        this.setState({ idServ: item.id });
                        this.setState({ nombreServ: item.Nombre });
                         this.setState({ codigoServ: item.Codigo });
                         this.setState({ tareaServ: item.Tarea });
                         this.setState({ imagenServ: item.imagen });

                        //console.log(this.props.idServ);
                    }}> </Dropdown>


                <Button title='cambiar' onPress={btnCambiar} />

            </View>
        )
    }
}


const styles = StyleSheet.create({
    celdas: {
        margin: 20,
        borderWidth: 2,
        borderColor: 'rgb(122,201,173)',
        borderRadius: 10,
    },

    view: {

        backgroundColor: 'rgb(56,61,59)',
        flex: 1,
        flexDirection: 'column',
    },



    textoPincipal: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'rgb(193,199,188)',
    },
    texto: {
        color: 'rgb(193,199,188)',
        padding: 4,
        paddingRight: 3,

    }

})