import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import AppHeader from "@/components/shared/AppHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import CurrencyInput from "react-native-currency-input";

export default function Transfer() {
  const [activeTab, setActiveTab] = useState<"blink" | "other">("blink");
  const [accountNumber, setAccountNumber] = useState(null);
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState(0.0);
  const [showFoundIcon, setShowFoundIcon] = useState(false);

  const router = useRouter();
  const accountNumberTyping = (number: any) => setAccountNumber(number);
  const noteTyping = (noteText: any) => setNote(noteText);

  const handleShowIcon = () => {
    if (String(accountNumber).length === 10) {
      setShowFoundIcon(true);
    } else {
      setShowFoundIcon(false);
    }
  };

  console.log({ accountNumber, amount, note });

  useEffect(() => {
    handleShowIcon();
  }, [accountNumber]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {/* Header */}
        <AppHeader backBtn={() => router.back()} headerName="Transfer Money" />

        {/* transfer to tabs */}
        <View className="mt-6 bg-slate-200 flex-row justify-between items-center rounded-full">
          <Pressable onPress={() => setActiveTab("blink")}>
            <View
              style={[styles.tab, activeTab === "blink" && styles.activeTab]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "blink" && styles.activeTabText,
                ]}
              >
                Blink to Blink
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => setActiveTab("other")}>
            <View
              style={[styles.tab2, activeTab === "other" && styles.activeTab2]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "other" && styles.activeTabText,
                ]}
              >
                Other Banks
              </Text>
            </View>
          </Pressable>
        </View>

        {/* Tab Content */}
        <View className="mt-6">
          {activeTab === "blink" ? (
            <View className="flex-col">
              {/* account number */}
              <View className="w-full flex-col bg-white rounded-3xl py-6 px-6 mb-5 shadow-black shadow-sm">
                <View className="flex-col gap-2">
                  <Text className="font-montserratSemiBold">
                    Account Number
                  </Text>
                  <View className="relative">
                    <TextInput
                      autoFocus
                      keyboardType="numeric"
                      maxLength={10}
                      value={accountNumber as any}
                      onChangeText={accountNumberTyping}
                      className="py-4 px-6 w-full rounded-full border border-slate-300 text-2xl font-montserratSemiBold"
                    />
                    {showFoundIcon && (
                      <Ionicons
                        name="checkmark-circle-outline"
                        size={25}
                        color={"green"}
                        className="absolute right-4 top-[25%]"
                      />
                    )}
                  </View>
                  {showFoundIcon && (
                    <View className="flex-row items-center mt-2">
                      <Ionicons
                        name="radio-button-on-outline"
                        size={15}
                        color={"green"}
                      />
                      <Text className="text-dark-blue font-montserratSemiBold">
                        {" "}
                        Recipient: JAMES ADEDOYIN
                      </Text>
                    </View>
                  )}
                </View>
              </View>
              {/* Amount */}
              <View className="w-full flex-col bg-white rounded-3xl py-6 px-6 mb-5 shadow-black shadow-sm">
                <View className="flex-col gap-2">
                  <Text className="font-montserratSemiBold">Amount</Text>
                  <View className="relative">
                    <CurrencyInput
                      className="py-6 px-6 w-full rounded-full border border-slate-300 text-3xl font-montserratSemiBold"
                      value={amount}
                      onChangeValue={setAmount as any}
                      keyboardType="numeric"
                      prefix="₦ "
                      delimiter=","
                      separator="."
                      precision={2}
                      minValue={0}
                    />
                  </View>
                  <View className="flex-row items-center mt-2">
                    <Text className="text-gray-400 font-robotoRegular">
                      Daily Limit: ₦1,000,000.00
                    </Text>
                  </View>
                </View>
              </View>
              {/* transaction note */}
              <View className="w-full flex-col bg-white rounded-3xl py-6 px-6 mb-5 shadow-black shadow-sm">
                <View className="flex-col gap-2">
                  <Text className="font-montserratSemiBold">
                    Transaction Note (Optional)
                  </Text>
                  <View className="relative">
                    <TextInput
                      maxLength={10}
                      value={note as any}
                      onChangeText={noteTyping}
                      className="py-4 px-6 w-full rounded-full border border-slate-300 text-2xl font-montserratSemiBold"
                    />
                  </View>
                </View>
              </View>
              {/* continue Button */}
              <Pressable onPress={() => router.push("/dashboard/pin")} className="bg-dark-blue rounded-full py-6 px-6 mt-20">
                <View className="flex-row gap-2 items-center justify-center">
                  <Text className="text-white font-montserratSemiBold text-xl">
                    Continue
                  </Text>
                  <Ionicons name="arrow-forward" size={20} color="white" />
                </View>
              </Pressable>
            </View>
          ) : (
            <View className="py-6 w-full items-center justify-center bg-blue-700/10 rounded-xl">
              <Text className="text-2xl font-montserratBold">
                Coming Soon🎉
              </Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 90,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  tab: {
    paddingVertical: 16,
    paddingHorizontal: 50,
  },
  tab2: {
    paddingVertical: 16,
    paddingHorizontal: 50,
  },
  activeTab: {
    backgroundColor: "white",
    marginHorizontal: 4,
    marginVertical: 4,
    borderRadius: 9999,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activeTab2: {
    backgroundColor: "white",
    marginRight: 4,
    marginVertical: 4,
    borderRadius: 9999,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    fontFamily: "montserratSemiBold",
    color: "#4b5563",
  },
  activeTabText: {
    color: "#166534",
  },
});
