import React, { useRef, useState } from "react";
import { StatusBar, View,  TextInput, FlatList } from "react-native";
import Animated from "react-native-reanimated";
import { useTheme } from "styled-components";
import { McText, McImage } from "Components";
import { Images } from "Constants";
import { Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Categories, Services } from "Mock";
import { TopServicesCard, Card } from "Components/shared";
import { useEffect } from "react";

const Home = ({ navigation }) => {
  useEffect(() => {
    StatusBar.setHidden(true, 'none');
  })
  const {width} = Dimensions.get('screen')
  const cardWidth = width / 1.8
  const theme = useTheme();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
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
                      ? theme.colors.primaryBackground
                      : theme.colors.text1,
                }}
              >
                {item}
              </McText>
              {selectedCategoryIndex === index && (
                <View
                  style={{
                    width: 30,
                    height: 3,
                    backgroundColor: theme.colors.primaryBackground,
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
      }}
    >
      {/* <StatusBar hidden={true} /> */}
      <View
        style={{
          marginTop: 75,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ paddingBottom: 15 }}>
          <McImage source={Images.logoOnly} style={{
            width: 50,
            height: 50
          }}/>
          <McText bold size={25} color={theme.colors.text1}>
            Estamos enfocados en tu cuidado personal
          </McText>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <McText medium size={20} color={theme.colors.text1}>
              Echa un vistazo a nuestros procedimientos y obtén un{" "}
              <View style={{
                backgroundColor: '#B8E8D1',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                
              }}>
                <McText medium size={20} color={theme.colors.text1}>
                {" "}10%{" "}
                </McText>
              </View>
              {" "}
              <McText medium size={20} color={theme.colors.text1}>
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
            backgroundColor: theme.colors.boxBackground,
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
            color={theme.colors.text1}
          />
          <TextInput
            placeholder="Buscar"
            placeholderTextColor={theme.colors.text1}
            style={{
              fontSize: 20,
              paddingLeft: 10,
            }}
            color={theme.colors.text1}
          />
        </View>
        <CategoryList />
        <View>
          <Animated.FlatList
          onMomentumScrollEnd={(e) => {
            setActiveCardIndex(Math.round(e.nativeEvent.contentOffset.x/cardWidth))
          }}
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
              <Card service={item} index={index} activeCardIndex={activeCardIndex} scrollX={scrollX} navigation={navigation}/>
            )}
            snapToInterval={cardWidth}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20
        }}>
          <McText size={12} color={theme.colors.text1}>Procedimientos destacados</McText>
          <McText size={12} color={theme.colors.text1}>Mostrar todos</McText>
        </View>
        <FlatList 
          data={Services}
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 20
          }}
          renderItem={({item})=><TopServicesCard service={item}/>}
        />
      </ScrollView>
    </Animated.View>
  );
};

export default Home;
