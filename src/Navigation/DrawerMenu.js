import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { useTheme } from "styled-components/native";
import Animated from "react-native-reanimated";

import { McText, McImage } from "Components";
import { Images } from "Constants";
import { Home, Profile, Settings } from "Screens";

const menuOptions = [
  {
    name: "Home",
    label: "Inicio",
  },
  {
    name: "Profile",
    label: "Perfil",
  },
  {
    name: "Services",
    label: "Servicios",
  },
  {
    name: "Featured",
    label: "Destacados",
  },
  {
    name: "Reservation",
    label: "Mis Reservas",
  },
  {
    name: "Settings",
    label: "Configuración",
  },
  {
    name: "Help",
    label: "Ayuda",
  },
];

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation, theme }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      {/*Header START */}
      <View
        style={{
          width: 210,
          height: 107,
          borderBottomEndRadius: 107 / 2,
          backgroundColor: theme.colors.background,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: theme.colors.boxBackground,
              marginRight: 10,
              alignItems: "center",
            }}
          >
            <McImage
              style={{
                width: 40,
                height: 40,
              }}
              source={Images.profile}
            />
          </View>
          <View>
            <McText semi size={16} color={theme.colors.text1}>
              Carol Black
            </McText>
            <McText medium size={10} color={theme.colors.text2}>
              Seattle, Washington
            </McText>
          </View>
        </View>
      </View>
      {/* Header END */}

      {/* DrawerItems START */}
      <DrawerContentScrollView
        scrollEnabled={false}
        contentContainerStyle={{}}
        style={{ marginLeft: -18 }}
      >
        {menuOptions?.map((option, index) => {
          return (
            <DrawerItem
              activeTintColor={theme.colors.boxBackground}
              key={index}
              focused={activeIndex === index}
              onPress={() => {
                navigation.navigate(option.name);
                setActiveIndex(index);
              }}
              label={({ focused }) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 4,
                        height: 33,
                        marginRight: 26,
                        backgroundColor: focused
                          ? theme.colors.primary
                          : "transparent",
                      }}
                    ></View>
                    <McText size={16} bold={focused} color={theme.colors.text1}>
                      {option.label}
                    </McText>
                  </View>
                );
              }}
            ></DrawerItem>
          );
        })}
      </DrawerContentScrollView>
      {/* DrawerItems END */}

      {/* Footer START */}
      <View
        style={{
          marginBottom: 27,
          marginLeft: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <McImage
            source={Images.log_out}
            style={{
              tintColor: theme.colors.text2,
              marginRight: 8,
            }}
          />
          <McText bold size={16} color={theme.colors.text2}>
            Cerrar Sesión
          </McText>
        </View>
        <View style={{ marginTop: 62 }}>
          <McText medium size={10} color={theme.colors.text2}>
            Versión 1.0.0
          </McText>
        </View>
      </View>
      {/* Footer END */}
    </View>
  );
};

const DrawerMenu = () => {
  const theme = useTheme();
  const [progress, setProgress] = useState(new Animated.Value(0));

  /**
   * 3 ANIMATIONS
   */

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.75],
  });

  const rotate = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: ["0deg", "-10deg"],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 30],
  });

  const animatedStyle = {
    borderRadius,
    transform: [{ scale, rotateZ: rotate }],
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.boxBackground,
      }}
    >
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerHideStatusBarOnOpen: true,
          drawerStyle: {
            flex: 1,
            width: "60%",
            backgroundColor: "transparent",
          },
          drawerType: "slide",
          overlayColor: "transparent",
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
          hideStatusBar: true,
        }}
        initialRouteName="Home"
        drawerContent={(props) => {
          setTimeout(() => {
            setProgress(props.progress)
          }, 0);
          return (
            <CustomDrawerContent navigation={props.navigation} theme={theme} />
          );
        }}
      >
        <Drawer.Screen name="HomeScreen">
          {(props) => <Home {...props} animatedStyle={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name="ProfileScreen">
          {(props) => <Profile {...props} animatedStyle={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name="SettingsScreen">
          {(props) => <Settings {...props} animatedStyle={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerMenu;
