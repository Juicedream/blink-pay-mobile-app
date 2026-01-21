import { Stack } from "expo-router";
import {
  NativeTabs,
  Icon,
  Label,
  Badge,
} from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  // const appIconColor = "#2ECC71"; // success-green
  const appIconColor = "#002A61"; // dark-blue
  const tabData = [
    {
      label: "Home",
      icon: "house.fill",
      name: "index",
      hasBadge: false,
    },
    {
      label: "Cards",
      icon: "creditcard.fill",
      name: "cards",
      hasBadge: false,
    },
    {
      label: "History",
      icon: "timer.circle",
      name: "history",
      hasBadge: true,
      badgeNum: "9+"
    },
    {
      label: "Profile",
      icon: "person.fill",
      name: "profile",
      hasBadge: false,
    },
  ];
  return (
    <>
    <Stack.Screen options={{ headerShown: false}}/>
    <NativeTabs>
      {tabData.map((tab, index) => (
        <NativeTabs.Trigger key={index} name={tab.name} options={{ iconColor: appIconColor }}>
          <Label>{tab.label}</Label>
          {tab.hasBadge && <Badge>{tab.badgeNum}</Badge>}
          <Icon sf={tab.icon as any} drawable="custom_android_drawable" />
        </NativeTabs.Trigger>
      ))}
    </NativeTabs>
    </>
  
  );
}


