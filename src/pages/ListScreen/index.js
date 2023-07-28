import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native"; // Assuming you have imported the required components

export default () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Tela de Listar</Text>
      <Button
        title="Ir para Editar"
        onPress={() => navigation.navigate("EditNote")}
      />
    </View>
  );
};
