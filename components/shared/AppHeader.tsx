import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

type ActionsType = {
    backBtn: () => void;
    showSecondButton: boolean;
    secondBtn: () => void;
    secondBtnIcon: string;
}

const AppHeader = ({showSecondButton=false, ...props}:ActionsType) => {
  return (
    <View className="flex-row items-center justify-between">
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            style={{ borderRadius: "50%", padding: 4 }}
            onPress={props.backBtn}
          >
            <Ionicons name="chevron-back-outline" size={32} />
          </TouchableHighlight>
          <Text className="text-xl font-montserratBold">
            Transaction History
          </Text>
         {
            showSecondButton && (
            <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            style={{ borderRadius: "50%", padding: 4 }}
            onPress={props.secondBtn}
          >
            <Ionicons name={props.secondBtnIcon as any} size={32} />
          </TouchableHighlight>
            )
         }
        </View>
  )
}

export default AppHeader