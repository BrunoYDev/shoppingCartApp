import { StatusBar, StyleSheet, Text, View } from "react-native";
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import CartProvider from "./src/contexts/CartContext";

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
        <Routes />
      </CartProvider>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
