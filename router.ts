import { FastifyInstance } from "fastify"
import featureSampleRoutes from './src/features/featureSample/featureSample.routes'
import storeRoutes from './src/features/store/store.routes'
export default async(app: FastifyInstance)=>{
    app.register(featureSampleRoutes, {prefix:'/featureSample'})
    app.register(storeRoutes, {prefix:'/store'})
}