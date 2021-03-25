import { Express } from 'express';
import { TtfCmyk, TtfHex, TtfHsl, TtfRgb } from '../../../commons/src/model/Color';
import { cmykToHEX, cmykToHSL, cmykToRGB } from '../service/cmykService';

class CmykHttpController {
    constructor(server: Express) {
        server.get('/cmykToHEX', (req, res) => {
            const input = req.query.color;

            if (!input) {
                res.status(400).send("No 'color' param");
            } else {
                const color = JSON.parse(input as string) as TtfCmyk;
                const convertedColor: TtfHex = cmykToHEX(color);
                res.send(convertedColor);
            }
        });

        server.get('/cmykToRGB', (req, res) => {
            const input = req.query.color;

            if (!input) {
                res.status(400).send("No 'color' param");
            } else {
                const color = JSON.parse(input as string) as TtfCmyk;
                const convertedColor: TtfRgb = cmykToRGB(color);
                res.send(convertedColor);
            }
        });

        server.get('/cmykToHSL', (req, res) => {
            const input = req.query.color;

            if (!input) {
                res.status(400).send("No 'color' param");
            } else {
                const color = JSON.parse(input as string) as TtfCmyk;
                const convertedColor: TtfHsl = cmykToHSL(color);
                res.send(convertedColor);
            }
        });
    }
}

export default CmykHttpController;
