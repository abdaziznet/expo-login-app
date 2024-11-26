import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import "../global.css";
import GlobalProvider from "../context/GlobalProvider";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "FiraSans-Black": require("../assets/fonts/FiraSans-Black.ttf"),
    "FiraSans-BlackItalic": require("../assets/fonts/FiraSans-BlackItalic.ttf"),
    "FiraSans-Bold": require("../assets/fonts/FiraSans-Bold.ttf"),
    "FiraSans-BoldItalic": require("../assets/fonts/FiraSans-BoldItalic.ttf"),
    "FiraSans-ExtraBold": require("../assets/fonts/FiraSans-ExtraBold.ttf"),
    "FiraSans-ExtraBoldItalic": require("../assets/fonts/FiraSans-ExtraBoldItalic.ttf"),
    "FiraSans-ExtraLight": require("../assets/fonts/FiraSans-ExtraLight.ttf"),
    "FiraSans-ExtraLightItalic": require("../assets/fonts/FiraSans-ExtraLightItalic.ttf"),
    "FiraSans-Italic": require("../assets/fonts/FiraSans-Italic.ttf"),
    "FiraSans-Light": require("../assets/fonts/FiraSans-Light.ttf"),
    "FiraSans-LightItalic": require("../assets/fonts/FiraSans-LightItalic.ttf"),
    "FiraSans-Medium": require("../assets/fonts/FiraSans-Medium.ttf"),
    "FiraSans-MediumItalic": require("../assets/fonts/FiraSans-MediumItalic.ttf"),
    "FiraSans-Regular": require("../assets/fonts/FiraSans-Regular.ttf"),
    "FiraSans-SemiBold": require("../assets/fonts/FiraSans-SemiBold.ttf"),
    "FiraSans-SemiBoldItalic": require("../assets/fonts/FiraSans-SemiBoldItalic.ttf"),
    "FiraSans-Thin": require("../assets/fonts/FiraSans-Thin.ttf"),
    "FiraSans-ThinItalic": require("../assets/fonts/FiraSans-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
};

export default RootLayout;
