import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const activityBgColorMap = {
    debit: 'bg-red-600/20',
    credit: 'bg-green-600/20',
    other: 'bg-orange-600/20',
    
} as const;
const activityTextColorMap = {
    debit: 'text-red-600',
    credit: 'text-green-600',
    other: 'text-orange-600',
    
} as const;

type ActivityStatus = 'debit' | 'credit' | 'other';

type ActivityType = {
    iconName: string;
    label: string;
    purpose: string;
    amount: number; 
    status: ActivityStatus;
    iconColor: string;
}

const RecentActivity = ({...props}:ActivityType) => {
  return (
    <View className="flex-row bg-green-300/10 w-full px-4 py-4 rounded-full items-center justify-between">
      <View className="flex-row gap-4">
        <View className={`${activityBgColorMap[props.status as keyof typeof activityBgColorMap]} py-3 px-3 rounded-full`}>
          <Ionicons name={props.iconName as any} size={24} color={props.iconColor} />
        </View>
        <View className="flex-col justify-center">
          <Text className="font-montserratBold">{props.label}</Text>
          <Text className="font-montserratRegular text-sm text-gray-500">
            {props.purpose}
          </Text>
        </View>
      </View>
      <View>
        <Text className={`font-montserratBold ${activityTextColorMap[props.status as keyof typeof activityTextColorMap]} text-lg`}>
          {props.status === 'debit' ? `- ₦${props.amount.toLocaleString()}.00` : `+ ₦${props.amount.toLocaleString()}.00`}
        </Text>
      </View>
    </View>
  );
};

export default RecentActivity;
