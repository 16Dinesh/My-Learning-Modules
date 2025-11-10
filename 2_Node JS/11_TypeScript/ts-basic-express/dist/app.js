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
const User_1 = require("./models/User");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
//middleware -> add startTime to request
app.use((req, res, next) => {
    req.startTime = Date.now();
    next();
});
app.get("/", (req, res) => {
    res.send("Hello. Typescript with express");
});
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.User.find();
    }
    catch (e) {
        res.status(400).json({ message: "Some error occured!" });
    }
}));
app.post("/user", (req, res) => {
    const { name, email } = req.body;
    res.json({
        message: `User created ${name}-${email}`,
    });
});
//users based on id
app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        userId: id,
    });
});
app.listen(port, () => {
    console.log(`Server is now running on port ${port}`);
});
