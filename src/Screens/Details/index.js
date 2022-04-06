import { Dimensions, ImageBackground, ScrollView, StatusBar, View } from 'react-native'
import React from 'react'
import { useTheme } from 'styled-components'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { McText } from 'Components'

const Details = ({navigation, route}) => {
  const {width} = Dimensions.get('screen')
  const { params } = route
  console.log('params -> ', params)
  const theme = useTheme()
  return (
    <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: theme.colors.background,
        paddingBottom: 20,
    }}>
      <StatusBar barStyle='light-content' translucent backgroundColor='rgba(0,0,0,0)'/>
      <ImageBackground 
      style={{
        height: 400,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        overflow: 'hidden'
      }}
      source={params.image}
      >
        <View style={{
          marginTop: 60,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
          justifyContent: 'space-between'
        }}>
          <Ionicons name='chevron-back-outline' size={28} color={theme.colors.background} onPress={navigation.goBack}/>
          <Ionicons name='bookmark-outline' size={28} color={theme.colors.background} onPress={navigation.goBack}/>
        </View>
      </ImageBackground>
      <View>
        <View style={{
          position: 'absolute',
          height: 60,
          width: 60,
          backgroundColor: theme.colors.primaryBackground,
          top: -30,
          right: 20,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Ionicons name='heart-outline' size={28} color={theme.colors.background}/>
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <McText bold size={20} color={theme.colors.text1}>{params.name}</McText>
          <McText semi size={12} color={theme.colors.text2} style={{marginTop: 5}}>{params.description}</McText>
          <View style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <AntDesign name='star' size={15} color={`orange`}/>
                <AntDesign name='star' size={15} color={`orange`}/>
                <AntDesign name='star' size={15} color={`orange`}/>
                <AntDesign name='star' size={15} color={`orange`}/>
                <AntDesign name='staro' size={15} color={`orange`}/>
              </View>
                <McText semi size={18} style={{marginLeft: 5}} color={theme.colors.text1}>4.0</McText>
            </View>
            <McText thinItalic size={13} color={theme.colors.text2}>{`Duración de ${params.treatmentHours} horas`}</McText>
          </View>
          <View style={{marginTop: 20}}>
            <McText regularItalic color={theme.colors.text2} style={{
              lineHeight: 20,
              textAlign: 'justify'
            }}>{params.details}</McText>
          </View>
        </View>
        <View style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            alignItems: 'center'
          }}>
            <McText bold size={20}>Precio del servicio</McText>
            <View style={{
              height: 40,
              alignItems: 'center',
              marginLeft: 40,
              paddingLeft: 20,
              flex: 1,
              backgroundColor: theme.colors.primaryBackground,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              flexDirection: 'row'
            }}>
              <McText thin size={13} color={theme.colors.text2} 
              style={{
                marginRight: 5, 
                textDecorationLine: 'line-through',
                textDecorationStyle: "solid",
                textDecorationColor: theme.colors.text2}}>{params.price + 20.10 }.00</McText>
              <McText regular size={15} color={theme.colors.text2}>PEN {params.price}</McText>
            </View>
        </View>
        <View style={{
          height: 55,
          width: width / 1.115,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 40,
          backgroundColor: theme.colors.primaryBackground,
          borderRadius: 10
        }}>
          <McText bold size={18} color={theme.colors.text1}>Reservar cita</McText>
        </View>
      </View>
    </ScrollView>
  )
}

export default Details