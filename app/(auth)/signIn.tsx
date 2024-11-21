import { Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormField, FormFieldWrapper } from "~/customComponent/FormField";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";

export class signIn extends Component {
  // const {}
  render() {
    return (
      <SafeAreaView>
        <View className="flex  w-[90%] px-5  gap-2 mt-[50%]">
          <View className="flex justify-center items-center  mb-20">
            <Text className="text-2xl text-black-100">Sign In BookShare</Text>
          </View>
          <FormFieldWrapper label="Email">
            <Input
              placeholder="Type your Email"
              className="text-lg text-black-100 border border-gray-300 rounded-md  my-3 "
              //   style={styles.input}
              //   onChangeText={(e) => setFirstName(e)}
            />
          </FormFieldWrapper>
          <FormFieldWrapper label="password">
            <Input
              placeholder="Type your password"
              secureTextEntry={true}
              className="text-lg text-black-100 border border-gray-300 rounded-md  my-3 "
              //   style={styles.input}
              //   onChangeText={(e) => setFirstName(e)}
            />
          </FormFieldWrapper>
          <Button
            size={"default"}
            variant={"default"}
            className=""
            onPress={() => router.push("/(tab)/Home")}
          >
            <Text className="text-white">sign-in</Text>
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}

export default signIn;
