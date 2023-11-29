import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {

        flex: 1,
    
        paddingVertical: 10,

        backgroundColor: '#3a3b3c'
    
      },
    
    handleButtons : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: '#3a3b3c',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
      
    },

    title: {
        fontSize: 32,
        color: '#fff',
        textAlign: 'center',
        marginLeft: 10,
    },

    text: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginTop: 300,
    },

    inputTitle: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
    },

    input: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
    },

    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#3a3b3c',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },

    listTitle: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
    },

    listText: {
        fontSize: 12,
        color: '#fff',
        textAlign: 'left',
        marginTop: 10,
    },

    buttonView: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center',
        backgroundColor: '#3a3b3c',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },

    listButton: {
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 16
    },
    
    
});

export default styles;