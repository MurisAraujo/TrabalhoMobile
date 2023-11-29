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

    menuButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
    },

    buttons: {
        width: '40%',
        marginVertical: 10,
    },

    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 35,
        marginBottom: 10,
        marginTop: 40,
    },

    headerText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    
});

export default styles;