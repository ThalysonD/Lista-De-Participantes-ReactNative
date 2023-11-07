import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/participant';

export function Home() {
  const [participants, setParticipants] = useState<string []>([]);
  const [partcipantName, setPartcipantName] = useState('');

  function handleParticipantAdd(){
    if(participants.includes(partcipantName)){
      Alert.alert('Esse participante já foi adicionado');
      return;
    }

    setParticipants(prevState => [...prevState, partcipantName]);
    setPartcipantName('');
  }

  function handleParticipantRemove(name: string){
    Alert.alert(
      'Remover participante',
      `Tem certeza que você deseja remover o participante ${name}?`,
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => setParticipants(prevState => prevState.filter(item => item !== name))
        }
      ]
    )
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
          onChangeText={setPartcipantName}
          value={partcipantName}
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