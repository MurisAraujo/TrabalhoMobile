import axios from 'axios';
import { View, FlatList, Text, Button } from 'react-native';
import { ROUTES } from '../../services/ApiRoutes';
import styles from './styles';
import { useState, useEffect } from 'react';
import Card from '../../components/TableCard';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Mesas = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const filteredList = [];

  const navigation = useNavigation();

  const headers = {
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    setLoading(true);
    
      axios.get(`${ROUTES.GET_MESAS}.json`, {headers})
      .then((response) =>  {
          for(const [key, value] of Object.entries(response.data)) {
            filteredList.push({
                id: parseInt(key),
                nome: value.nome,
                status: value.status,
                pedidos: value.pedidos
            })
          }
          setData(filteredList) 
          setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
    
  }, []);

  console.log(data);


  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={30} color="#fff" onPress={() => navigation.navigate('Home')} />
        <Text style={styles.title}>Mesas</Text>
      </View>
        {loading ? (
            <Text style={styles.text}>Carregando...</Text>
        ) : (
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    console.log(item),
                    <Card
                      name={item.nome} 
                      status={item.status} 
                      id={item.id}
                      items={item.pedidos ? item.pedidos.length : 0}
                    />
                )}
                keyExtractor={(item) => item.nome}
            />
        )}
    </View>
  );

};

export default Mesas;

