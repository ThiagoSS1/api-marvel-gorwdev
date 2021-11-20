import md5 from "md5";
import axios from "axios";

class ComicService {
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

    async getComic(id:string) {
        const url = `https://gateway.marvel.com/v1/public/comics/${id}?apikey=${this.publicKey}&hash=${this.hash}&ts=${this.ts}`;
        const response = await axios.get(url);
      
        return {
            data:
                response.data.data.results.length > 0
                    ? response.data.data.results[0]
                    : null,
        }
    }
}




export default new ComicService();


