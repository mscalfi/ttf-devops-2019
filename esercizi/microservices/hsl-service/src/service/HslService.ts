import colorConverter from 'color-convert'
import { HSL } from 'color-convert/conversions';
import { TtfCmyk, TtfHex, TtfHsl, TtfRgb } from "../../../commons/src/model/Color"

export const hslToHex = (color: TtfHsl): TtfHex => {
    const toConvert: HSL = [
        color.hue,
        color.saturation,
        color.lightness
    ];
    const converted = colorConverter.hsl.hex(toConvert);

    return {
        hex: converted
    }
}

export const hslToRGB = (color: TtfHsl): TtfRgb => {
    const toConvert: HSL = [
        color.hue,
        color.saturation,
        color.lightness
    ];
    const converted = colorConverter.hsl.rgb(toConvert);
    return {
        red: converted[0],
        green: converted[1],
        blue: converted[2]
    }
}

export const hslToCMYK = (color: TtfHsl): TtfCmyk => {
    const toConvert: HSL = [
        color.hue,
        color.saturation,
        color.lightness
    ];
    const converted = colorConverter.hsl.cmyk(toConvert);
    return {
        cyan: converted[0],
        magenta: converted[1],
        yellow: converted[2],
        black: converted[3]
    }
}
