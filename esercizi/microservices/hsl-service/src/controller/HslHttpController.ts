import { Express } from 'express';
import { TtfCmyk, TtfHex, TtfHsl, TtfRgb } from '../../../commons/src/model/Color';
import { hslToCMYK, hslToHex, hslToRGB } from '../service/HslService';

class HslHttpController {
    constructor(server: Express) {
        server.get('/hslToHEX', (req, res) => {
            const input = req.query.color;
            if (!input) {
                res.status(400).send("No 'color' param");
            } else {
                const color = JSON.parse(req.query.color as string) as TtfHsl;
                const convertedColor: TtfHex = hslToHex(color);

                res.send(convertedColor);
            }
        });

        server.get('/hslToRGB', (req, res) => {
            const input = req.query.color;
            if (!input) {
                res.status(400).send("No 'color' param");
            } else {
                const color = JSON.parse(input as string) as TtfHsl;
                const convertedColor: TtfRgb = hslToRGB(color);

                res.send(convertedColor);
            }
        });

        server.get('/hslToCMYK', (req, res) => {
            const input = req.query.color;
            if (!input) {
                res.status(400).send("No 'color' param");
            } else {
                const color = JSON.parse(input as string) as TtfHsl;
                const convertedColor: TtfCmyk = hslToCMYK(color);

                res.send(convertedColor);
            }
        });
    }
}

export default HslHttpController;
