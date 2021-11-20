"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CharacterController_1 = __importDefault(require("./controller/CharacterController"));
const ComicController_1 = __importDefault(require("./services/ComicController"));
const routes = (0, express_1.Router)();
routes.get("/character", CharacterController_1.default.index);
routes.get("/character/:id", CharacterController_1.default.show);
routes.get("/comic/:id", ComicController_1.default.show);
exports.default = routes;
