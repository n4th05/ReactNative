import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    backgroundColor: '#0B1014'
  },

  estiloTexto: {
    textAlign: "right",
    fontSize: 15,
    color: "#58CBFA",
  },

  nomeInstagram: {
      width: 250
  },

  compInput: {
    gap: 15,
    justifyContent:"center",
  },

  esqueceuSenha:{
    flex: 1,
    height: 15,
    textAlign: "right",
    width: "80%",
  },

  logoInstagram: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200
  },

  botaoEntrar: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 300,
    alignItems: "center",
    
  },
  
  fraseLogin: {
    alignItems: "center",
    color: "#fff",
    bottom: 60
  },

});