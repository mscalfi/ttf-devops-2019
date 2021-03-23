import colorConverter from 'color-convert'
import { TtfHex, TtfHsl, TtfRgb } from "../../../commons/src/model/Color"

export const hexToRGB = (color: TtfHex): TtfRgb => {
    const converted = colorConverter.hex.rgb(color.hex);
    return {
        red: converted[0],
        green: converted[1],
        blue: converted[2],
    }
}

