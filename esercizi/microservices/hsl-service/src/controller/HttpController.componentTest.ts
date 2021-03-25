import chai from 'chai';
import chaiHttp from 'chai-http';
import { hsl2hexTestData, hsl2rgbTestData, hsl2cmykTestData } from "../../../commons/src/test-data/colors"
import { TtfCmyk, TtfHex, TtfRgb } from '../../../commons/src/model/Color';
import * as config from '../../server-config.json'

chai.config.includeStack = true;
const should = chai.should();
chai.use(chaiHttp);

describe('hsl service REST API Test', () => {
    const url = process.env.npm_config_rgb2hex_test_url || `http://localhost:${config.port}`;
    console.log('Test URL: ' + url);

    hsl2hexTestData.forEach((test) => {
        it(`should convert via API ${JSON.stringify(test.hslValue)} to ${JSON.stringify(test.hexValue)}`, (done) => {
            chai.request(url)
                .get('/hslToHex')
                .query(`color=${JSON.stringify(test.hslValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.hexValue);
                    done();
                });
        });
    });

    hsl2rgbTestData.forEach((test) => {
        it(`should convert via API ${JSON.stringify(test.hslValue)} to ${JSON.stringify(test.rgbValue)}`, (done) => {
            chai.request(url)
                .get('/hslToRGB')
                .query(`color=${JSON.stringify(test.hslValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.rgbValue);
                    done();
                });
        });
    });

    hsl2cmykTestData.forEach((test) => {
        it(`should convert via API ${JSON.stringify(test.hslValue)} to ${JSON.stringify(test.cmykValue)}`, (done) => {
            chai.request(url)
                .get('/hslToCMYK')
                .query(`color=${JSON.stringify(test.hslValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.cmykValue);
                    done();
                });
        });
    });
});
