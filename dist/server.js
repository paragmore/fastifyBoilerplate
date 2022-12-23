"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const router_1 = __importDefault(require("./router"));
const under_pressure_1 = __importDefault(require("@fastify/under-pressure"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const cors_1 = __importDefault(require("@fastify/cors"));
const PORT = parseInt(process.env.PORT || "8000");
const app = (0, fastify_1.default)({ logger: true });
const underPressureConfig = () => {
    return {
        healthCheck: async function () {
            // TODO: Add database connection check
            return true;
        },
        message: "Under Pressure 😯",
        exposeStatusRoute: "/status",
        healthCheckInterval: 5000,
    };
};
const swaggerConfig = () => {
    return {
        routePrefix: "/documentation",
        swagger: {
            info: {
                title: "Fastify Boilerplate",
                description: "A full blown production ready boilerplate to build APIs with Fastify",
                version: "1.0.0",
            },
            consumes: ["application/json"],
            produces: ["application/json"],
        },
        exposeRoute: true,
        host: "localhost",
    };
};
app.register(cors_1.default);
app.register(under_pressure_1.default, underPressureConfig());
app.register(swagger_1.default, swaggerConfig());
app.register(require('@fastify/swagger-ui'), {
    routePrefix: '/documentation',
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false
    },
    staticCSP: true,
    transformSpecificationClone: true
});
app.register(router_1.default);
app.listen(PORT, (error, address) => {
    if (error) {
        app.log.error(error);
        process.exit(1);
    }
    app.log.info(`server listening on ${address}`);
});
