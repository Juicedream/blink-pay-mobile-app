import { Link, useRouter } from "expo-router";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import ToastManager, { Toast } from "toastify-react-native";
import { loginApi } from "./api/login";
import * as SecureStore from "expo-secure-store";

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [loginData, setLoginData] = useState({
  //   email: email,
  //   password,
  // })
  const router = useRouter();
  const goToDashboard = () => {
    router.navigate("/(tabs)");
  }
  useEffect(() => {
    async function checkIfLoggedIn (){
      // await SecureStore.deleteItemAsync("get_started");
      const token = await SecureStore.getItemAsync("jwt_token");
      if (token) {
        router.navigate("/(tabs)");
      }
    }
    checkIfLoggedIn()
  }, [])
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      if (!email || !password) {
      Toast.error("All fields are required");
      return
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)) {
      Toast.error("Not a valid email address");
      return
    }
    if (password.length < 6) {
      Toast.error("Invalid credentials")
      return
    }
    // login handling
    const loginData = await loginApi(email.toLowerCase(), password);
     if (loginData.code >= 400 && loginData.code <= 500) {
      Toast.error(loginData.msg);
      return;
     } 
     await SecureStore.setItemAsync("jwt_token", loginData.token);
     router.push("/(tabs)")
     Toast.success(loginData.msg);
    } catch (error) {
      console.log(error);
      return;
    }finally {
      setIsLoading(false);
      // setEmail("");
      // setPassword("");
    }
  }
  return (
    <ScrollView centerContent>
      <View className="flex-1 w-full h-full items-center mt-10">
        <View className="bg-dark-blue p-3 rounded-2xl shadow-black shadow-md">
          <Ionicons name="flash-sharp" size={52} color="white" />
        </View>
        <View className="flex-row items-center mt-6">
          <Text className="font-robotoSemiBold text-5xl">Blink </Text>
          <Text className="font-robotoBold text-5xl text-blue-500">Pay</Text>
        </View>
        <View className="mt-5 justify-center w-[60%]">
          <Text className="text-center text-xl font-robotoRegular text-gray-400">
            Fast Secure and Seamless
          </Text>
          <View className="w-full flex flex-col mt-12 gap-1 justify-center">
            <Text className="font-robotoSemiBold px-2">Email</Text>
            <TextInput
              placeholder="e.g JohnDoe@gmail.com"
              className="border border-slate-300 px-4 py-3 rounded-full shadow-sm bg-white"
              autoFocus
              keyboardType="email-address"
              value={email}
              onChangeText={(value) => setEmail(value as any)}
              
            />
            <View className="relative">
              <Text className="font-robotoSemiBold px-2 mt-4">Password</Text>
              <TextInput
                placeholder="••••••••••••••••"
                className="border border-slate-300 px-4 py-3 rounded-full shadow-sm bg-white"
                secureTextEntry={showPassword}
                value={password}
                onChangeText={(value) => setPassword(value as any)}
              />
              <Pressable
                className="absolute right-3 top-[52%]"
                onPress={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <Ionicons name="eye-off" size={22} color={"gray"} />
                ) : (
                  <Ionicons name="eye" size={22} color={"gray"} />
                )}
              </Pressable>
            </View>
            <Link href="/forgotPassword" className="text-right mt-2">
              <Text className="text-blue-500 font-montserratBold">
                Forgot Password?
              </Text>
            </Link>
          </View>
        </View>
        <View className="mt-12 bg-dark-blue w-[60%] py-4 px-2 rounded-full">
          <Pressable
            onPress={handleLogin}
            className="flex-row items-center justify-center gap-2"
            disabled={isLoading}
          >
            {!isLoading ? (
              <>
              <Text className="text-center text-gray-100 font-montserratBold text-xl">
              Login
            </Text>
            <Ionicons name="arrow-forward-outline" size={24} color="white" />
              </>
            ):
            (
              <ActivityIndicator size={32}/>
            )
          }
          </Pressable>
        </View>
        <View className="flex-row mt-6">
          <Text className="font-montserratRegular text-gray-800">
            Don't have an account?{" "}
          </Text>
          <Link href="/register">
            <Text className="text-blue-500 font-robotoSemiBold">Register</Text>
          </Link>
        </View>
      </View>
      <ToastManager />
    </ScrollView>
  );
}
