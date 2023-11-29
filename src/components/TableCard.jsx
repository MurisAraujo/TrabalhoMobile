import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ name, status, items, id }) => {
    const getStatusColor = () => {
        return status === 'livre' ? '#00C851' : '#ff4444';
    };

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Pedido', {
                    id: id,
                })
            }} 
            style={[styles.card]}>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.description}>Items: {items}</Text>
                </View>
                <View style={[styles.indicator, { backgroundColor: getStatusColor() }]} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    indicator: {
        width: '10px',
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        width: '85%',
        borderRadius: 8,
        backgroundColor: '#d3d3d3',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 14,
        paddingRight: 14,
        marginTop: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#888',
    },
});

export default Card;
