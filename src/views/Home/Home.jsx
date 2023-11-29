import { View, Text, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const background = require('../../../assets/background.jpg');
const Home = () => {
    const navigation = useNavigation();

    const handleModuleClick = (moduleName) => {
        navigation.navigate(moduleName);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode='cover'
            style={styles.image}>
                <View style={styles.inside}>
                    <Text style={styles.title}>Gerenciador<br></br>Bistrot Senac</Text>
                    <View style={styles.menu}>
                        <View style={styles.menuItem}>
                            <Button title="Cardápio" onPress={() => handleModuleClick('Cardapio')} />
                        </View>
                        <View style={styles.menuItem}>
                            <Button title="Gerenciamento de Bebidas" onPress={() => handleModuleClick('Bebidas')} />
                        </View>
                        <View style={styles.menuItem}>
                            <Button title="Gerenciamento de Mesas" onPress={() => handleModuleClick('Gerenciamento de Mesas')} />
                        </View>
                    </View>
                    <Text style={styles.text}>Desenvolvido por: Senac</Text>
                </View>
            </ImageBackground>
        </View>
    );
};



export default Home;
