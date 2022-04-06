import React, {useEffect} from 'react';
import { View, Text, StatusBar } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTheme } from 'styled-components';

const Services = () => {
    const theme = useTheme()
    useEffect(() => {
        StatusBar.setHidden(true, 'none');
      })
    return (
        <Animated.View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.background,
            }}
        >
            <Text>Services Screen</Text>
        </Animated.View>
    );
};

export default Services;
