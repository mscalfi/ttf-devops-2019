import chai from 'chai';
import chaiHttp from 'chai-http';
import { cmyk2hexTestData, cmyk2rgbTestData, cmyk2hslTestData } from '../../../commons/src/test-data/colors';
import * as config from '../../server-config.json'

chai.config.includeStack = true;
const should = chai.should();
chai.use(chaiHttp);

describe('cmyk service REST API Test', () => {
    const url = process.env.npm_config_rgb2hex_test_url || `http://localhost:${config.port}`;
    console.log('Test URL: ' + url);

    cmyk2hexTestData.forEach((test) => {
        it(`should convert via API ${JSON.stringify(test.cmykValue)} to ${JSON.stringify(test.hexValue)}`, (done) => {
            chai.request(url)
                .get('/cmykToHEX')
                .query(`color=${JSON.stringify(test.cmykValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.hexValue);
                    done();
                });
        });
    });

    cmyk2rgbTestData.forEach((test) => {
        it(`should convert via API ${JSON.stringify(test.cmykValue)} to ${JSON.stringify(test.rgbValue)}`, (done) => {
            chai.request(url)
                .get('/cmykToRGB')
                .query(`color=${JSON.stringify(test.cmykValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.rgbValue);
                    done();
                });
        });
    });

    cmyk2hslTestData.forEach((test) => {
        it(`should convert via API ${JSON.stringify(test.cmykValue)} to ${JSON.stringify(test.cmykValue)}`, (done) => {
            chai.request(url)
                .get('/cmykToHSL')
                .query(`color=${JSON.stringify(test.cmykValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.hslValue);
                    done();
                });
        });
    });
});

describe('cmyk service REST API Test - edge cases', () => {
    const url = process.env.npm_config_rgb2hex_test_url || `http://localhost:${config.port}`;
    console.log('Test URL: ' + url);

    it(`cmykToHEX should return 400 with no color`, (done) => {
        chai.request(url)
            .get('/cmykToHEX')
            .query(`color=`)
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(400);
                done();
            });
    });

    it(`cmykToRGB should return 400 with no color`, (done) => {
        chai.request(url)
            .get('/cmykToRGB')
            .query(`color=`)
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(400);
                done();
            });
    });

    it(`cmykToHSL should return 400 with no color`, (done) => {
        chai.request(url)
            .get('/cmykToHSL')
            .query(`color=`)
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(400);
                done();
            });
    });
});

