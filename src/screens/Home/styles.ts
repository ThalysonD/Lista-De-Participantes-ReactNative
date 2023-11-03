import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016'
    },
    text1: {
      color: '#ffffff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 50,
      marginLeft: 10
    },
    text2: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
      marginLeft: 130,
      marginBottom: 20
    },
    input: {
      flex: 1,
      backgroundColor: '#1F1E25',
      borderRadius: 5,
      color: '#FFF',
      padding: 16,
      fontSize: 16,
      marginRight: 12
    },
    buttontext: {
      color: '#FFF',
      fontSize: 24
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31FC67',
      alignItems: 'center',
      justifyContent: 'center'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginBottom: 24,
    },
    listEmptyText: {
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center'
    }
  });