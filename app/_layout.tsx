import { Stack } from "expo-router";
import "../global.css";
import {useFonts} from "expo-font";
import { ActivityIndicator } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'robotoRegular': require('../assets/fonts/Roboto-Regular.ttf'),
    'robotoSemiBold': require('../assets/fonts/Roboto-SemiBold.ttf'),
    'robotoBold': require('../assets/fonts/Roboto_Condensed-Bold.ttf'),
    'montserratRegular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'montserratBold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'montserratSemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />
  }
  return <Stack />;
}
