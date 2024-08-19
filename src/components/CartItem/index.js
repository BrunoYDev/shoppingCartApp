import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CartItem = ({data,addItem,removeItem}) => {
    const [amount,setAmount] = useState(data?.amount);

    const handleAdd = () =>{
        addItem();
        setAmount(item => item + 1);
    }

    const handleRemove = () =>{
        removeItem();
        if(amount === 0){
            setAmount(0)
            return;
        }
        setAmount(item => item - 1);
    }
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.price}>$ {data.price}</Text>
            </View>

            <View style={styles.amountContainer}>
                <TouchableOpacity style={styles.buttonAdd} onPress={handleRemove}>
                    <Text>-</Text>
                </TouchableOpacity>
                <Text style={styles.amount}>{amount}</Text>
                <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default CartItem;

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: '#dfdfdf',
        borderRadius: 2,
        marginBottom: 14,
        padding: 8,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    price:{
        fontSize: 16
    },
    amountContainer:{
        marginTop: 14,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonAdd:{
        backgroundColor: '#168fff',
        padding: 6,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 2,
    },
    amount:{
        marginLeft: 14,
        marginRight: 14
    }
});