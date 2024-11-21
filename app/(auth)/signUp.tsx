import { Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "~/components/ui/input";
import { FormFieldWrapper } from "~/customComponent/FormField";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";

export class signUp extends Component {
  render() {
    return (
      <SafeAreaView>
        <View className="flex  w-[90%] px-5  gap-2 mt-[50%]">
          <View className="flex justify-center items-center  mb-20">
            <Text className="text-2xl text-black-100">
              Create BookShare Account
            </Text>
          </View>
          <FormFieldWrapper label="Username">
            <Input
              placeholder="Type your Username"
              className="text-lg text-black-100 border border-gray-300 rounded-md  my-3 "
              //   style={styles.input}
              //   onChangeText={(e) => setFirstName(e)}
            />
          </FormFieldWrapper>
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
            onPress={() => router.push("/(auth)/signIn")}
          >
            <Text className="text-white">sign-up</Text>
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}

export default signUp;
