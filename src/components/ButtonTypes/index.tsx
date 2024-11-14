import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type PropsButton = {
  title: string | number;
  propsBackgroundColor?: string;
}

function tiposGenericos<T>(args: T){
  return args;
}

export const ButtonTypes = ({title, propsBackgroundColor}: PropsButton) => {

  return (
    <TouchableOpacity
      activeOpacity={0.2}
      style={[styles.styleButton, 
        {
          backgroundColor: propsBackgroundColor ? propsBackgroundColor : "#000"
        }
      ]}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
