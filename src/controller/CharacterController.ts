import { Request, Response, NextFunction } from 'express';
import  CharacterService  from '../services/characterService';

class CharacterController {

    async index(request: Request, response: Response) {
        const { page, title } = request.query;

        const data = await CharacterService.getCharacters(page ?? 1, title)

        return response.json(data)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const data = await CharacterService.getCharacter(id);

        return response.json(data)

    }

}


export default new CharacterController();

