import {Button,StyleSheet,Text,View} from "react-native";
import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {MainStackParamList} from "../types/navigation";

const Home = ({navigation}: NativeStackScreenProps<MainStackParamList>) => {
    return(
        <View>
            <Text>Home</Text>
            <Text>Ice!</Text>
        </View>
    );
};

export default Home;

