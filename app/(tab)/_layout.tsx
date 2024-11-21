import {
  View,
  Text,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

//   icon,
//   label,
//   accessibilityState,
//   onPress,
// }: TabButtonProps) => {
//   const focused = accessibilityState?.selected;
//   const color = focused ? "#000" : "#5B667A";

//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       className="flex-1 items-center justify-center"
//     >
//       <Image
//         source={icon}
//         resizeMode="contain"
//         className="w-6 h-6 mb-1"
//         tintColor={color}
//       />

//       <Text
//         style={{
//           color,
//           fontSize: 12,
//           fontFamily: focused ? "Manrope_700Bold" : "Manrope_400Regular",
//         }}
//       >
//         {label}
//       </Text>
//     </TouchableOpacity>
//   );
// };
const Tablayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Review"
        options={{
          title: "Review",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="pencil-square-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Chats"
        options={{
          title: "Chats",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="wechat" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="calendar" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Tablayout;
