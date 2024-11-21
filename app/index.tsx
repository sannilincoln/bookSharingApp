import * as React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";

export default function Screen() {
  const [progress, setProgress] = React.useState(78);

  return (
    <SafeAreaView>
      <View className="flex items-center justify-center mt-[70%] gap-5">
        <Text className="text-2xl ">Welcome to VDL Book Sharing App</Text>
        <Button
          size={"default"}
          variant={"default"}
          onPress={() => router.push("/(auth)/signUp")}
        >
          <Text>continue</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
