import { View, Text } from 'react-native'
import React from 'react'
import { Switch } from 'react-native-gesture-handler';

import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { McText, McImage } from 'Components'
import { useTheme } from 'styled-components'

const Setting = ({title, value, valueColor, type, onPress, onValueChange, source, showArrow}) => {
  const theme = useTheme()
  return (
        type == 'button' ? 
        (  
            <TouchableOpacity 
            style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
            onPress={onPress}
            >
                <McText semi size={14} color={theme.colors.text1}>{title}</McText>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <McText style={{
                        marginRight: 20
                    }} semi color={valueColor} size={14}>{value}</McText>
                    {showArrow && <Ionicons name='chevron-forward-outline' size={15} color={theme.colors.iconBackground}/> }
                </View>
            </TouchableOpacity>
        ) : type === 'switch' ? (
            <View style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center'
            }}>
                <McText style={{
                    flex: 1
                }} semi size={14} color={theme.colors.text1}>{title}</McText>
                <Switch 
                    value={value}
                    onValueChange={onValueChange}
                />
            </View>
        ) : (
            <View style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center'
            }}>
                <McText style={{
                    flex: 1
                }} semi size={14} color={theme.colors.text1}>{title}</McText>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <McImage
                        style={{
                            width: 40,
                            height: 40,
                        }}
                        source={source}
                    />
                    {showArrow && <Ionicons name='chevron-forward-outline' size={15} color={theme.colors.iconBackground}/> }
                </View>
            </View>
        )
  )
}

export default Setting