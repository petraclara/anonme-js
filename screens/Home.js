import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../colors";
import { Entypo } from "@expo/vector-icons";
const catImageUrl =
  "data:image/png;base64,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";
const logo= require('../assets/logo.png')
const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <FontAwesome
          name="home"
          size={24}
          color={colors.primary}
          style={{ marginLeft: 15 }}
        />
      ),
      headerRight: () => (
        <Image
          source={logo}
          style={{
            width: 110,
            height: 40,
            marginRight: 15,
            // borderRadius: 100,
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View className="flex flex-col items-center justify-between h-full mt-2 p-3 gap-3">
      <View>
        <Text className="text-center text-2xl text-[#26646F] font-bold items-start">
          Dealing with depression and anxiety 
        </Text>
      </View>

      <View className="shadow-xl bg-gray-300 rounded-xl  p-4">
        <Text className="text-start text-2xl text-[#000] p-1 font-bold items-start">
          Depression Group
        </Text>
        <Text className="text-start text-xl text-[#000]  items-start">
          Depression can be serious so it’s better to talk about it as life...
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Text className="text-right font-bold text-[#26646F] text-lg">
            Join Now
          </Text>
        </TouchableOpacity>
      </View>
      <View className="shadow-xl bg-gray-300 rounded-xl  p-4">
        <Text className="text-start text-2xl text-[#000] p-1 font-bold items-start">
          Anxiety Group
        </Text>
        <Text className="text-start text-xl text-[#000]  items-start">
        Life is short and pretty difficult, especially when you go...        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Text className="text-right font-bold text-[#26646F] text-lg">
            Join Now
          </Text>
        </TouchableOpacity>
      </View>
      <View className="shadow-xl bg-gray-300 rounded-xl  p-4">
        <Text className="text-start text-2xl text-[#000] p-1 font-bold items-start">
          PTSD Group
        </Text>
        <Text className="text-start text-xl text-[#000]  items-start">
        Stress is bad.Trauma can be worse.We share stories here.......
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Text className="text-right font-bold text-[#26646F] text-lg">
            Join Now
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container} className="w-full">
        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
          style={styles.chatButton}
        >
          <Entypo name="chat" size={24} color={colors.lightGray} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    // backgroundColor: "#fff",
  },
  chatButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 50,
  },
});
