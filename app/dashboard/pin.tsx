import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { OtpInput, OtpInputRef } from "react-native-otp-entry";
import { Ionicons } from "@expo/vector-icons";
import ToastManager, { Toast } from "toastify-react-native";
import { useRouter } from "expo-router";
import AppHeader from "@/components/shared/AppHeader";
import * as SecureStore from "expo-secure-store";
import { singleTransfer } from "../api/singleTransfer";

interface DataDto {
  receiver_acc_number: string;
  sender_pin: string;
  amount: string;
  narration: string;
}

const Pin = () => {
  const [pin, setPin] = useState("");
  const [showModal, setShowModal] = useState(false);
  let otpRef = useRef<OtpInputRef>(null);
  const router = useRouter();

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"];

  //   const onKeyPress = (key: string) => {
  //     if (!otpRef.current) return;

  //     if (key === "⌫") {
  //       setPin((prev) => {
  //         const updated = prev.slice(0, -1);
  //         otpRef.current?.setValue(updated);
  //         return updated;
  //       });
  //       return;
  //     }

  //     if (key === "" || pin.length >= 4) return;

  //     setPin((prev) => {
  //       const updated = prev + key;
  //       otpRef.current?.setValue(updated);
  //       return updated;
  //     });
  //   };
  const onKeyPress = (key: string) => {
    if (!otpRef.current) return;

    setPin((prev) => {
      if (key === "⌫") {
        const updated = prev.slice(0, -1);
        otpRef.current?.setValue(updated);
        return updated;
      }

      if (key === "" || prev.length >= 4) return prev;

      const updated = prev + key;
      otpRef.current?.setValue(updated);
      return updated;
    });
  };

  useEffect(() => {
    if (pin.length !== 4) return;

    setShowModal(true);

    async function sendMoney() {
      const token = await SecureStore.getItemAsync("jwt_token");
      let savedRaw = await SecureStore.getItemAsync("saved");
      let savedData = JSON.parse(savedRaw as any);
      const updatedData = {
        ...savedData,
        sender_pin: pin,
      };
      const {
            amount,
            receiver_acc_number,
            narration,
            sender_pin
        } = updatedData;
      console.log({datafromPin: updatedData});

      try {
        const response = await singleTransfer(receiver_acc_number, amount, narration, sender_pin, token as any);
        if (response.code >= 400 && response.code <= 500) {
          await SecureStore.setItem("response", JSON.stringify(response));
          setPin("");
          otpRef.current?.setValue("");
          setShowModal(false);
          router.navigate("/dashboard/failedTransactionMessage");
          return;
        }
        await SecureStore.setItem("response", JSON.stringify(response));
        setPin("");
        otpRef.current?.setValue("");
        setShowModal(false);
        router.navigate("/dashboard/successTransactionMessage");
      } catch (error) {
        console.log(error);
      } 
    }

    sendMoney();

  }, [pin]);

  return (
    <ScrollView contentContainerStyle={styles.container} className="relative">
      <View className="mb-48">
        <AppHeader backBtn={() => router.back()} headerName="Enter Pin" />
      </View>
      <OtpInput
        ref={otpRef}
        numberOfDigits={4}
        secureTextEntry
        focusColor="#16a34a"
        hideStick
        textInputProps={{
          editable: false, // 🔒 disable keyboard
        }}
      />

      <View style={styles.pad} className="h-1/2">
        {keys.map((key, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.key,
              key === "⌫" && styles.backspaceKey,
              key === "" && styles.emptyKey,
            ]}
            onPress={() => onKeyPress(key)}
            disabled={key === ""}
            activeOpacity={0.7}
          >
            {key === "⌫" ? (
              <Ionicons name="backspace-outline" size={26} color="#111" />
            ) : (
              <Text style={styles.keyText}>{key}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
      {/*  */}
      {showModal ? (
        <View className="bg-dark-blue absolute h-full w-screen flex items-center justify-center">
          <View className="bg-dark-blue px-12 py-12 rounded-xl flex-col gap-2">
            <ActivityIndicator size="large" />
            {/* <Text className="text-dark-blue font-robotoSemiBold text-xl">Sending...</Text> */}
          </View>
        </View>
      ) : null}
      <ToastManager />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
  },
  pad: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 40,
  },
  key: {
    width: "33.33%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    fontSize: 26,
    fontWeight: "500",
  },
  backspaceKey: {
    backgroundColor: "#f3f4f6",
    borderRadius: 35,
  },
  emptyKey: {
    backgroundColor: "transparent",
  },
});

export default Pin;
