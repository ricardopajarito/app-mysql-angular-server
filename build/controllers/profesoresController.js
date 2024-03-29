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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require('bcryptjs');
var database_1 = __importDefault(require("../database")); //se conecta a la base de datos
var ProfesoresController = /** @class */ (function () {
    function ProfesoresController() {
    }
    ProfesoresController.prototype.list = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var profesores;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('SELECT * FROM profesor')];
                    case 1:
                        profesores = _a.sent();
                        res.json(profesores);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfesoresController.prototype.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, profesor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM profesor WHERE id = ?', [id])];
                    case 1:
                        profesor = _a.sent();
                        if (profesor.length > 0) {
                            res.json(profesor[0]);
                        }
                        else {
                            res.status(404).json({ message: "El profesor no existe" });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfesoresController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var nuevoProfesor, profesor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        nuevoProfesor = {
                            nombre: req.body.nombre,
                            paterno: req.body.paterno,
                            materno: req.body.materno,
                            usuario: req.body.usuario,
                            password: bcrypt.hashSync(req.body.password, 10),
                            cedula: req.body.cedula
                        };
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM profesor WHERE usuario = ?', [nuevoProfesor.usuario])];
                    case 1:
                        profesor = _a.sent();
                        if (!(profesor.length > 0)) return [3 /*break*/, 2];
                        res.status(404).json({ message: "El nombre de usuario que quieres registrar ya existe" });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, database_1.default.query('INSERT INTO profesor set ?', [nuevoProfesor])];
                    case 3:
                        _a.sent();
                        res.json({ message: 'profesor creado' });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProfesoresController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, nuevoProfesor, profesor, profesor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        if (!req.body.password) return [3 /*break*/, 2];
                        nuevoProfesor = {
                            nombre: req.body.nombre,
                            paterno: req.body.paterno,
                            materno: req.body.materno,
                            usuario: req.body.usuario,
                            password: bcrypt.hashSync(req.body.password, 10),
                            cedula: req.body.cedula
                        };
                        return [4 /*yield*/, database_1.default.query('UPDATE profesor set ? WHERE id = ?', [nuevoProfesor, id])];
                    case 1:
                        profesor = _a.sent();
                        console.log(profesor);
                        res.json({ message: 'actualizando un profesor con cambio de pass' + id });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, database_1.default.query('UPDATE profesor set ? WHERE id = ?', [req.body, id])];
                    case 3:
                        profesor = _a.sent();
                        console.log(profesor);
                        res.json({ message: 'actualizando un profesor sin cambio de pass' + id });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProfesoresController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('DELETE FROM profesor WHERE id = ?', [id])];
                    case 1:
                        _a.sent();
                        res.json({ message: "El profesor fue eliminado" });
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProfesoresController;
}());
var profesoresController = new ProfesoresController();
exports.default = profesoresController;
