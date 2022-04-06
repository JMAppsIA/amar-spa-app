import React, {useEffect} from 'react'
import { View, StatusBar, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'

import { McText, McImage } from 'Components'
import { Images } from 'Constants'

const SignIn = ({ navigation }) => {
  const theme = useTheme();
  useEffect(() => {
    StatusBar.setHidden(true, 'none');
  })
  return (
    <View>
      <StatusBar hidden={true}/>
      <View style={{flexDirection: 'row'}}>
        <McImage source={Images.color_bar}/>
        <View style={{
            marginTop: 44,
            marginHorizontal: 26,
            marginBottom: 53,
            justifyContent: 'space-between'
        }}>
            <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <McText medium size={24} color={theme.colors.text1}>06:20 PM</McText>
                    <McImage source={Images.cloud} style={{marginLeft: 20}}/>
                    <McText semi size={13} color={theme.colors.text1} style={{marginLeft: 8}}>26º C</McText>
                </View>
                <McText medium size={13} color={theme.colors.text3} style={{marginTop: 7}}>04 de abril, 2022 | Lunes</McText>
            </View>
            <View>
                <McImage source={Images.logoOnly} style={{width: 120, height: 120}}/>
                <McText secondary size={28} color={theme.colors.text1} style ={{
                    marginTop:16
                }}>Amar SPA</McText>
                <View style={{
                    alignContent: 'space-between',
                    height: 110,
                    width: 189
                }}>
                    <McText medium size={14} color={theme.colors.text3} style={{
                        marginTop: 16, lineHeight: 22
                    }}>Consigue los mejores tratamientos con nosotr@s! 👩‍⚕️</McText>
                    <McText medium size={14} color={theme.colors.text3} style={{
                        marginTop: 16
                    }}>Registrate, es gratis!</McText>
                </View>
            </View>
            <View>
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Home')
                }}
                style={{
                    height: 50,
                    width: 190,
                    borderRadius: 10,
                    backgroundColor: theme.colors.primary,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <McText medium size={16} color={theme.colors.text1}>Ingresar</McText>
                    <McImage source={Images.right_arrow} style={{marginLeft: 8}}/>
                </TouchableOpacity>
                <View style={{alignItems: 'center', marginTop: 30}}>
                    <McText size={16} color={theme.colors.text1}>Crear una cuenta</McText>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default SignIn