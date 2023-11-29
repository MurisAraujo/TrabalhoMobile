import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { ROUTES } from '../../services/ApiRoutes';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Bebidas = () => {
    const [drinks, setDrinks] = useState([]);
    const [drinkId, setDrinkId] = useState('');
    const [drinkName, setDrinkName] = useState('');
    const [drinkDesc, setDrinkDesc] = useState('');
    const [drinkPrice, setDrinkPrice] = useState('');
    const [loading, setLoading] = useState(false);

    const filteredList = [];

    const navigation = useNavigation();

    const handleModuleClick = (moduleName) => {
        navigation.navigate(moduleName);
    };

    useEffect(() => {
        fetchDrinks();
    }, [loading]);

    const fetchDrinks = () => {
        axios.get(`${ROUTES.GET_BEBIDAS}.json`)
        .then((response) =>  {
            for(const [key, value] of Object.entries(response.data)) {
                filteredList.push({
                    id: key,
                    nome: value.nome,
                    descricao: value.descricao,
                    preco: value.preco
                })
            }
            setDrinks(filteredList) 
            setLoading(false)
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const handleEditDrink = () => { 
        axios.put(`${ROUTES.GET_BEBIDAS}/${drinkId}.json`, {
            nome: drinkName,
            descricao: drinkDesc,
            preco: drinkPrice
        }).then(() => { setLoading(true) });
    };

    const handleDeleteDrink = (id) => {
       axios.delete(`${ROUTES.GET_BEBIDAS}/${id}.json`).then(() => { setLoading(true) });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="arrow-left" size={30} color="#fff" onPress={() => navigation.navigate('Home')} />
                <Text style={styles.title}>Bebidas</Text>
            </View>
            <Text style={styles.inputTitle}>Editar bebida:</Text>
            <TextInput
                placeholder="ID"
                value={drinkId}
                style={styles.input}
                onChangeText={setDrinkId} 
            />
            <TextInput
                placeholder="Nome"
                value={drinkName}
                style={styles.input}
                onChangeText={setDrinkName}
            />
            <TextInput
                placeholder="Descrição"
                value={drinkDesc}
                style={styles.input}
                onChangeText={setDrinkDesc}
            />
            <TextInput 
                placeholder="Preço" 
                value={drinkPrice}
                style={styles.input}
                onChangeText={setDrinkPrice}
            />
            <View style={styles.handleButtons}>
                <Button title='Edit Drink' onPress={() => handleEditDrink()} />
            </View>

            <Text style={styles.listTitle}>Drinks:</Text>
            <FlatList
                data={drinks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <View>
                            <Text style={styles.listText}>ID: {item.id}</Text>
                            <Text style={styles.listText}>{item.nome}</Text>
                            <Text style={styles.listText}>{item.descricao}</Text>
                            <Text style={styles.listText}>R$ {item.preco}</Text>
                        </View>
                        <View style={styles.buttonView}>
                            <Button style={styles.listButton} title="Delete" onPress={() => handleDeleteDrink(item.id)} />
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default Bebidas;
