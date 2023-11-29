import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import axios from 'axios';
import { ROUTES } from '../../services/ApiRoutes';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import RenderProduto from '../../components/CardapioItem';


const Cardapio = () => {
  const [bebidas, setBebidas] = useState([]);
  const [entradas, setEntradas] = useState([]);
  const [principais, setPrincipais] = useState([]);
  const [sobremesas, setSobremesas] = useState([]);
  const [productType, setProductType] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
        const response = await axios.get(`${ROUTES.GET_CARDAPIO}.json`);
        setLoading(false);            
        setBebidas(response.data.bebidas);
        setEntradas(response.data.entradas);
        setPrincipais(response.data.principais);
        setSobremesas(response.data.sobremesas);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Icon name="arrow-left" size={30} color="#fff" onPress={() => navigation.navigate('Home')} />
            <Text style={styles.title}>Cardápio</Text>
        </View>
        <View style={styles.menuButtons}>
            <View style={styles.buttons}>
                <Button title="Bebidas" onPress={() => setProductType(1)}/>
            </View>
            <View style={styles.buttons}>
                <Button title="Entradas" onPress={() => setProductType(2)}/>
            </View>
            <View style={styles.buttons}>
                <Button title="Principais" onPress={() => setProductType(3)}/>
            </View>
            <View style={styles.buttons}>
                <Button title="Sobremesas" onPress={() => setProductType(4)}/>
            </View>
        </View>
        <View style={styles.listHeader}>
            <Text style={styles.headerText}>Produtos</Text>
            <Text style={styles.headerText}>Preço</Text>
        </View>
      {loading ? (
            <Text style={styles.text}>Carregando...</Text>
        ) : (
            <FlatList
                data={productType === 1 ? bebidas : productType === 2 ? entradas : productType === 3 ? principais : sobremesas}
                renderItem={({ item }) => (
                    console.log(item),
                    <RenderProduto item={item}/>
                )}
                keyExtractor={(item) => item.nome}
            />
        )}
    </View>
  );
};

export default Cardapio;

