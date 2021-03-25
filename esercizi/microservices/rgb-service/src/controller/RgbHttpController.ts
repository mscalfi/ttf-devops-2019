import { Express } from 'express';
import { TtfCmyk, TtfHex, TtfHsl, TtfRgb } from '../../../commons/src/model/Color';
import { rgbToCMYK, rgbToHex, rgbToHSL } from '../service/RgbService';

class RgbHttpController {
    constructor(server: Express) {
        server.get('/rgbToHEX', (req, res) => {
            const input = req.query.color;
            if (!input) {
                res.status(400).send("No 'color' param");
            } else {
                const color = JSON.parse(input as string) as TtfRgb;
                const convertedColor: TtfHex = rgbToHex(color);

                res.send(convertedColor);
            }
        });

        server.get('/rgbToHSL', (req, res) => {
            const input = req.query.color;
            if (!input) {
                res.status(400).send("No 'color' param");
            } else {
                const color = JSON.parse(input as string) as TtfRgb;
                const convertedColor: TtfHsl = rgbToHSL(color);

                res.send(convertedColor);
            }
        });

        server.get('/rgbToCMYK', (req, res) => {
            const input = req.query.color;
            if (!input) {
                res.status(400).send("No 'color' param");
            } else {
                const color = JSON.parse(input as string) as TtfRgb;
                const convertedColor: TtfCmyk = rgbToCMYK(color);

                res.send(convertedColor);
            }
        });
    }
}

export default RgbHttpController;
