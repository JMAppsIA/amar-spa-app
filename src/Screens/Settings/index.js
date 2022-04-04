import React from 'react';
import { View, Text } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useTheme } from 'styled-components';
import { McText } from '../../Components';
import { useThemeContext } from 'Themes';

const Settings = ({ animatedStyle }) => {
    const theme = useTheme()
    const themeContext = useThemeContext()
    return (
        <Animated.View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.background,
                ...animatedStyle
            }}
        >
            <McText bold size={24} color={theme.colors.text1}>Settings Screen</McText>
            <View style={{
                marginTop: 55,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <McText size={16} color={theme.colors.text1} style={{
                    marginRight: 10
                }}>Light</McText>
                <Switch
                    value={themeContext.mode === 'dark'}
                    onValueChange={(value) => {
                        themeContext.setMode(value? 'dark': 'light')
                    }}
                />
                <McText size={16} color={theme.colors.text1} style={{
                    marginLeft: 10
                }}>Dark</McText>
            </View>
        </Animated.View>
    );
};

export default Settings;
