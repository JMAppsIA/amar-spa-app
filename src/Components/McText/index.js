import styled from "styled-components/native";
import { Fonts, Colors, Metrics } from "Constants";

const McText = styled.Text`
  /* default black */
  color: ${(props) => props.color || Colors.black};
  /* default 16px */
  font-size: ${(props) => props.size || Metrics.s16}px;
  /* default left */
  text-align: ${(props) => props.align || "left"};

  ${({
    black,
    blackItalic,
    bold,
    boldItalic,
    heavy,
    heavyItalic,
    light,
    lightItalic,
    medium,
    mediumItalic,
    regular,
    regularItalic,
    semi,
    semiItalic,
    thin,
    thinItalic,
    ultraLight,
    ultraLightItalic,
  }) => {
    switch (true) {
      case black: {
        return { fontFamily: Fonts.type.black };
      }
      case blackItalic: {
        return { fontFamily: Fonts.type.blackItalic };
      }
      case bold: {
        return { fontFamily: Fonts.type.bold };
      }
      case boldItalic: {
        return { fontFamily: Fonts.type.boldItalic };
      }
      case heavy: {
        return { fontFamily: Fonts.type.heavy };
      }
      case heavyItalic: {
        return { fontFamily: Fonts.type.heavyItalic };
      }
      case light: {
        return { fontFamily: Fonts.type.light };
      }
      case lightItalic: {
        return { fontFamily: Fonts.type.lightItalic };
      }
      case medium: {
        return { fontFamily: Fonts.type.medium };
      }
      case mediumItalic: {
        return { fontFamily: Fonts.type.mediumItalic };
      }
      case regular: {
        return { fontFamily: Fonts.type.regular };
      }
      case regularItalic: {
        return { fontFamily: Fonts.type.regularItalic };
      }
      case semi: {
        return { fontFamily: Fonts.type.semiBold };
      }
      case semiItalic: {
        return { fontFamily: Fonts.type.semiBoldItalic };
      }
      case thin: {
        return { fontFamily: Fonts.type.thin };
      }
      case thinItalic: {
        return { fontFamily: Fonts.type.thinItalic };
      }
      case ultraLight: {
        return { fontFamily: Fonts.type.ultraLight };
      }
      case ultraLightItalic: {
        return { fontFamily: Fonts.type.ultraLightItalic };
      }
    }
  }}
  ${({ h1, h2, h3, h4, h5, h6 }) => {
    switch (true) {
      case h1: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h1}px` };
      }
      case h2: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h2}px` };
      }
      case h3: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h3}px` };
      }
      case h4: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h4}px` };
      }
      case h5: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h5}px` };
      }
      case h6: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h6}px` };
      }
    }
  }}
  ${({ body1, body2, body3, body4, body5, body6 }) => {
    switch (true) {
      case body1: {
        return {
          fontFamily: Fonts.type.regular,
          fontSize: `${Metrics.body1}px`,
        };
      }
      case body2: {
        return {
          fontFamily: Fonts.type.regular,
          fontSize: `${Metrics.body2}px`,
        };
      }
      case body3: {
        return {
          fontFamily: Fonts.type.regular,
          fontSize: `${Metrics.body3}px`,
        };
      }
      case body4: {
        return {
          fontFamily: Fonts.type.regular,
          fontSize: `${Metrics.body4}px`,
        };
      }
      case body5: {
        return {
          fontFamily: Fonts.type.regular,
          fontSize: `${Metrics.body5}px`,
        };
      }
      case body6: {
        return {
          fontFamily: Fonts.type.regular,
          fontSize: `${Metrics.body6}px`,
        };
      }
    }
  }}
`;

export default McText;
