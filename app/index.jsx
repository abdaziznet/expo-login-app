import { Text, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";
import { images } from "../constants";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) {
    return <Redirect href="/home" />;
  }
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          {/* <Text className="text-2xl font-bold text-center">Dashboard!</Text> */}
          <Image
            source={images.brdashboard}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <Text className="text-secondary text-2xl font-bold text-center">
            Selamat Datang,
          </Text>
          <Text className="text-secondary-100 text-sm font-regular text-center">
            Aplikasi ini dibuat untuk menghubungkan seluruh keluarga besar Bani
            Rasijan, agar kita dapat lebih mudah berinteraksi, berbagi cerita,
            dan menjaga tali silaturahmi.
          </Text>
          <CustomButton
            title="Daftar dengan email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
        <View className="w-full py-12 mt-7">
          <Text className="text-center text-gray-500 text-sm">
            © 2024 Bani Rasijan. All rights reserved.
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="light" className="bg-secondary" />
    </SafeAreaView>
  );
}
