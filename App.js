import React from 'react';
import { View, TextInput } from 'react-native';

function Principal(){
  
  

  return(
    <View style={{height: "100%", alignItems: "center", justifyContent: "center"}}>
      <TextInput style={{borderColor:"#000000", borderWidth:1, width: "30%", marginTop:"10px", padding:"10px"}} placeholder="Nome do pet" />
      <TextInput style={{borderColor:"#000000", borderWidth:1, width: "30%", marginTop:"10px", padding:"10px"}} placeholder="Raça" />
      <TextInput style={{borderColor:"#000000", borderWidth:1, width: "30%", marginTop:"10px", padding:"10px"}} placeholder="Peso" />
      <TextInput style={{borderColor:"#000000", borderWidth:1, width: "30%", marginTop:"10px", padding:"10px"}} placeholder="Nascimento" />
      <TextInput style={{borderColor:"#000000", borderWidth:1, width: "30%", marginTop:"10px", padding:"10px"}} placeholder="Nome do dono" />
    </View>
  )
}

export default Principal;