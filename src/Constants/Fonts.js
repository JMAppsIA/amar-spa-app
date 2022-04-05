/**
 * Following fonts will be loaded and cached in async while <AppLoading/>
 * Detail please check src/root.js
 */
 const customFonts = {
    'SFProDisplay-Black': require('Assets/fonts/SFProDisplay-Black.ttf'),
    'SFProDisplay-BlackItalic': require('Assets/fonts/SFProDisplay-BlackItalic.ttf'),
    'SFProDisplay-Bold': require('Assets/fonts/SFProDisplay-Bold.ttf'),
    'SFProDisplay-BoldItalic': require('Assets/fonts/SFProDisplay-BoldItalic.ttf'),
    'SFProDisplay-Heavy': require('Assets/fonts/SFProDisplay-Heavy.ttf'),
    'SFProDisplay-HeavyItalic': require('Assets/fonts/SFProDisplay-HeavyItalic.ttf'),
    'SFProDisplay-Light': require('Assets/fonts/SFProDisplay-Light.ttf'),
    'SFProDisplay-LightItalic': require('Assets/fonts/SFProDisplay-LightItalic.ttf'),
    'SFProDisplay-Medium': require('Assets/fonts/SFProDisplay-Medium.ttf'),
    'SFProDisplay-MediumItalic': require('Assets/fonts/SFProDisplay-MediumItalic.ttf'),
    'SFProDisplay-Regular': require('Assets/fonts/SFProDisplay-Regular.ttf'),
    'SFProDisplay-RegularItalic': require('Assets/fonts/SFProDisplay-Light.ttf'),
    'SFProDisplay-Semibold': require('Assets/fonts/SFProDisplay-Semibold.ttf'),
    'SFProDisplay-SemiboldItalic': require('Assets/fonts/SFProDisplay-SemiboldItalic.ttf'),
    'SFProDisplay-Thin': require('Assets/fonts/SFProDisplay-Thin.ttf'),
    'SFProDisplay-ThinItalic': require('Assets/fonts/SFProDisplay-ThinItalic.ttf'),
    'SFProDisplay-Ultralight': require('Assets/fonts/SFProDisplay-Ultralight.ttf'),
    'SFProDisplay-UltralightItalic': require('Assets/fonts/SFProDisplay-UltralightItalic.ttf')
};
const type = {
    primary: 'SFProDisplay-Regular',
    secondary: 'SFProDisplay-Medium',
    medium: 'SFProDisplay-Medium',
    bold: 'SFProDisplay-Bold',
    semi: 'SFProDisplay-Semibold',
    stylish: 'SFProDisplay-ThinItalic',
    italic: 'SFProDisplay-LightItalic',
};

const Fonts = { customFonts, type };

export default Fonts;
