import React, {useState} from "react";
import {Text,View,StyleSheet,Alert,TouchableOpacity,TextInput} from 'react-native';
import {alterarFrutas, deletarFrutas} from './ModelFrutas';

export default function AlterarFruta() {
    const [idp, setIdp] = useState('');
    const [frutap, setFrutap] = useState('');
    const [valorp, setValorp] = useState('');
    const [fotop, setFotop] = useState('');
    
    async function alterar() {
        const resultado = await alterarFrutas(idp,frutap,valor,fotop);
        if (resultado == 'Sucesso') {
            Alert.alert('Fruta alterada com sucesso!!');
        }else{
            Alert.alert('Erro ao alterar a fruta!!');
        }
    }

    async function deletar() {
        const resultado = await deletarFrutas(idp);
        if(resultado == 'Sucesso') {
            Alert.alert('Fruta deletada com sucesso!!');
        }else{
            Alert.alert('Erro ao deletar a fruta!!');
        }
    }

    return(
        <View Style={estilo.container}>
            <TextInput
                value={idp}
                placeholder="Digite o código da Fruta"
                style={estilo.TextInputTodos}
                onChangeText={setIdp}
            />
            <TextInput
                value={frutap}
                placeholder="Digite o nome da Fruta"
                style={estilo.TextInputTodos}
                onChangeText={setFrutap}
            />
            <TextInput
                value={valorp}
                placeholder="Digite o valor da Fruta"
                style={estilo.TextInputTodos}
                onChangeText={setValorp}
            />
            <TextInput
                value={fotop}
                placeholder="Digite o link da imagem da fruta"
                style={estilo.TextInputTodos}
                onChangeText={setFotop}
            />

            <TouchableOpacity style={estilo.botaoCadastrar} onPress={alterar}>
                <Text style={estilo.textoBotaoCadastrar}>Alterar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.botaoCadastrar} onPress={alterar}>
                <Text style={estilo.textoBotaoCadastrar}>Deletar</Text>
            </TouchableOpacity>

        </View>
    );
}

const estilo = StyleSheet.create({
    contaniner: {
        flex: 1,
        backgroundColor: '#e9c46a',
    },
    botaoCadastrar:{
        backgroundColor: '#e9c46a',
        margin: 15,
        padding: 5,
        borderRadius: 1,
    },
    TextInputTodos: {
        fontSize: 18
    }
})