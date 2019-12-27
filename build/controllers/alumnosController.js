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
var AlumnosController = /** @class */ (function () {
    function AlumnosController() {
    }
    AlumnosController.prototype.list = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var alumnos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('SELECT * FROM alumno')];
                    case 1:
                        alumnos = _a.sent();
                        res.json(alumnos);
                        return [2 /*return*/];
                }
            });
        });
    };
    AlumnosController.prototype.listbyprofe = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, alumnos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM alumno WHERE id_profesor = ?', [id])];
                    case 1:
                        alumnos = _a.sent();
                        res.json(alumnos);
                        return [2 /*return*/];
                }
            });
        });
    };
    AlumnosController.prototype.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, alumno;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM alumno WHERE id = ?', [id])];
                    case 1:
                        alumno = _a.sent();
                        if (alumno.length > 0) {
                            res.json(alumno[0]);
                        }
                        else {
                            res.status(404).json({ message: "El alumno no existe" });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AlumnosController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var nuevoAlumno, alumno;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        nuevoAlumno = {
                            nombre: req.body.nombre,
                            paterno: req.body.paterno,
                            materno: req.body.materno,
                            grado: req.body.grado,
                            grupo: req.body.grupo,
                            usuario: req.body.usuario,
                            password: bcrypt.hashSync(req.body.password, 10),
                            ortografia: 0,
                            lectura: 0,
                            gramatica: 0,
                            id_profesor: req.body.id_profesor
                        };
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM alumno WHERE usuario = ?', [nuevoAlumno.usuario])];
                    case 1:
                        alumno = _a.sent();
                        if (!(alumno.length > 0)) return [3 /*break*/, 2];
                        res.status(404).json({ message: "El nombre de usuario que quieres registrar ya existe" });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, database_1.default.query('INSERT INTO alumno set ?', [nuevoAlumno])];
                    case 3:
                        _a.sent();
                        res.json({ message: 'alumno creado' });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AlumnosController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, nuevoAlumno, alumno, alumno;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        if (!req.body.password) return [3 /*break*/, 2];
                        nuevoAlumno = {
                            nombre: req.body.nombre,
                            paterno: req.body.paterno,
                            materno: req.body.materno,
                            grado: req.body.grado,
                            grupo: req.body.grupo,
                            usuario: req.body.usuario,
                            password: bcrypt.hashSync(req.body.password, 10),
                            ortografia: 0,
                            lectura: 0,
                            gramatica: 0,
                            id_profesor: req.body.id_profesor
                        };
                        return [4 /*yield*/, database_1.default.query('UPDATE alumno set ? WHERE id = ?', [nuevoAlumno, id])];
                    case 1:
                        alumno = _a.sent();
                        console.log(alumno);
                        res.json({ message: 'actualizando un alumno con cambio de pass ' + id });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, database_1.default.query('UPDATE alumno set ? WHERE id = ?', [req.body, id])];
                    case 3:
                        alumno = _a.sent();
                        console.log(alumno);
                        res.json({ message: 'actualizando un alumno sin cambio de pass ' + id });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AlumnosController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('DELETE FROM alumno WHERE id = ?', [id])];
                    case 1:
                        _a.sent();
                        res.json({ message: "El alumno fue eliminado" });
                        return [2 /*return*/];
                }
            });
        });
    };
    return AlumnosController;
}());
var alumnosController = new AlumnosController();
exports.default = alumnosController;
