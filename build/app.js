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
const express_1 = __importDefault(require("express"));
// const path = require('path')
require("reflect-metadata");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const router_1 = __importDefault(require("./routers/router"));
const db_1 = require("./database/db");
const app = (0, express_1.default)();
// app.set('port', process.env.PORT || 4000)
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: "GET, POST, PUT"
};
app.use((0, cors_1.default)(corsOptions));
app.get('/', (req, res) => {
    app.use(express_1.default.static(path_1.default.resolve(__dirname, 'client', 'public')));
    res.sendFile(path_1.default.resolve(__dirname, 'client', 'public', 'index.html'));
});
app.use('/canciones', router_1.default);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield db_1.AppDataSource.initialize();
        console.log('Database is connected');
        app.listen(process.env.PORT || 4000, () => {
            console.log("http://localhost:" + process.env.PORT || 4000);
        });
    });
}
main();
