import {Express} from 'express';
import { TtfCmyk, TtfHex, TtfHsl, TtfRgb } from '../../../commons/src/model/Color';
import { rgbToCMYK, rgbToHex, rgbToHSL } from '../service/RgbService';

class RgbHttpController {
    constructor(server: Express) {
        server.get('/rgbToHEX', (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfRgb;
            const convertedColor: TtfHex = rgbToHex(color);

            res.send(convertedColor);
        });

        server.get('/rgbToHSL', (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfRgb;
            const convertedColor: TtfHsl = rgbToHSL(color);

            res.send(convertedColor);
        });

        server.get('/rgbToCMYK', (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfRgb;
            const convertedColor: TtfCmyk = rgbToCMYK(color);

            res.send(convertedColor);
        });
    }
}

export default RgbHttpController;
