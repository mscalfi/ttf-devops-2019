import { Express } from 'express';
import { TtfCmyk, TtfHex, TtfHsl, TtfRgb } from '../../../commons/src/model/Color';
import { hslToCMYK, hslToHex, hslToRGB } from '../service/HslService';

class HslHttpController {
    constructor(server: Express) {
        server.get('/hslToHex', (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfHsl;
            const convertedColor: TtfHex = hslToHex(color);

            res.send(convertedColor);
        });

        server.get('/hslToRGB', (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfHsl;
            const convertedColor: TtfRgb = hslToRGB(color);

            res.send(convertedColor);
        });

        server.get('/hslToCMYK', (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfHsl;
            const convertedColor: TtfCmyk = hslToCMYK(color);

            res.send(convertedColor);
        });
    }
}

export default HslHttpController;
