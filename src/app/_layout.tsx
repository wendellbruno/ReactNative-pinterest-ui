import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

//para garantir que vai carregar as fontes antes do app ser aberto por completo;
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (fontsLoaded) {
    //libera o app para ser carregado;
    SplashScreen.hideAsync();
  }

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle={"light-content"} />
      <Slot />
    </GestureHandlerRootView>
  );
}
