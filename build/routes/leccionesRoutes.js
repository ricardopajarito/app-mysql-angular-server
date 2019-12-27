"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var leccionesController_1 = __importDefault(require("../controllers/leccionesController"));
var LeccionesRoutes = /** @class */ (function () {
    function LeccionesRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    LeccionesRoutes.prototype.config = function () {
        this.router.get('/:tema/:grado', leccionesController_1.default.list);
        this.router.get('/:id', leccionesController_1.default.getOne);
        this.router.post('/', leccionesController_1.default.create);
        this.router.put('/:id', leccionesController_1.default.update);
        this.router.delete('/:id', leccionesController_1.default.delete);
    };
    return LeccionesRoutes;
}());
var leccionesRoutes = new LeccionesRoutes();
exports.default = leccionesRoutes.router;
