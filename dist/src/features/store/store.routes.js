"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiHelper_1 = require("./../../helpers/ApiHelper");
const store_controller_1 = require("./store.controller");
exports.default = async (app) => {
    const storeController = new store_controller_1.StoreController();
    // app.route({
    //   url: "/",
    //   method: "GET",
    //   handler: (request, reply) => {
    //     reply.send("Hello");
    //   },
    // });
    //   app.get<{ Querystring: IQuerystring; Headers: IHeaders; Reply: IReply }>(
    //     "/hello",
    //     {},
    //     async (request, reply) => {
    //       reply.send("Hello");
    //     }
    //   );
    ApiHelper_1.ApiHelper.get(app, "/", storeController.createStoreByPhone);
    //   app.post('/', {},  )
};
