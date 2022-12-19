import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';



export default class Bajas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosServer: [],
      idServer: "",
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

    const btnBorrar = () => {

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          //document.getElementById("demo").innerHTML = xhttp.responseText;
          console.log(xhttp.responseText);

          if (xhttp.responseText == 1) {
            alert("eliminado correctamente");
          }
        }
      };
      xhttp.open("GET", "https://reactcalculadora.000webhostapp.com/bajas.php?id=" + this.state.idServer, true);
      xhttp.send();

      console.log(this.state.idServer);

    }
    return (
      <View style={styles.view}>
        <Text>Bajas</Text>
        {/* componente que se instalo el cual solo de selecciona un registro para borrarlo 
          en donde los datos los toma del server y con el item.(campo a seleccionar ) 
          los puedes manipular
        */}
        <Dropdown data={this.state.datosServer} labelField="Nombre"
          containerStyle={{ backgroundColor: 'rgb(56,61,59)', }}


          selectedTextStyle={styles.label} value={this.state.datosServer} style={styles.dropdown} onChange={item => {
            // console.log(item.id)
            this.setState({ idServer: item.id });
          }}> </Dropdown>

        <Button title='borrar' onPress={btnBorrar} />


      </View>
    )







  }//render
}//principal




const styles = StyleSheet.create({

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

  },
  dropdown: {
    height: 50,
    backgroundColor: 'rgb(122,201,173)',
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,



  },

  label: {
    color: 'rgb(56,61,59)',

  },
  caja: {
    backgroundColor: 'rgb(56,61,59)',
    color: 'red',
  }

})
