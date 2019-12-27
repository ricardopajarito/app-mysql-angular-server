"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AlumnoRoutes = /** @class */ (function () {
    function AlumnoRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    AlumnoRoutes.prototype.config = function () {
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/', gamesController.create);
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    };
    return AlumnoRoutes;
}());
var alumnoRoutes = new AlumnoRoutes();
exports.default = alumnoRoutes.router;
