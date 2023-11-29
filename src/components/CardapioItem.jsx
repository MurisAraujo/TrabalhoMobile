import { View, Text, StyleSheet } from 'react-native';

const RenderProduto = ({ item }) => {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{item.nome}</Text>
        <Text style={styles.desc}>{item.descricao}</Text>
      </View>
      <View style={styles.preco}>
        <Text style={styles.precoText}>R${item.preco}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        borderRadius: 8,
        paddingTop: 16,
        paddingBottom: 16,
        paddingHorizontal: 35,
        marginTop: 16,
        marginBottom: 16,
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4aafcd',
    },

    desc: {
        fontSize: 11,
        color: '#c4c4c4',
        width: 200,
    },
    preco: {
        backgroundColor: '#4aafcd',
        width: 80,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    precoText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RenderProduto;