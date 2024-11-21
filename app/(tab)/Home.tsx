import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormFieldWrapper } from "~/customComponent/FormField";
import { Input } from "~/components/ui/input";

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-center">Welcome to the Book Sharing App!</Text>
        <Text className="text-center text-sm text-muted-foreground">
          This is a simple book sharing app built with React Native.
        </Text>

        <FormFieldWrapper label="Search for books">
          <Input
            placeholder="Type your Search for books"
            className="text-lg text-black-100 border border-gray-300 rounded-md  my-3 "
            //   style={styles.input}
            //   onChangeText={(e) => setFirstName(e)}
          />
        </FormFieldWrapper>
      </View>
    </SafeAreaView>
  );
}
