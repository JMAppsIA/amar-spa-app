import { DefaultTheme } from '@react-navigation/native';
const Light = {
    dark: false,
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#FFFFFF',
        white: '#ffffff',
        black: '#000000',
        primary: '#22818B',
        secondary: '#F1F3F6',
        grey: '#9d9fa3',
        success: '#38C2B7',
        error: '#E14161',
        text1: '#1B1D28',
        text2: '#3A4276',
        text3: '#32463D',
        boxBackground: '#F1F3F6',
        primaryBackground: '#B8E8D1'
    },
};

export default Light;
