import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mesas from '../views/Table/Mesas';
import Home from '../views/Home/Home';
import Cardapio from '../views/Cardapio/Cardapio';
import Bebidas from '../views/Bebidas/Bebidas';
import Pedido from '../views/Pedido/Pedido';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='Home'
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Gerenciamento de Mesas" component={Mesas}/>
        <Stack.Screen name="Cardapio" component={Cardapio}/>
        <Stack.Screen name="Bebidas" component={Bebidas}/>
        <Stack.Screen name="Pedido" component={Pedido}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}