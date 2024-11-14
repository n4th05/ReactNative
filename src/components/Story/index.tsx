import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./style";
import { storyAPI } from "../../Mock/Data";

export const Story =()=> {
    return (
        <View style={styles.component}>
        <FlatList
        horizontal={true}
        data={storyAPI}
        keyExtractor={dados => dados.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image style={styles.perfil} source={item.image} alt="Imagem do perfil" />
            <Text style={styles.username}>{item.name}</Text>
          </View>
        )}
      />
        </View>
    )
}