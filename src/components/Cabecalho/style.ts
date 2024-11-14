import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

        headerContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#333',
          backgroundColor: '#0B1014',
          marginTop: 50
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
          color: '#fff',
        },
        icons: {
          flexDirection: 'row',
        },
        iconeButton: {
          marginLeft: 15,
        }
})