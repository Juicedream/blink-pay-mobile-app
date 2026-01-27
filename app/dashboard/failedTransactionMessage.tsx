import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppHeader from '@/components/shared/AppHeader'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import * as SecureStore from "expo-secure-store";
import { showAccountInfo } from '../api/singleTransfer'

interface DATA {
  msg: string;
  amount: number;
  receiver_name: string;
  receiver_acc_number: number;
}

const FailedTransactionMessage = () => {
  const router = useRouter();
  const [data, setData] = useState<DATA>();
  const date = new Date ();
  const todaysDate = date.toUTCString();
  useEffect(() => {
    async function getSavedData () {
      const token = await SecureStore.getItemAsync("jwt_token");
      let errorResponse = await SecureStore.getItemAsync("response");
      errorResponse = JSON.parse(errorResponse as any);
       let saved = await SecureStore.getItemAsync("saved");
       saved = JSON.parse(saved as any);
       const {receiver_acc_number, sender_pin, amount, narration} = saved as any;

       const response = await showAccountInfo(receiver_acc_number as any, token as any);
       let name = response.account_info.name;
       let updatedData = {
        ...saved as any,
        ...errorResponse as any,
        receiver_name: name,
        
       }
      setData(updatedData);
    }
    getSavedData()
  }, [])
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
        <Text className='text-center px-24 font-robotoRegular mt-4 text-gray-500 text-lg'>{data?.msg}</Text>
        <View className="mt-8 w-full px-6 py-10 bg-slate-100 flex-col gap-2 rounded-2xl">
            <View className='flex-row items-center justify-between'>
              <Text className='uppercase font-robotoBold'>Amount Attempted:</Text>
              <Text className='text-red-700 font-montserratBold text-2xl'>₦ {`${data?.amount.toLocaleString()}`}</Text>
            </View>
            <View className='flex-row items-center justify-between mt-8'>
              <Text className="font-robotoRegular text-md">Recipient:</Text>
              <View className='flex-row items-center gap-2'>
                <Ionicons name="person-circle" size={14} color="green" />
                <Text className='font-montserratSemiBold text-lg'>{data?.receiver_name}</Text>
              </View>
            </View>
            <View className='flex-row items-center justify-between mt-8'>
              <Text className="font-robotoRegular text-md">Source:</Text>
              <View className='flex-row items-center gap-2'>
                <Text className='font-montserratSemiBold text-lg'>Blink Savings {`(*${String(data?.receiver_acc_number).slice(6)})`}</Text>
              </View>
            </View>
            <View className='flex-row items-center justify-between mt-8'>
              <Text className="font-robotoRegular text-md">Date:</Text>
              <View className='flex-row items-center gap-2'>
                <Text className='font-montserratSemiBold text-lg'>{todaysDate}</Text>
              </View>
            </View>
        </View>
        <View className='mt-12 flex-col gap-8 w-full items-center'>
            <Pressable onPress={() => router.navigate('/dashboard/pin')}>
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