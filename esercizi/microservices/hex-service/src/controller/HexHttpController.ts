import {hexToCMYK, hexToHSL, hexToRGB} from '../service/HexService'; 
import {Express} from 'express';
import { TtfCmyk, TtfHex, TtfHsl, TtfRgb } from '../../../commons/src/model/Color';

class HexHttpController {
    constructor(server: Express) {
        server.get('/hexToRGB', (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfHex;
            const convertedColor: TtfRgb = hexToRGB(color);

            res.send(convertedColor);
        });

        server.get('/hexToHSL', (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfHex;
            const convertedColor: TtfHsl = hexToHSL(color);

            res.send(convertedColor);
        });

        server.get('/hexToCMYK', (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfHex;
            const convertedColor: TtfCmyk = hexToCMYK(color);

            res.send(convertedColor);
        });
    }
}

export default HexHttpController;
