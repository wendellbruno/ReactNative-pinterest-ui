import { useRef } from "react";
import { Tabs } from "expo-router";
import { Foundation, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Avatar, Menu } from "@/components";
import { View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";


export default function TabLayout() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);
  return (
    <View style={{flex: 1}}>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.gray[600],
        tabBarStyle: { 
            backgroundColor: theme.colors.black, 
            borderTopColor: theme.colors.black
        },
        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Foundation name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
        <Tabs.Screen
        name="Menu"
        listeners={() => ({
          tabPress: (event) => {
            event.preventDefault();
            handleBottomSheetOpen();
          }
        })}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="plus" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Message"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="chatbubble-ellipses" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({focused}) => 
            <Avatar 
            selected = {focused}
            source={{ uri: "https://github.com/wendellbruno.png"}}
            />
        }}
      />
    </Tabs>
    <Menu ref={bottomSheetRef} onClose={handleBottomSheetClose } />
    </View>

  );
}
