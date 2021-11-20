"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(require("md5"));
const axios_1 = __importDefault(require("axios"));
class ComicService {
    constructor() {
        this.apikey = '8511cbdf6ae102f0c00291bac4abc769251ab212';
        this.publicKey = '0815706caa1f1e48d329f76973de1681';
        this.ts = new Date().getTime();
        this.limit = 100;
        this.hash = (0, md5_1.default)(this.ts + this.apikey + this.publicKey);
    }
    getComic(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://gateway.marvel.com/v1/public/comics/${id}?apikey=${this.publicKey}&hash=${this.hash}&ts=${this.ts}`;
            const response = yield axios_1.default.get(url);
            return {
                data: response.data.data.results.length > 0
                    ? response.data.data.results[0]
                    : null,
            };
        });
    }
}
exports.default = new ComicService();
