import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {

        flex: 1,
    
        paddingVertical: 10,

        backgroundColor: '#3a3b3c'
    
      },
    
      item: {
    
        paddingVertical: 10,
    
        paddingHorizontal: 16,
    
        justifyContent: 'center',
    
        alignItems: 'center',
    
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

      header: {
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: '#3a3b3c',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
      
      },

      input: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
    },

      containerComponent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        borderRadius: 8,
        paddingTop: 16,
        paddingBottom: 16,
        paddingHorizontal: 15,
        marginTop: 16,
        marginBottom: 16,
    },

    nameComponent: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4aafcd',
    },

    descComponent: {
        fontSize: 11,
        color: '#c4c4c4',
        width: 200,
    },
    precoComponent: {
        backgroundColor: '#4aafcd',
        width: 80,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    precoTextComponent: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    finalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 30,
    },
})


export default styles;