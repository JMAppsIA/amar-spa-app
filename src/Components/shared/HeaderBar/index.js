import { View } from 'react-native'
import React from 'react'
import { McText } from 'Components'
import { useTheme } from 'styled-components'

const HeaderBar = ({title}) => {
  const theme = useTheme();
  return (
    <View style={{
        height: 100,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    }}>
      <McText bold size={30} color={theme.colors.text1}>{title}</McText>
    </View>
  )
}

export default HeaderBar