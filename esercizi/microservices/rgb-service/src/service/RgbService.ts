import colorConverter from 'color-convert'
import { TtfCmyk, TtfHex, TtfHsl, TtfRgb } from "../../../commons/src/model/Color"

export const rgbToHex = (color: TtfRgb): TtfHex => {
    const converted = colorConverter.rgb.hex(color.red, color.green, color.blue);
    return {
        hex: converted
    }
}

export const rgbToHSL = (color: TtfRgb): TtfHsl => {
    const converted = colorConverter.rgb.hsl(color.red, color.green, color.blue);
    return {
        hue: converted[0],
        saturation: converted[1],
        lightness: converted[2]
    }
}

export const rgbToCMYK = (color: TtfRgb): TtfCmyk => {
    const converted = colorConverter.rgb.cmyk(color.red, color.green, color.blue);
    return {
        cyan: converted[0],
        magenta: converted[1],
        yellow: converted[2],
        black: converted[3]
    }
}
