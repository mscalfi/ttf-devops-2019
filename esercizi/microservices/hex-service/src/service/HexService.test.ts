import chai from 'chai';
import { hexToRGB } from './HexService';
import { hex2rgbTestData, hex2hslTestData } from "../../../commons/src/test-data/colors"
chai.config.includeStack = true;
const should = chai.should();

describe('hex converter test', () => {
    hex2rgbTestData.forEach((test) => {
        it(`convert ${JSON.stringify(test.hexValue)} to ${JSON.stringify(test.rgbValue)}`, () => {
            const converted = hexToRGB(test.hexValue)
            const rgb = {
                red: converted.red,
                green: converted.green,
                blue: converted.blue
            };
            rgb.should.deep.equals(test.rgbValue);
        });
    });
});
