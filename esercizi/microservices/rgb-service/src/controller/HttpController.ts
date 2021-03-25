import {convert} from '../service/RgbService';
import {Express} from 'express';

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color = JSON.parse(req.query.color) as ColorModel;
            const convertedColor: ColorModel = convert(color);

            res.send(convertedColor);
        });
    }
}

export default HttpController;
