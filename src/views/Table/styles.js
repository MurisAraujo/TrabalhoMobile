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
      
      }
})


export default styles;