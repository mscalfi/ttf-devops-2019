import chai from 'chai';
import { hslToHex, hslToRGB, hslToCMYK } from './HslService';
import { hsl2hexTestData, hsl2rgbTestData, hsl2cmykTestData } from "../../../commons/src/test-data/colors"
import { TtfCmyk, TtfHex, TtfRgb } from '../../../commons/src/model/Color';
chai.config.includeStack = true;
const should = chai.should();

describe('hsl converter test', () => {
    hsl2hexTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hslValue)} to ${JSON.stringify(test.hexValue)}`, () => {
            const converted = hslToHex(test.hslValue)
            const hex: TtfHex = {
                hex: converted.hex
            };

            hex.should.deep.equals(test.hexValue);
        });
    });

    hsl2rgbTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hslValue)} to ${JSON.stringify(test.rgbValue)}`, () => {
            const converted = hslToRGB(test.hslValue)
            const rgb: TtfRgb = {
                red: converted.red,
                green: converted.green,
                blue: converted.blue
            };

            rgb.should.deep.equals(test.rgbValue);
        });
    });

    hsl2cmykTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hslValue)} to ${JSON.stringify(test.cmykValue)}`, () => {
            const converted = hslToCMYK(test.hslValue)
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
