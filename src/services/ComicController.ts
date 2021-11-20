import ComicService from "../services/ComicService";
import {Request, Response} from "express";

class ComicController {

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const data = await ComicService.getComic(id);

        return response.json(data)

    }

}


export default new ComicController();