import { FastifyInstance } from "fastify";
import { ApiHelper } from "./../../helpers/ApiHelper
import { StoreController } from "./store.controller";

interface IQuerystring {}
interface IHeaders {}

interface IReply {
  code: number;
  message: string;
  body: any;
}
export default async (app: FastifyInstance) => {
    const storeController = new StoreController();
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

  ApiHelper.get<{ body: string }, {}, {}>(app, "/", storeController.createStoreByPhone);
  //   app.post('/', {},  )
};
