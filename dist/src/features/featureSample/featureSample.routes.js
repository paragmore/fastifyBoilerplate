"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async (app) => {
    // app.route({
    //   url: "/",
    //   method: "GET",
    //   handler: (request, reply) => {
    //     reply.send("Hello");
    //   },
    // });  
    app.get('/hello', {}, (request, reply) => {
        reply.send("Hello");
    });
};
