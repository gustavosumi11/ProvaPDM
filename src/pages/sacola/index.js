import React from 'react';
import {StyleSheet,View, Text, CheckBox,TouchableOpacity, StatusBar} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';


export default function Sacola(){
   
  

    return(
        
        
        <View style={styles.Container}>
            
            <Text style={{fontSize: 25 }}>Minha Sacola</Text>
            <Text> </Text>
            <Text style={{fontSize: 20}}> Endereço</Text>
            <TextInput style={styles.input} placeholder="Ex: Avenida das flores"/>
            <Text style={{fontSize: 18}}> Número</Text>
            <TextInput style={styles.input} placeholder="Ex: 879"/>
            <Text style={{fontSize: 18}}> Bairro</Text>
            <TextInput style={styles.input} placeholder="Ex: Zona 01"/>
            <Text>Itens do Pedido: </Text>
            <Text>Subtotal: </Text>
            <Text style={{fontSize: 20}}>Valor Total: </Text>
            

            <Text style={{fontSize: 20}}> Escolha a forma de pagamento</Text>
           <Text><CheckBox value={false} />Cartão de Crédito</Text> 
           <Text><CheckBox value={false} />Cartão de Débito</Text> 
           <Text><CheckBox value={false} />Dinheiro</Text> 
           <TouchableOpacity style={styles.button} onPress={()=>{}}><Text style={styles.buttonText}>Enviar</Text></TouchableOpacity>
            
            
               
        </View>
 );
}
   
const styles = StyleSheet.create({
    container:{
       
        alignItems:"center",
        justifyContent:'center',
    },
    input:{
        borderWidth:1,
        borderColor:'#000',
        padding:8,
        margin:20,
        width:200
    },
    button:{
        backgroundColor:"#d3d3d3"
    },
    buttonText:{
        alignSelf:'center',
        padding: 15,
        fontSize: 25,
        color:"black",
        fontWeight: 'bold'
    }
   
    
});
