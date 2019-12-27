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
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var SECRET_KEY = 'secretkey123456';
var database_1 = __importDefault(require("../database")); //se conecta a la base de datos
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (req, res) {
        res.send('index');
    };
    IndexController.prototype.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var usuario, password, expiresIn, admin, profesor, alumno, accessToken, dataUser, accessToken, dataUser, accessToken, dataUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usuario = req.body.usuario;
                        password = req.body.password;
                        expiresIn = 24 * 60 * 60;
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM administrador WHERE usuario = ?', [usuario])];
                    case 1:
                        admin = _a.sent();
                        if (!(admin.length === 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM profesor WHERE usuario = ?', [usuario])];
                    case 2:
                        profesor = _a.sent();
                        if (!(profesor.length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM alumno WHERE usuario = ?', [usuario])];
                    case 3:
                        alumno = _a.sent();
                        if (alumno.length === 0) {
                            res.status(400).json({
                                ok: false,
                                err: {
                                    message: 'Usuario o contraseña incorrectos'
                                }
                            });
                        }
                        else {
                            //console.log(alumno[0].password);
                            if (!bcrypt.compareSync(password, alumno[0].password)) {
                                res.status(400).json({
                                    ok: false,
                                    err: {
                                        message: 'Usuario o contraseña incorrectos'
                                    }
                                });
                            }
                            else {
                                accessToken = jwt.sign({ id: alumno[0].id }, SECRET_KEY, { expiresIn: expiresIn });
                                dataUser = {
                                    ok: true,
                                    usuario: alumno[0],
                                    rol: 3,
                                    accessToken: accessToken,
                                    expiresIn: expiresIn
                                };
                                res.send({ dataUser: dataUser });
                            }
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        if (!bcrypt.compareSync(password, profesor[0].password)) {
                            res.status(400).json({
                                ok: false,
                                err: {
                                    message: 'Usuario o contraseña incorrectos'
                                }
                            });
                        }
                        else {
                            accessToken = jwt.sign({ id: profesor[0].id }, SECRET_KEY, { expiresIn: expiresIn });
                            dataUser = {
                                ok: true,
                                usuario: profesor[0],
                                rol: 2,
                                accessToken: accessToken,
                                expiresIn: expiresIn
                            };
                            res.send({ dataUser: dataUser });
                        }
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        if (!bcrypt.compareSync(password, admin[0].password)) {
                            res.status(400).json({
                                ok: false,
                                err: {
                                    message: 'Usuario o contraseña incorrectos'
                                }
                            });
                        }
                        else {
                            accessToken = jwt.sign({ id: admin[0].id }, SECRET_KEY, { expiresIn: expiresIn });
                            dataUser = {
                                ok: true,
                                usuario: admin[0],
                                rol: 1,
                                accessToken: accessToken,
                                expiresIn: expiresIn
                            };
                            res.send({ dataUser: dataUser });
                        }
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return IndexController;
}());
var indexController = new IndexController();
exports.default = indexController;
