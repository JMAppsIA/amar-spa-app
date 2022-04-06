import React, {useEffect} from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { McText, McImage } from 'Components';
import Animated from 'react-native-reanimated';
import { useTheme } from 'styled-components';
import { useThemeContext } from 'Themes';
import { HeaderBar, Setting } from 'Components/shared';
import { Images } from 'Constants';

const SectionTitle = ({ theme, title }) => {
    return (
        <View style={{
            marginTop: 30
        }}>
            <McText semi size={12} color={theme.colors.text3}>{title}</McText>
        </View>        
    )
};


const Profile = () => {
    const theme = useTheme()
    const themeContext = useThemeContext()
    const isVerified = true;
    const paymentMethod = 'visa';
    useEffect(() => {
        StatusBar.setHidden(true, 'none');
      })

    return (
        <Animated.View
            style={{
                flex: 1,
                // justifyContent: 'center',
                // alignItems: 'center',
                backgroundColor: theme.colors.background,
                paddingHorizontal: 20
            }}
            >
            <HeaderBar title={`Perfil`}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20
                }}>
                    <View style={{flex: 1}}>
                        <McText semi color={theme.colors.text1}>dummyemail@emailto.com</McText>
                        <McText semi size={12} color={theme.colors.text3}>ID: 12354</McText>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <McImage source={isVerified? Images.verified : Images.notVerified} 
                        style={{
                            height: 25,
                            width: 25
                        }}/>
                        <McText size={15} bold style={{
                            marginLeft: 5
                        }} color={isVerified ? theme.colors.success:theme.colors.error}>{isVerified ? `Verificado` : `Falta verificar`}</McText>
                    </View>
                </View>
                <SectionTitle theme={theme} title={`Información Personal`}/>
                <Setting 
                    title='Foto'
                    source={Images.profile}
                    type='image'
                    showArrow
                    onPress={() => console.log('Pressed!') }
                />
                <Setting 
                    title='Nombres'
                    value='Donald'
                    type='button'
                    valueColor={theme.colors.text3}
                    showArrow
                    onPress={() => console.log('Pressed!') }
                />
                <Setting 
                    title='Apellidos'
                    value='Duck'
                    valueColor={theme.colors.text3}
                    type='button'
                    showArrow
                    onPress={() => console.log('Pressed!') }
                />
                <Setting 
                    title='Telefono'
                    value='+51 999 999 999'
                    valueColor={theme.colors.text3}
                    type='button'
                    showArrow
                    onPress={() => console.log('Pressed!') }
                />
                <Setting 
                    title='Correo'
                    value='dummyemail@emailto.com'
                    valueColor={theme.colors.text3}
                    type='button'
                    showArrow
                    onPress={() => console.log('Pressed!') }
                />
                <SectionTitle theme={theme} title={`Productos`}/>
                <Setting 
                    title='Cupón de descuento'
                    type='button'
                    value={`AMARSPA10`}
                    valueColor={theme.colors.text3}
                />
                <SectionTitle theme={theme} title={`APP`}/>
                <Setting 
                    title='Tema oscuro'
                    type='switch'
                    value={themeContext.mode === 'dark'}
                    onValueChange={(value) => {
                        themeContext.setMode(value? 'dark': 'light')
                    }}
                />
                <SectionTitle theme={theme} title={`Seguridad`}/>
                <Setting 
                    title='Face ID'
                    type='switch'
                    value={true}
                    onValueChange={() => console.log('yes')}
                />
                <Setting 
                    title='Número de Tarjeta'
                    value={'**** **** **** 1234'}
                    valueColor={theme.colors.text3}
                    type='button'
                    showArrow
                    onPress={() => console.log('Pressed!') }
                />
                <Setting 
                    title='Tipo de Tarjeta'
                    source={paymentMethod === 'visa' ? Images.visa : paymentMethod === 'master-card' ? Images.masterCard : Images.americanExpress }
                    type='image'
                    onPress={() => console.log('Pressed!') }
                />
            </ScrollView>
        </Animated.View>
    );
};

export default Profile;
