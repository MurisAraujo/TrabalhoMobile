import axios from 'axios';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const OrderItem = ({ item, id }) => {

    

  return(
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
  )
}

const styles = StyleSheet.create({

    
});

export default OrderItem;