import chai from 'chai';
import { hexToCMYK, hexToHSL, hexToRGB } from './HexService';
import { hex2rgbTestData, hex2hslTestData, hex2cmykTestData } from "../../../commons/src/test-data/colors"
import { TtfCmyk, TtfHsl, TtfRgb } from '../../../commons/src/model/Color';
chai.config.includeStack = true;
const should = chai.should();

describe('hex converter test', () => {
    hex2rgbTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hexValue)} to ${JSON.stringify(test.rgbValue)}`, () => {
            const converted = hexToRGB(test.hexValue)
            const rgb: TtfRgb = {
                red: converted.red,
                green: converted.green,
                blue: converted.blue
            };

            rgb.should.deep.equals(test.rgbValue);
        });
    });

    hex2hslTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hexValue)} to ${JSON.stringify(test.hslValue)}`, () => {
            const converted = hexToHSL(test.hexValue)
            const hsl: TtfHsl = {
                hue: converted.hue,
                saturation: converted.saturation,
                lightness: converted.lightness
            };

            hsl.should.deep.equals(test.hslValue);
        });
    });

    hex2cmykTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hexValue)} to ${JSON.stringify(test.cmykValue)}`, () => {
            const converted = hexToCMYK(test.hexValue)
            const cmyk: TtfCmyk = {
                cyan: converted.cyan,
                magenta: converted.magenta,
                yellow: converted.yellow,
                black: converted.black
            }

            cmyk.should.deep.equals(test.cmykValue);
        });
    });
});
