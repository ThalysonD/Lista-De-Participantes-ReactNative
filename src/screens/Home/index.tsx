import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/participant';

export function Home() {
  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Lucas', 'Samuel', 'Jequiti', 'Tudelinha', 'Geovana', 'Thalyson', 'Luiz'];

  function handleParticipantAdd(){
    if(participants.includes('Thalyson')){
      return Alert.alert('Participante existe', 'Esse participante já está na lista');
    }
  }

  function handleParticipantRemove(name: string){
    Alert.alert('Remover participante', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Removido', `O participante ${name} foi removido com sucesso!`)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        Nome do Evento
      </Text>

      <Text style={styles.text2}>
        03 de novembro
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity style = {styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttontext}> 
            +
          </Text>
        </TouchableOpacity>
      </View> 
      
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item }) => (
          <Participant
            key={item} 
            name= {item} 
            onRemove={()=> handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum participante chegou ao evento ainda.
          </Text>
        )}
      />
    </View>
  )
}