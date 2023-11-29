import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff',
    },
    menu: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    menuItem: {
        marginBottom: 10,
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,
        color: '#fff',
    },
    image: {
        flex: 1,
    },
    inside: {
        flex: 1,
        backgroundColor: 'rgba(44, 58, 71, 0.6)',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 40,
    }
});

export default styles;