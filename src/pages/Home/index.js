import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Feather } from "@expo/vector-icons";
import Product from "../../components/Product";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Coke",
      price: 19.9,
    },
    {
      id: "2",
      name: "Chocolate",
      price: 6.5,
    },
    {
      id: "3",
      name: "Cheese 500g",
      price: 15,
    },
    {
      id: "4",
      name: "French Fries",
      price: 23.9,
    },
    {
      id: "5",
      name: "Guarana Can",
      price: 6.0,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Product List</Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate("Cart")}
        >
          <View style={styles.dot}>
            <Text style={styles.dotText}>3</Text>
          </View>
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Product data={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingEnd: 14,
    paddingStart: 14,
  },
  cartContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  dot: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 12,
    position: "absolute",
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  list: {},
});

export default Home;
