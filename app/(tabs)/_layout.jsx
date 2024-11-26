import { View, Text, Image } from "react-native";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-10 h-10"
      />
      {/* <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text> */}
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#d91c5e",
          tabBarInactiveTintColor: "#7b7b8b",
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 16,
            right: 16,
            height: 60,
            elevation: 0,
            backgroundColor: "white",
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 5,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="hierarchy"
          options={{
            title: "Hierarchy",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View className="items-center justify-center h-20 w-20 rounded-full bg-third">
                <TabIcon
                  icon={icons.hierarchy}
                  color="white"
                  name="Hierarchy"
                  focused={focused}
                />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
