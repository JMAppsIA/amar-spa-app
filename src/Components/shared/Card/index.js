import React from 'react'
import { useTheme } from 'styled-components'
import Animated from "react-native-reanimated";
import { View, Text, Dimensions } from 'react-native'
import { McText, McImage } from 'Components'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Card = ({service, activeCardIndex, index, scrollX, navigation}) => {
  const {width} = Dimensions.get('screen')
  const theme = useTheme()
  const cardWidth = width / 1.8
  const inputRange = [
    (index - 1) * cardWidth,
    index * cardWidth,
    (index + 1) * cardWidth,
  ]
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.7, 0, 0.7],
  })
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.8, 1, 0.8],
  })
  return (
    <TouchableOpacity
      disabled={activeCardIndex != index}
      activeOpacity={1}
      onPress={()=> {
        navigation.navigate('Details', service)
      }}
    >
      <Animated.View 
      style={{
          height: 280,
          width: cardWidth,
          elevation: 15,
          marginRight: 20,
          borderRadius: 15,
          backgroundColor: theme.colors.white,
          transform:[{scale}]
      }}>
          <Animated.View style={{
            height: 280,
            backgroundColor: theme.colors.background,
            position: 'absolute',
            zIndex: 100,
            width: cardWidth,
            borderRadius: 15,
            opacity
          }}/>
          <View style={{
            height: 60,
            width: 80,
            backgroundColor: theme.colors.primaryBackground,
            position: 'absolute',
            zIndex: 1,
            right: 0,
            borderTopRightRadius: 15,
            borderBottomLeftRadius: 15,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <McText bold size={15} style={{ color: theme.colors.white }}>S/ {service.price}</McText>
          </View>
          <McImage source={service.image} style={{
            height: 200,
            width: '100%',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15
          }}/>
          <View style={{
            height: 100,
            borderRadius: 15,
            backgroundColor: theme.colors.background,
            position: 'absolute',
            bottom: 0,
            padding: 20,
            width: '100%'
          }}> 
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <View>
                <McText bold size={17} color={theme.colors.text1}>{service.name}</McText>
                <McText semi size={12} color={theme.colors.text1}>{service.description}</McText>
              </View>
              <Ionicons name='bookmark-outline' size={26} color={theme.colors.text1}/>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10
            }}>
              <View style={{
                flexDirection: 'row'
              }}>
                <AntDesign name='star' size={15} color={`orange`}/>
                <AntDesign name='star' size={15} color={`orange`}/>
                <AntDesign name='star' size={15} color={`orange`}/>
                <AntDesign name='star' size={15} color={`orange`}/>
                <AntDesign name='staro' size={15} color={`orange`}/>
              </View>
              <McText medium size={10} color={theme.colors.text1}>{service.treatmentHours} horas</McText>
            </View>
          </View>
      </Animated.View>
    </TouchableOpacity>
  )
};

export default Card;