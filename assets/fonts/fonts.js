import * as Font from 'expo-font';

export const loadFonts = async () => {
    await Font.loadAsync({
        "MontserratItalicVariableFont": require("./Montserrat-Italic-VariableFont_wght.ttf"),
        "MontserratVariableFont": require("./Montserrat-VariableFont_wght.ttf"),
        "MontserratBlack": require("./Montserrat-Black.ttf"),
        "MontserratBlackItalic": require("./Montserrat-BlackItalic.ttf"),
        "MontserratBold": require("./Montserrat-Bold.ttf"),
        "MontserratBoldItalic": require("./Montserrat-BoldItalic.ttf"),
        "MontserratExtraBold": require("./Montserrat-ExtraBold.ttf"),
        "MontserratExtraBoldItalic": require("./Montserrat-ExtraBoldItalic.ttf"),
        "MontserratExtraLight": require("./Montserrat-ExtraLight.ttf"),
        "MontserratExtraLightItalic": require("./Montserrat-ExtraLightItalic.ttf"),
        "MontserratItalic": require("./Montserrat-Italic.ttf"),
        "MontserratLight": require("./Montserrat-Light.ttf"),
        "MontserratLightItalic": require("./Montserrat-LightItalic.ttf"),
        "MontserratMedium": require("./Montserrat-Medium.ttf"),
        "MontserratMediumItalic": require("./Montserrat-MediumItalic.ttf"),
        "MontserratRegular": require("./Montserrat-Regular.ttf"),
        "MontserratSemiBold": require("./Montserrat-SemiBold.ttf"),
        "MontserratSemiBoldItalic": require("./Montserrat-SemiBoldItalic.ttf"),
        "MontserratThin": require("./Montserrat-Thin.ttf"),
        "MontserratThinItalic": require("./Montserrat-ThinItalic.ttf")
    });
};