/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const getColorGradient = (colorScheme: string | null | undefined, inverted: boolean) => {
  const dark = [Colors.darkModeCustom.lighterColor, Colors.darkModeCustom.darkerColor];
  const light = [Colors.lightModeCustom.lighterColor, Colors.lightModeCustom.darkerColor];

  if (inverted) {
    return colorScheme === "dark" ? light : dark;
  } else {
    return colorScheme === "dark" ? dark : light;
  }
};



export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  lightModeCustom: {
    lighterColor: "#ecf1ed",
    darkerColor: "#B3BDB5"
  },
  darkModeCustom: {
    lighterColor: "#0d110e",
    darkerColor: "#3f4a47"
  }
};
