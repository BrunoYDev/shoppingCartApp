import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../../components/CartItem";

const Cart = () => {
  const { cart, addItemCart, removeItemCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        ListEmptyComponent={
          <Text style={styles.addMsg}>Add some items on Cart</Text>
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CartItem
            data={item}
            addItem={() => addItemCart(item)}
            removeItem={() => removeItemCart(item)}
          />
        )}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  addMsg: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
});
