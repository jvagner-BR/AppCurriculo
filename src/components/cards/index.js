import React from "react";
import {Text, View} from 'react-native';

import style from "./style";

const Card= ({Titulo}) =>{
    return (
        <View style={style.card_container}>
          <View style={style.card}>
          <Text >{Titulo}</Text>
          </View>
        </View>
    );
}