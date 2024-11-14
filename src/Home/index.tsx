import { View } from "react-native";
import { styles } from "./style";
import { Story } from "../components/Story";
import { Feed } from "../components/Feed";
import { Cabecalho } from "../components/Cabecalho";
import { Rodape } from "../components/Rodape";


export const Home = () => {
  return (
    <View style={styles.component}>
     <Cabecalho/>
      <Story/>
      <Feed/>
      <Rodape/>
    </View>
  );
};
