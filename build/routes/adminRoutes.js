"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var adminController_1 = __importDefault(require("../controllers/adminController"));
var AdminRoutes = /** @class */ (function () {
    function AdminRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    AdminRoutes.prototype.config = function () {
        this.router.get('/', adminController_1.default.list);
        this.router.get('/:id', adminController_1.default.getOne);
        this.router.post('/', adminController_1.default.create);
        this.router.put('/:id', adminController_1.default.update);
        this.router.delete('/:id', adminController_1.default.delete);
    };
    return AdminRoutes;
}());
var adminRoutes = new AdminRoutes();
exports.default = adminRoutes.router;
