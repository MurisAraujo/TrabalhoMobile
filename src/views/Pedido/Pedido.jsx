import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import axios from 'axios';
import { ROUTES } from '../../services/ApiRoutes';

const Pedido = ({route, navigation}) => {
    const [addProduto , setAddProduto] = useState({});
    const [addQuantidade, setAddQuantidade] = useState('');
    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState('');
    const [pedidos, setPedidos] = useState([]);
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const filteredProducts = [];
    const filteredList = [];
    const [total, setTotal] = useState(0);
    const { id } = route.params;

    const handleProdutos = () => {
        axios.get(`${ROUTES.GET_CARDAPIO}.json`).then((response) => {
            for(const [key, value] of Object.entries(response.data.bebidas)) {
                filteredProducts.push({
                    id: key,
                    nome: value.nome,
                    descricao: value.descricao,
                    preco: value.preco,
                })
            }

            for(const [key, value] of Object.entries(response.data.entradas)) {
                filteredProducts.push({
                    id: key,
                    nome: value.nome,
                    descricao: value.descricao,
                    preco: value.preco,
                })
            }

            for(const [key, value] of Object.entries(response.data.principais)) {
                filteredProducts.push({
                    id: key,
                    nome: value.nome,
                    descricao: value.descricao,
                    preco: value.preco,
                })
            }

            for(const [key, value] of Object.entries(response.data.sobremesas)) {
                filteredProducts.push({
                    id: key,
                    nome: value.nome,
                    descricao: value.descricao,
                    preco: value.preco,
                })
            }

            setProdutos(filteredProducts);

        });
    };    
        
    const handleAdd = () => {
        const requestProduto = {
            nome: addProduto.nome,
            descricao: addProduto.descricao,
            preco: addProduto.preco,
            quantidade: addQuantidade,
        }

        pedidos.push(requestProduto);

        axios.patch(`${ROUTES.GET_MESAS}/${id}.json`, {
            pedidos: pedidos
        }).then(() => {
            setLoading(true)
        });
    };

    const handlePedido = () => {
        axios.get(`${ROUTES.GET_MESAS}/${id}.json`).then((response) => {
            setNome(response.data.nome);
            for(const [key, value] of Object.entries(response.data.pedidos)) {
                filteredList.push({
                    id: key,
                    nome: value.nome,
                    descricao: value.descricao,
                    preco: value.preco,
                    quantidade: value.quantidade,
                })
            }
            setPedidos(filteredList);
            setStatus(response.data.status);
            setLoading(false);
            setTotal(response.data.pedidos.reduce((acc, item) => {
                return acc + (item.preco * item.quantidade);
            }, 0));
        });
    };

    const handleRemove = (itemID) => {
        if(status == 'ocupada') {
            return;
        }
        axios.delete(`${ROUTES.GET_MESAS}/${id}/pedidos/${itemID}.json`).then( () => {
            setLoading(true)
        });
    }

    const handleStatus = () => {
        if(status == 'ocupada') {
            axios.patch(`${ROUTES.GET_MESAS}/${id}.json`, {
                status: 'livre'
            }).then(() => {
                setLoading(true)
            });
        } else {
            axios.patch(`${ROUTES.GET_MESAS}/${id}.json`, {
                status: 'ocupada'
            }).then(() => {
                setLoading(true)
            });
        }
    }


    useEffect(() => {
        handleProdutos();
        handlePedido();
    }, [loading]);


    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Icon name="arrow-left" size={30} color="#fff" onPress={() => navigation.navigate('Gerenciamento de Mesas')} />
            <Text style={styles.title}>{nome}</Text>
        </View>

        <View style={{marginTop: 15}}>
            <Text style={styles.title}>Adicionar Item:</Text>
            <View>
                <SelectDropdown 
                    buttonStyle={{borderWidth: 1, borderColor: '#000', width: '100%'}}
                    data={produtos}
                    onSelect={(selectedItem, index) => {
                        setAddProduto(selectedItem)
                    }}

                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.nome
                    }}

                    rowTextForSelection={(item, index) => {
                        return item.nome
                    }}
                />
                <TextInput style={styles.input} onChangeText={setAddQuantidade} placeholder="Quantidade" />
                <Button disabled={status == 'ocupada' ? true : false} title="Adicionar" onPress={() => handleAdd()} />
            </View>
        </View>
        <View style={{marginTop: 15}}>
                <Text style={styles.title}>Pedidos:</Text>
                <FlatList
                style={{height: 400}}
                    data={pedidos}
                    renderItem={({ item }) => (
                        console.log(item),
                        <View style={styles.containerComponent}>
                            <Icon name="trash" size={30} color="#d9534f"  onPress={() => handleRemove(item.id)} />
                            <View>
                                <Text style={styles.nameComponent}>{item.nome}</Text>
                                <Text style={styles.descComponent}>{item.descricao}</Text>
                            </View>
                            <View style={styles.precoComponent}>
                                <Text style={styles.precoTextComponent}>x{item.quantidade}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.nome}
                />
                
        </View>
            <View style={styles.finalButtons}>
                <Text style={styles.precoTextComponent}>Preço Final: R$ {total}</Text>

                <Button onPress={() => handleStatus()} title={status == 'ocupada' ? 'Abrir mesa' : 'Fechar mesa'} />
            </View>
        </View>
    );
};

export default Pedido;
