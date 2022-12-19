import React, { Component } from 'react';
import { View, Text, FlatList , StyleSheet, TouchableOpacity} from 'react-native';

export default class Pantallab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datosServer: "",
        };
    }


//consulta la base de datos y trae los datos se ejecuta siempre con el render 
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
        //funcion para enviar datos a la pantalla de id
        const getItem = (numeroCelda,nombreMono,codigoMono,imagenMono)=>{
            console.log(numeroCelda);
            this.props.navigation.navigate("id", {nombre:nombreMono,codigo:codigoMono,imagen:imagenMono});
        }

        //creacion de la celda 
        const celda = ({ item }) => {
            return (
                <View  style={styles.celdas} >
                    {/*TouchableOpacity es un boton invisible que al seleccionarlo envia los datos a otra pantalla con la fucion on press  */}
                    <TouchableOpacity onPress={()=> getItem(item.id,item.Nombre,item.Codigo,item.imagen) }>
                        {/* toma los datos de la flat list(item) para poder imprimirlo */}
                    <Text style={styles.texto}>id: {item.id}</Text>
                    <Text style={styles.texto}>Nombre: {item.Nombre}</Text>
                    <Text style={styles.texto}>codigo: {item.Codigo}</Text>
                    <Text style={styles.texto}>tarea: {item.Tarea}</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View style={styles.view}>
                {/* imprime el nombre que se envio desde la pantalla de login */}
                <Text style={styles.textoPincipal}> {this.props.route.params.nombre}</Text>
                {/* trae todos los datos del server y crea una tipo lista para poder manejar los datos en el return de arriba*/}
                <FlatList
                //se le dice que utilice los datos que hay en datosServer
                    data={this.state.datosServer}
                    //los renderiza en la funcion celda 
                    renderItem={celda}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }

}


const styles = StyleSheet.create({
celdas:{
   margin:20, 
    borderWidth: 2,
    borderColor:'rgb(122,201,173)',
    borderRadius:10,
},

view:{
 
  backgroundColor: 'rgb(56,61,59)',
  flex: 1,
  flexDirection: 'column',
},



textoPincipal:{
    textTransform:'uppercase',
    textAlign:'center',
    color:'rgb(193,199,188)',
},
texto:{
    color:'rgb(193,199,188)',
    padding:4,
    paddingRight:3,
    
}

})