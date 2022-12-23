"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const featureSample_routes_1 = __importDefault(require("./src/features/featureSample/featureSample.routes"));
const store_routes_1 = __importDefault(require("./src/features/store/store.routes"));
exports.default = async (app) => {
    app.register(featureSample_routes_1.default, { prefix: '/featureSample' });
    app.register(store_routes_1.default, { prefix: '/store' });
};
