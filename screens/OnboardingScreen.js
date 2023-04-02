import { View, Text, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
const depressed =require("../assets/depressed.png");
const experts =require("../assets/experts.png");
const connect =require("../assets/connect.png");
const OnboardingScreen = () => {
  const navigation = useNavigation();

  const DotComponent = ({ selected }) => {
    return (
      <View
        className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${
          selected ? "border border-yellow-400" : ""
        }  p-2`}
      >
        <View
          className={`w-2 h-2 ${
            selected ? "bg-yellow-400" : "bg-yellow-200"
          } rounded-full`}
        ></View>
      </View>
    );
  };

  return (
    <Onboarding
      onSkip={() => navigation.navigate("Signup")}
      onDone={() => navigation.navigate("Signup")}
      DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: "#26646F",
          image: (
            <Image
              source={depressed}
              className="w-64 h-64 object-contain"
            />
          ),
          title: "We got you",
          subtitle:
            "Depressed or feeling a bit down, overwhelmed and anxious",
        },
        {
          backgroundColor: "#26646F",
          image: (
            <Image
              source={connect}
              className="w-64 h-64 object-contain"
            />
          ),
          title: "We care for you",
          subtitle:
            "Connect with people you can relate with and create a family! Listen, share your story and save a life today!",
        },
        {
          backgroundColor: "#26646F",
          image: (
            <Image
              source={experts}
              className="w-64 h-64 object-contain"
            />
          ),
          title: "We have experts",
          subtitle:
            "Get professional help!Connect with speciecialists in your area of problem!",
        },
      ]}
    />
  );
};

export default OnboardingScreen;