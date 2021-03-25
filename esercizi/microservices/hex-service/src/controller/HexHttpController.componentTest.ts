import chai from 'chai';
import chaiHttp from 'chai-http';
import { hex2cmykTestData, hex2hslTestData, hex2rgbTestData } from '../../../commons/src/test-data/colors';
import * as config from '../../server-config.json'

chai.config.includeStack = true;
const should = chai.should();
chai.use(chaiHttp);

describe('hex service REST API Test', () => {
    const url = process.env.npm_config_rgb2hex_test_url || `http://localhost:${config.port}`;
    console.log('Test URL: ' + url);

    hex2rgbTestData.forEach((test) => {
        it(`should convert via API ${JSON.stringify(test.hexValue)} to ${JSON.stringify(test.rgbValue)}`, (done) => {
            chai.request(url)
                .get('/hexToRGB')
                .query(`color=${JSON.stringify(test.hexValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.rgbValue);
                    done();
                });
        });
    });

    hex2hslTestData.forEach((test) => {
        it(`should convert via API ${JSON.stringify(test.hexValue)} to ${JSON.stringify(test.hslValue)}`, (done) => {
            chai.request(url)
                .get('/hexToHSL')
                .query(`color=${JSON.stringify(test.hexValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.hslValue);
                    done();
                });
        });
    });

    hex2cmykTestData.forEach((test) => {
        it(`should convert via API ${JSON.stringify(test.hexValue)} to ${JSON.stringify(test.cmykValue)}`, (done) => {
            chai.request(url)
                .get('/hexToCMYK')
                .query(`color=${JSON.stringify(test.hexValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.cmykValue);
                    done();
                });
        });
    });
});

describe('hex service REST API Test - edge cases', () => {
    const url = process.env.npm_config_rgb2hex_test_url || `http://localhost:${config.port}`;
    console.log('Test URL: ' + url);

    it(`hexToRGB should return 400 with no color`, (done) => {
        chai.request(url)
            .get('/hexToRGB')
            .query(`color=`)
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(400);
                done();
            });
    });

    it(`hexToHSL should return 400 with no color`, (done) => {
        chai.request(url)
            .get('/hexToHSL')
            .query(`color=`)
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(400);
                done();
            });
    });

    it(`hexToCMYK should return 400 with no color`, (done) => {
        chai.request(url)
            .get('/hexToCMYK')
            .query(`color=`)
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(400);
                done();
            });
    });
});

