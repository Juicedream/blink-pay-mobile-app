import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import AppHeader from '@/components/shared/AppHeader'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const FailedTransactionMessage = () => {
  const router = useRouter();
  return (
    <ScrollView centerContent>
     <AppHeader backBtn={() => router.navigate('/dashboard/transfer')} headerName="Transaction Status" />
      <View className="flex-col items-center mt-6 bg-dark-blue py-6 px-6 h-full">
        <View className='bg-red-300/40 px-6 py-6 rounded-full'>
            <View className='px-4 py-4 rounded-full bg-red-700'>
                <Ionicons name="alert-circle-outline" size={52} color={"white"} />
            </View>
        </View>
        <Text className='mt-4 text-white font-montserratBold text-3xl'>Transfer Failed</Text>
        <Text className='text-center px-24 font-robotoRegular mt-4 text-gray-500 text-lg'>The transaction couldn't be completed due to insufficient funds in your linked account.</Text>
        <View className="mt-8 w-full px-6 py-10 bg-slate-100 flex-col gap-2 rounded-2xl">
            <View className='flex-row items-center justify-between'>
              <Text className='uppercase font-robotoBold'>Amount Attempted:</Text>
              <Text className='text-red-700 font-montserratBold text-2xl'>₦ 192,222,210.00</Text>
            </View>
            <View className='flex-row items-center justify-between mt-8'>
              <Text className="font-robotoRegular text-md">Recipient:</Text>
              <View className='flex-row items-center gap-2'>
                <Ionicons name="person-circle" size={14} color="green" />
                <Text className='font-montserratSemiBold text-lg'>Eloho Igbi</Text>
              </View>
            </View>
            <View className='flex-row items-center justify-between mt-8'>
              <Text className="font-robotoRegular text-md">Source:</Text>
              <View className='flex-row items-center gap-2'>
                <Text className='font-montserratSemiBold text-lg'>Blink Savings (*8821)</Text>
              </View>
            </View>
            <View className='flex-row items-center justify-between mt-8'>
              <Text className="font-robotoRegular text-md">Date:</Text>
              <View className='flex-row items-center gap-2'>
                <Text className='font-montserratSemiBold text-lg'>Jan 24, 2026 10:15 AM</Text>
              </View>
            </View>
        </View>
        <View className='mt-12 flex-col gap-8 w-full items-center'>
            <Pressable onPress={() => router.navigate('/dashboard/transfer')}>
              <View className='flex-row gap-2 bg-green-700/80 w-full px-40 py-6 items-center rounded-full shadow-white shadow-xl'>
              <Ionicons name="refresh" size={18} color={"white"}/>
              <Text className='text-white font-robotoSemiBold text-xl'>Try Again</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => router.navigate('/(tabs)')}>
              <View className='flex-row gap-2 bg-white w-full px-36 py-6 items-center rounded-full shadow-white shadow-xl'>
              <Ionicons name="home" size={18} color={"green"}/>
              <Text className='text-green-700 font-robotoSemiBold text-xl'>Back to Home</Text>
              </View>
            </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

export default FailedTransactionMessage