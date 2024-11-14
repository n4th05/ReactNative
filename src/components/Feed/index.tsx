import { FlatList, Image, Text, View } from "react-native"
import { feedAPI } from "../../Mock/Data"
import { styles } from "./style"

export const Feed = () => {
    return(
        <View style={styles.feed}>
        <FlatList
          style={styles.feedInstagram}
          data={feedAPI}
          keyExtractor={dados => dados.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.postagens}>
                <View style={styles.user}>
                    <Image style={styles.foto} source={item.fotoPerfil}></Image>
                <Text style={styles.nomeUsuario}>{item.name}</Text>
                </View>
                <View style={styles.ImageFeed}>
              <Image style={styles.imagePerfil} source={item.img} alt="Imagem do Feed" />
              </View>
              <View style={styles.comentarios}>
              <Text style={styles.nomeUsuario}>{item.name}</Text>
              <Text style={styles.descricao}>{item.descricao}</Text>
              </View>
            </View>
          )}
        />
      </View>
    )
}