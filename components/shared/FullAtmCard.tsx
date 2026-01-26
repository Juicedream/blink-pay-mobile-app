import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const FullAtmCard = () => {
  return (
    <View className="mt-4 flex-col gap-3 w-full h-64 bg-green-950 rounded-xl py-6 px-8 shadow-black shadow-md">
          {/* first section */}
          <View className="flex-row items-center justify-between">
            <View className="flex-col">
              <Text className="text-white font-robotoRegular text-xl">Blink Pay</Text>
              <Text className="text-white font-montserratBold text-2xl">Virtual Card</Text>
            </View>
            <View className="bg-white rounded-full px-2 py-2 transform rotate-90">
              <Ionicons name="wifi" size={18} />
            </View>
          </View>
          {/* second part */}
          <View className="flex-row gap-6 mt-4">
            <Text className="text-white font-robotoBold text-4xl">1234</Text>
            <Text className="text-white font-robotoBold text-4xl">5678</Text>
            <Text className="text-white font-robotoBold text-4xl">9012</Text>
            <Text className="text-white font-robotoBold text-4xl">3456</Text>
          </View>
          {/* third part */}
          <View className="flex-row justify-between items-center mt-4">
            <View className="flex-row gap-8">
              <View className="flex-col">
                <Text className="text-white font-robotoRegular text-sm">EXPIRY</Text>
                <Text className="text-white font-robotoBold text-lg">12/28</Text>
              </View>
              <View className="flex-col">
                <Text className="text-white font-robotoRegular text-sm">CVV</Text>
                <Text className="text-white font-robotoBold text-lg">342</Text>
              </View>
            </View>
            <Image 
            source={require("../../assets/images/mastercard logo.jpeg")}
            className="w-14 h-10 bg-green-950 rounded-full"
            />
          </View>
        </View>
  )
}

export default FullAtmCard