import { ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';

const App = () => {
  const [nome, setNome] = useState('');
  const [Sobrenome, setSobrenome] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [ConfirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = () => {
    console.log('Valores informados:');
    console.log('Primeiro Nome:', nome);
    console.log('Sobrenome:', Sobrenome);
    console.log('Senha:', senha);
    console.log('E-mail:', email);
    console.log('Confirmar Senha:', ConfirmarSenha);
  };

  const limpar = () => {

  }



  return (
    <ImageBackground
      source={require('./assets/image.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.div}>
          <Text style={styles.titulo}>Cadastro{"\n"}de Usuário</Text>
          <TextInput
            style={styles.input}
            placeholder="Primeiro Nome"
            value={nome}
            underlineColorAndroid="transparent"
            selectionColor="transparent"
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="Sobrenome"
            value={Sobrenome}
            underlineColorAndroid="transparent"
            selectionColor="transparent"
            onChangeText={setSobrenome}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            underlineColorAndroid="transparent"
            selectionColor="transparent"
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={senha}
            underlineColorAndroid="transparent"
            selectionColor="transparent"
            onChangeText={setSenha}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            secureTextEntry
            value={ConfirmarSenha}
            underlineColorAndroid="transparent"
            selectionColor="transparent"
            onChangeText={setConfirmarSenha}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleCadastro}
          >
            <Text style={styles.buttonText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  div: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: 'rgba(73,63,140, 0.3)',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  titulo: {
    fontSize: 40,
    margin: 20,
    color: 'white'
  },
  input: {
    width: '100%',
    maxWidth: 250,
    height: 40,
    borderColor: 'rgba(255, 255, 255, 0.0)',
    color: 'white',
    borderBottomWidth: 1, // Adiciona uma linha reta embaixo
    borderBottomColor: 'white', // Cor da linha reta
    borderWidth: 2,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 12,
    outlineWidth: 0,
  },
  button: {
    backgroundColor: 'rgba(73,63,140, 0.7)', // Cor de fundo do botão
    borderRadius: 12, // Raio da borda do botão
    width: 150, // Largura do botão
    height: 40, // Altura do botão
    justifyContent: 'center', // Centralizar o conteúdo verticalmente
    alignItems: 'center', // Centralizar o conteúdo horizontalmente

  },
  buttonText: {
    color: 'white', // Cor do texto do botão
    fontSize: 18, // Tamanho da fonte do texto
  },
});

export default App;
