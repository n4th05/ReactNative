import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Icon } from "react-native-elements";

export const Cabecalho = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Instagram</Text>

      <View style={styles.icons}>
        <TouchableOpacity style={styles.iconeButton}>
        <Icon name="heart" type="feather"  size={25} color={"#fff"}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconeButton}>
        <Icon name="chatbubble-ellipses-outline" type="ionicon" size={25} color={"#fff"}/>

        </TouchableOpacity>
      </View>
    </View>
  );
};


