import { Stack } from "expo-router";

export default function DashboardLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="pin" options={{
          presentation: 'modal',
          webModalStyle: {
            width: '95vw',
            height: '95vh',
            border: 'none',
          },
          sheetAllowedDetents: 'fitToContents',
          
        }} /> */}
    </Stack>
  );
}
