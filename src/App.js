import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Alert, TouchableOpacity, Linking}  from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import foto from './assets/foto.jpg';




const App = () =>{

  function handleRedeSocial(rs) {
    switch (rs) {
      case 'github':
        Linking.openURL('https://github.com/jvagner-BR')
        break
      case 'linkedin':
        Linking.openURL('https://www.linkedin.com/in/joão-vagner-558832203/')
        break
      case 'instagram':
          Linking.openURL('https://www.instagram.com/jvagner_br/')
        break
    }
  }

  return (
      <>
      <View style={style.page}>
        <ScrollView>
          <View style={style.contairner_cabecalho}>
          <Image style={style.foto} source={foto} />
          <Text style={style.nome}>JOÃO VAGNER</Text>
          <Text style={style.funcao}>Desenvlvedor Web and Moblie</Text>
            <View style={style.redes_social}>
              <TouchableOpacity onPress={() => handleRedeSocial('github')} >
                <Icon name='github' size={30} color={'#000'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('linkedin')} >
                <Icon name='linkedin' size={30} color={'#000'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('instagram')} >
                <Icon name='instagram' size={30} color={'#000'} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.card_container}>
            <View style={style.card}>
              <Text style={style.titulo}>Formação Academica</Text>
              <View style={style.info}>
                <Text>UFPE(cursando)</Text>
                <Text>SENAI(cursando)</Text>
                <Text>EREMJO</Text>
              </View>
            </View>

            <View style={style.card}>
              <Text style={style.titulo} >Experiência Profissional</Text>
              <View style={style.info}>
                <Text >Em busca de uma oportunidade para execer minhas habilidades</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
  </>
  );
};

const style = StyleSheet.create({

  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  contairner_cabecalho:{
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 1,
  },
  funcao: {
    marginBottom: 1,
  },
  redes_social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 10,
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    padding: 10,
    marginBottom: 10,
    width: 300,
  },
  titulo: {
    backgroundColor: '#00bfff',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#939393',
  },
  info: {
    padding: 1,
  },

});

export default App;
