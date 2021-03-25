import colorConverter from 'color-convert'
import { CMYK } from 'color-convert/conversions';
import { TtfCmyk, TtfHex, TtfHsl, TtfRgb } from "../../../commons/src/model/Color"

export const cmykToHEX = (color: TtfCmyk): TtfHex => {
    const toConvert: CMYK = [
        color.cyan,
        color.magenta,
        color.yellow,
        color.black
    ];
    const converted = colorConverter.cmyk.hex(toConvert);
    return {
        hex: converted
    }
}

export const cmykToRGB = (color: TtfCmyk): TtfRgb => {
    const toConvert: CMYK = [
        color.cyan,
        color.magenta,
        color.yellow,
        color.black
    ];
    const converted = colorConverter.cmyk.rgb(toConvert);
    return {
        red: converted[0],
        green: converted[1],
        blue: converted[2]
    }
}

export const cmykToHSL = (color: TtfCmyk): TtfHsl => {
    const toConvert: CMYK = [
        color.cyan,
        color.magenta,
        color.yellow,
        color.black
    ];
    const converted = colorConverter.cmyk.hsl(toConvert);
    return {
        hue: converted[0],
        saturation: converted[1],
        lightness: converted[2]
    }
}

