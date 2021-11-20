import md5 from "md5";
import axios from "axios";

class CharacterService {
    public hash: any;
    public apikey: string;
    public publicKey: string;
    public ts: number;
    public limit: number
    constructor() {
        this.apikey = '8511cbdf6ae102f0c00291bac4abc769251ab212';
        this.publicKey = '0815706caa1f1e48d329f76973de1681';
        this.ts = new Date().getTime();
        this.limit = 100;
        this.hash = md5(this.ts + this.apikey + this.publicKey);
    }
    // offset quantos registros ele vai pular, / limit: quantos registros vai buscar 
    async getCharacters(page: any, title: any) {
        const offset = (page - 1) * this.limit;
        let url = `https://gateway.marvel.com/v1/public/characters?apikey=${this.publicKey}&hash=${this.hash}&ts=${this.ts}&limit=${this.limit}&offset=${offset}`;

        if (title !== undefined) {
            url += `&nameStartsWith=${title}`
        }

        const response = await axios.get(url);

        return {
            current_page: Number(page),
            total_Pages: Math.ceil(response.data.data.total / this.limit),
            data: response.data.data.results,
        }
    }

    async getCharacter(id:string) {
        const url = `https://gateway.marvel.com/v1/public/characters/${id}?apikey=${this.publicKey}&hash=${this.hash}&ts=${this.ts}`;
        const response = await axios.get(url);
      
        return {
            data:
                response.data.data.results.length > 0
                    ? response.data.data.results[0]
                    : null,
        }
    }
}




export default new CharacterService();


