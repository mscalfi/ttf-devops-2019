import chai from 'chai';
import { rgbToCMYK, rgbToHex, rgbToHSL } from './RgbService';
import {rgb2cmykTestData, rgb2hexTestData, rgb2hslTestData} from "../../../commons/src/test-data/colors"
import { TtfCmyk, TtfHex, TtfHsl } from '../../../commons/src/model/Color';
chai.config.includeStack = true;
const should = chai.should();

describe('rgb converter test', () => {
    rgb2hexTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.rgbValue)} to ${JSON.stringify(test.hexValue)}`, () => {
            const converted = rgbToHex(test.rgbValue)
            const hex: TtfHex = {
                hex: converted.hex
            };

            hex.should.deep.equals(test.hexValue);
        });
    });

    rgb2hslTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.rgbValue)} to ${JSON.stringify(test.hslValue)}`, () => {
            const converted = rgbToHSL(test.rgbValue);
            const hsl: TtfHsl = {
                hue: converted.hue,
                saturation: converted.saturation,
                lightness: converted.lightness
            };

            hsl.should.deep.equals(test.hslValue);
        });
    });

    rgb2cmykTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.rgbValue)} to ${JSON.stringify(test.cmykValue)}`, () => {
            const converted = rgbToCMYK(test.rgbValue);
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
