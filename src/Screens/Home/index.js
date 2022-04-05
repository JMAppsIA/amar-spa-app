import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import Animated from "react-native-reanimated";
import { useTheme } from "styled-components";
import { McText, McImage, Card } from "Components";
import { Images } from "Constants";
import { Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Categories, Services } from "Mock";

const Home = ({ animatedStyle }) => {
  const {width} = Dimensions.get('screen')
  const cardWidth = width / 1.8
  const theme = useTheme();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const CategoryList = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: 30,
        }}
      >
        {Categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View>
              <McText
                regular
                size={15}
                style={{
                  color:
                    selectedCategoryIndex === index
                      ? theme.colors.primary
                      : theme.colors.greyOutline,
                }}
              >
                {item}
              </McText>
              {selectedCategoryIndex === index && (
                <View
                  style={{
                    width: 30,
                    height: 3,
                    backgroundColor: theme.colors.primary,
                    marginTop: 5,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        position: "relative",
        ...animatedStyle,
      }}
    >
      <StatusBar hidden={true} />
      <View
        style={{
          marginTop: 75,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ paddingBottom: 15 }}>
          <McText bold size={25}>
            Estamos enfocados en tu cuidado personal
          </McText>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <McText medium size={20}>
              Echa un vistazo a nuestros procedimientos y obtén un{" "}
              <McText medium size={20} background>
                10%
              </McText>{" "}
              <McText medium size={20}>
                de descuento en tu primer servicio 🥳, así como una consulta
                gratis 👩‍⚕️
              </McText>
            </McText>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 50,
            backgroundColor: theme.colors.greyOutline,
            marginTop: 15,
            marginLeft: 20,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="search"
            size={30}
            style={{
              marginLeft: 20,
            }}
          />
          <TextInput
            placeholder="Buscar"
            style={{
              fontSize: 20,
              paddingLeft: 10,
            }}
          />
        </View>
        <CategoryList />
        <View>
          <Animated.FlatList
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true },
            )}
            data={Services}
            horizontal
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 20,
              paddingRight: cardWidth / 2 - 40
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Card service={item} index={index} scrollX={scrollX}/>
            )}
            snapToInterval={cardWidth}
          />
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default Home;
