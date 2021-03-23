import colorConverter from 'color-convert'
import { TtfCmyk, TtfHex, TtfHsl, TtfRgb } from "../../../commons/src/model/Color"

export const hexToRGB = (color: TtfHex): TtfRgb => {
    const converted = colorConverter.hex.rgb(color.hex);
    return {
        red: converted[0],
        green: converted[1],
        blue: converted[2],
    }
}

export const hexToHSL = (color: TtfHex): TtfHsl => {
    const converted = colorConverter.hex.hsl(color.hex);
    return {
        hue: converted[0],
        saturation: converted[1],
        lightness: converted[2]
    }
}

export const hexToCMYK = (color: TtfHex): TtfCmyk => {
    const converted = colorConverter.hex.cmyk(color.hex);
    return {
        cyan: converted[0],
        magenta: converted[1],
        yellow: converted[2],
        black: converted[3]
    }
}
