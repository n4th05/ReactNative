import { useState } from "react";
import { Image, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import nomeInstagram from '../Mock/images/nomeInstagram.jpg'
import { ButtonTypes } from "../components/ButtonTypes";
import { TextInputField } from "../components/TextInput";
import { styles } from "./style";

export const Login = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handlePassword = (value: string) => {
    setPassword(value);
  }

  const handleEmail = (value: string) => {
    setEmail(value);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
          <View style={styles.container}>
            <View  style={styles.logoInstagram}>
            <Image style={styles.nomeInstagram} source={nomeInstagram} alt="Nome do instagram"
            />
            </View>

            <View style={{ marginTop: 50 }} /> 

            <View style= {styles.compInput}> 

            <TextInputField
              placeHolder="Telefone, nome de usuário, e-mail"
              valueInput={email}
              hadleFunctionInput={handleEmail}
            />

            <TextInputField
              placeHolder="Senha"
              valueInput={password}
              hadleFunctionInput={handlePassword}
              typeInput={true}
            />
            </View>

            <View style={styles.esqueceuSenha}>
            <Text style={styles.estiloTexto}>Esqueceu a senha?</Text>
            </View>

            <View style={styles.botaoEntrar}>
            <ButtonTypes 
              title="Entrar" 
              propsBackgroundColor="#58CBFA"
              />
             
            </View>
            <Text style={styles.fraseLogin}>Não tem uma conta?<Text style={styles.estiloTexto}> Cadastre-se</Text></Text>

          </View>
    </TouchableWithoutFeedback>
  )
}