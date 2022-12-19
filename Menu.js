// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LOGIN from "./Login";
import PANTALLAB from "./Pantallab";
import ID from "./Id";
import ACCIONES from "./Acciones";
import ALTAS from "./Altas";
import BAJAS from "./Bajas";
import CAMBIOS from "./Cambios";
import IDCAMBIOS from "./IdCambios";
import MAPA from "./Mapa";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* aqui se declaran todas las pantallas que creamos para que funcione la funcion navigate  */}
        <Stack.Screen name="Login" component={LOGIN} options={{headerShown:false}} />
        <Stack.Screen name="pantalla2" component={PANTALLAB} options={{headerShown:false}} />
        <Stack.Screen name="id" component={ID} options={{headerShown:false}} />
        <Stack.Screen name="acciones" component={ACCIONES} options={{headerShown:false}} />
        <Stack.Screen name="altas" component={ALTAS} options={{headerShown:false}} />
        <Stack.Screen name="bajas" component={BAJAS} options={{headerShown:false}} />
        <Stack.Screen name="cambios" component={CAMBIOS} options={{headerShown:false}} />
        <Stack.Screen name="idCambios" component={IDCAMBIOS} options={{headerShown:false}} />
        <Stack.Screen name="Mapa" component={MAPA} options={{headerShown:false}} />
        
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

export default App;