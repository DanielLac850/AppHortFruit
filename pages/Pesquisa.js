import  React,{useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {Text,View,StyleSheet, TextInput,TouchableOpacity,Alert} from 'react-native';
import {pesquisaNomeFruta} from './Frutas/ModelFrutas';


export default function Pesquisa(){

const [dadosFrutas, setdadosFrutas] = useState([]);
  
async function buscarFrutas(){
  const resultado = await pesquisarNomeFruta(nomeFruta);
  if (resultado) {
    setdadosFrutas(resultado);
  } else {
    Alert.alert('Fruta não encontrada!!');
    setdadosFrutas('');
  }
}



    return(
      <View style={estilo.container}>
      <Text style={estilo.titulo}>Qual fruta vc quer?</Text>
      <TextInput 
      placeholder='Digite uma fruta'
      style={estilo.textInput} 
      />

      <TouchableOpacity style={estilo.botao} onPress={()=> buscarFrutas()}>
        <Text style={estilo.textbotao}>Pesquisar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
    );
}

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#fefae0"
    },
    botao:{
      backgroundColor:"#606c38",
      marginTop:15,
      padding:10,
      borderRadius:15,
      width:'80%',
      justifyContent:'center',
      alignItems:'center',

    },
    textbotao:{
      fontSize:15,
      fontWeight:'700',
      color:'#e0f19c' ,
    },
    textInput:{
      borderColor:'#283618',
      fontSize:15,
      width:'80%',
      height:30,
      borderWidth:2,
      borderRadius:8,
      marginTop:30,
      paddingHorizontal:10

    },

    titulo:{
      fontWeight:'700',
      fontSize:30,
      color:"#bc6c25",
    }
  });