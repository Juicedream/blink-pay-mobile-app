import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

type ActionsType = {
    backBtn: () => void;
    showSecondButton?: boolean;
    secondBtn?: () => void;
    secondBtnIcon?: string;
    headerName: string;
}

const AppHeader = ({
  showSecondButton = false, 
  headerName = "Transaction History", 
  backBtn,
  secondBtn,
  secondBtnIcon
}: ActionsType) => {
  return (
    <View className="flex-row items-center justify-between">
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={backBtn}
        className="p-1"
      >
        <Ionicons name="chevron-back-outline" size={32} />
      </TouchableOpacity>
      
      <Text className="text-xl font-montserratBold">
        {headerName}
      </Text>
      
      {showSecondButton && secondBtnIcon ? (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={secondBtn}
          className="p-1"
        >
          <Ionicons name={secondBtnIcon as any} size={32} />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 32 }} />
      )}
    </View>
  )
}

export default AppHeader