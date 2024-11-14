import React from 'react';
import { styles } from './style';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

export const Rodape = () => {
    return (
        <View style={styles.icons}>
        <TouchableOpacity style={styles.iconeButton}>
        <Icon name="home" type="foundation" size={30} color={"#fff"}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconeButton}>
        <Icon style={styles.icone} name="search" type="feather" size={25} color={"#fff"}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconeButton}>
        <Icon style={styles.icone} name="plus-square" type="feather" size={25} color={"#fff"}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconeButton}>
        <Icon style={styles.icone} name="movie-outline" type="material-community" size={30} color={"#fff"}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconeButton}>
        <Icon style={styles.icone} name="person-circle-outline" type="ionicon" size={30} color={"#fff"}/>
        </TouchableOpacity>
        
        </View>

    )
}