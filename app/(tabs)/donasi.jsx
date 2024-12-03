import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";

const Donasi = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <WebView
        source={{ uri: "https://saweria.co/abdaziz" }}
        className="flex-1"
      />
    </SafeAreaView>
  );
};

export default Donasi;
