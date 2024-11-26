import { View, Text, RefreshControl, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../context/GlobalProvider";
import { images } from "../../constants";
const Home = () => {
  const { user } = useGlobalContext();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  return (
    <SafeAreaView className=" h-full">
      <View className="my-6 px-4 space-y-6">
        <View className="justify-between items-start flex-row mb-6">
          <View>
            <Text className="font-pmedium text-sm text-gray-100">
              Welcome back,
            </Text>
            <Text className="text-2xl font-psemibold text-black-100">
              {user?.username}
            </Text>
          </View>
          <View className="mt-1.5">
            <Image
              source={images.logo}
              className="w-9 h-10"
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      refreshControl=
      {<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    </SafeAreaView>
  );
};

export default Home;
