import {convert} from '../service/HexService';
import {Express} from 'express';

class HexHttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color = JSON.parse(req.query.color) as ColorModel;
            const convertedColor: ColorModel = convert(color);

            res.send(convertedColor);
        });
    }
}

export default HexHttpController;
