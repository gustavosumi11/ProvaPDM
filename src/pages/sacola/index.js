import React from 'react';
import {StyleSheet,View, Text, CheckBox,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';


export default function Sacola(){
   
    return(
        <View style={styles.container}>
            <Text style={styles.textoPrin}>Minha Sacola</Text>
            <Text> </Text>
            <Text style={styles.cell}> Endereço</Text>
            <TextInput style={styles.input} placeholder="Ex: Avenida das flores"/>
            <Text style={{fontSize: 18}}> Número</Text>
            <TextInput style={styles.input} placeholder="Ex: 879"/>
            <Text style={{fontSize: 18}}> Bairro</Text>
            <TextInput style={styles.input} placeholder="Ex: Zona 01"/>
            <Text>Itens do Pedido: </Text>
            <Text>Subtotal: </Text>
            <Text style={styles.cell}>Valor Total: </Text>
            <Text style={{fontSize: 20}}> Escolha a forma de pagamento</Text>
           <Text><CheckBox value={false} />Cartão de Crédito</Text> 
           <Text><CheckBox value={false} />Cartão de Débito</Text> 
           <Text><CheckBox value={false} />Dinheiro</Text> 

           <Text style={styles.cell}>Escolha a forma </Text>
           <Text><CheckBox value={false} />Entrega (Motoboy)</Text> 
           <Text><CheckBox value={false} />Retirada no balcão</Text> 
           <TouchableOpacity style={styles.button} onPress={()=>{}}><Text style={styles.buttonText}>Confirmar</Text></TouchableOpacity>
                   
        </View>
 );
}
   
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
     
        justifyContent:'center',
    },
    textoPrin:{
        fontSize:20,
        color:'red'

      
    },
    input:{
        borderWidth:1,
        borderColor:'#000',
        width:200
    },
    button:{
        backgroundColor:"white"
    },
    buttonText:{
       
        padding: 15,
        fontSize: 25,
        color:"black",
        fontWeight: 'bold'
    },
    cell:{
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor:"#E4EBEE",
        fontSize: 18,
        marginBottom: 2,
    }
    
    
});
