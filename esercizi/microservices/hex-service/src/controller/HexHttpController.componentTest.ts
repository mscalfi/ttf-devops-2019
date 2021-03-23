import chai from 'chai';
import chaiHttp from 'chai-http';
import { hex2rgbTestData } from '../../../commons/src/test-data/colors';
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
                .get('/hex/toRGB')
                .query(`color=${JSON.stringify(test.hexValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.rgbValue);
                    done();
                });
        });
    });
});
