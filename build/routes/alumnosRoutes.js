"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var alumnosController_1 = __importDefault(require("../controllers/alumnosController"));
var AlumnosRoutes = /** @class */ (function () {
    function AlumnosRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    AlumnosRoutes.prototype.config = function () {
        this.router.get('/', alumnosController_1.default.list);
        this.router.get('/profesor/:id', alumnosController_1.default.listbyprofe);
        this.router.get('/:id', alumnosController_1.default.getOne);
        this.router.post('/', alumnosController_1.default.create);
        this.router.put('/:id', alumnosController_1.default.update);
        this.router.delete('/:id', alumnosController_1.default.delete);
    };
    return AlumnosRoutes;
}());
var alumnosRoutes = new AlumnosRoutes();
exports.default = alumnosRoutes.router;
