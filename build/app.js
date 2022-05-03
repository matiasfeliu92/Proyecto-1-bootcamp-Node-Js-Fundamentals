"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const path = require('path')
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
// app.set('view engine', 'pug') 
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/', require('./routers/router'));
app.listen(app.get('port'), () => {
    console.log("http://localhost:" + app.get('port'));
});
