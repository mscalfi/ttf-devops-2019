import chai from 'chai';
import { cmykToHEX, cmykToRGB, cmykToHSL } from './cmykService';
import { cmyk2hexTestData, cmyk2rgbTestData, cmyk2hslTestData } from "../../../commons/src/test-data/colors"
import { TtfHex, TtfHsl, TtfRgb } from '../../../commons/src/model/Color';
chai.config.includeStack = true;
const should = chai.should();

describe('cmyk converter test', () => {
    cmyk2hexTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.cmykValue)} to ${JSON.stringify(test.hexValue)}`, () => {
            const converted = cmykToHEX(test.cmykValue)
            const hex: TtfHex = {
                hex: converted.hex
            };

            hex.should.deep.equals(test.hexValue);
        });
    });

    cmyk2rgbTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.cmykValue)} to ${JSON.stringify(test.rgbValue)}`, () => {
            const converted = cmykToRGB(test.cmykValue)
            const rgb: TtfRgb = {
                red: converted.red,
                green: converted.green,
                blue: converted.blue
            };

            rgb.should.deep.equals(test.rgbValue);
        });
    });

    cmyk2hslTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.cmykValue)} to ${JSON.stringify(test.hslValue)}`, () => {
            const converted = cmykToHSL(test.cmykValue)
            const hsl: TtfHsl = {
                hue: converted.hue,
                saturation: converted.saturation,
                lightness: converted.lightness
            }

            hsl.should.deep.equals(test.hslValue);
        });
    });
});
