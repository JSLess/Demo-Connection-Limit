
import { Application , Router } from 'Oak'
import { handleConnection } from './Connection.tsx'
import { servePage } from './Page.tsx'


const app = new Application({
    logErrors : true
})


const router = new Router

router.get('/Connection',handleConnection)
router.get('/',servePage)


app.use(router.routes())
app.use(router.allowedMethods())


await app.listen({ port : 8000 })

