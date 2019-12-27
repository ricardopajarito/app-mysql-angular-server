"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var profesoresController_1 = __importDefault(require("../controllers/profesoresController"));
var ProfesoresRoutes = /** @class */ (function () {
    function ProfesoresRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ProfesoresRoutes.prototype.config = function () {
        this.router.get('/', profesoresController_1.default.list);
        this.router.get('/:id', profesoresController_1.default.getOne);
        this.router.post('/', profesoresController_1.default.create);
        this.router.put('/:id', profesoresController_1.default.update);
        this.router.delete('/:id', profesoresController_1.default.delete);
    };
    return ProfesoresRoutes;
}());
var profesoresRoutes = new ProfesoresRoutes();
exports.default = profesoresRoutes.router;
