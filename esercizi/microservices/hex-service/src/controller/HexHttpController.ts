import {hexToRGB} from '../service/HexService'; 
import {Express} from 'express';
import { TtfHex, TtfRgb } from '../../../commons/src/model/Color';

class HexHttpController {
    constructor(server: Express) {
        server.get('/hex/toRGB', (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfHex;
            const convertedColor: TtfRgb = hexToRGB(color);

            res.send(convertedColor);
        });
    }
}

export default HexHttpController;
