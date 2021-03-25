import chai from 'chai';
import chaiHttp from 'chai-http';
import { rgb2cmykTestData, rgb2hexTestData, rgb2hslTestData } from '../../../commons/src/test-data/colors';
import * as config from '../../server-config.json'

chai.config.includeStack = true;
const should = chai.should();
chai.use(chaiHttp);

describe('rgb service REST API Test', () => {
    const url = process.env.npm_config_rgb2hex_test_url || `http://localhost:${config.port}`;
    console.log('Test URL: ' + url);

    rgb2hexTestData.forEach((test) => {
        it(`should convert via API ${JSON.stringify(test.rgbValue)} to ${JSON.stringify(test.hexValue)}`, (done) => {
            chai.request(url)
                .get('/rgbToHEX')
                .query(`color=${JSON.stringify(test.rgbValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.hexValue);
                    done();
                });
        });
    });

    rgb2hslTestData.forEach((test) => {
        it(`should convert via API ${JSON.stringify(test.rgbValue)} to ${JSON.stringify(test.hslValue)}`, (done) => {
            chai.request(url)
                .get('/rgbToHSL')
                .query(`color=${JSON.stringify(test.rgbValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.hslValue);
                    done();
                });
        });
    });

    rgb2cmykTestData.forEach((test) => {
        it(`should convert via API ${JSON.stringify(test.rgbValue)} to ${JSON.stringify(test.cmykValue)}`, (done) => {
            chai.request(url)
                .get('/rgbToCMYK')
                .query(`color=${JSON.stringify(test.rgbValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.cmykValue);
                    done();
                });
        });
    });
});

describe('rgb service REST API Test - edge cases', () => {
    const url = process.env.npm_config_rgb2hex_test_url || `http://localhost:${config.port}`;
    console.log('Test URL: ' + url);

    it(`rgbToHEX should return 400 with no color`, (done) => {
        chai.request(url)
            .get('/rgbToHEX')
            .query(`color=`)
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(400);
                done();
            });
    });

    it(`rgbToHSL should return 400 with no color`, (done) => {
        chai.request(url)
            .get('/rgbToHSL')
            .query(`color=`)
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(400);
                done();
            });
    });

    it(`rgbToCMYK should return 400 with no color`, (done) => {
        chai.request(url)
            .get('/rgbToCMYK')
            .query(`color=`)
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(400);
                done();
            });
    });
});