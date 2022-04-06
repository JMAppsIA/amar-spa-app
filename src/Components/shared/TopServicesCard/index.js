import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from 'styled-components'
import { McText, McImage } from 'Components'
import { AntDesign } from '@expo/vector-icons'

const TopServicesCard = ({service}) => {
  const theme = useTheme();
  return (
    <View style={{
        height: 120,
        width: 120,
        backgroundColor: theme.colors.background,
        elevation: 15,
        marginHorizontal: 10,
        borderRadius: 10
    }}>
        <View style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            flexDirection: 'row'
        }}>
            <AntDesign name='star' size={15} color={`orange`}/>
            <McText bold size={14} color={theme.colors.white}>5.0</McText>
        </View>
        <McImage
        source={service.image} 
        style={{
            height: 80,
            width: '100%',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
        }}/>
        <View style={{
            paddingVertical: 5,
            paddingHorizontal: 10
        }}>
            <McText bold size={15} color={theme.colors.text1}>{service.name}</McText>
        </View>
    </View>
  )
}

export default TopServicesCard