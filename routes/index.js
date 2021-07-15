import {express} from 'express'
import admin_auth_router from 'routes/admin/authRouter'
import admin_router from './admin/adminRouter'


const app = express()


app.use('/admin/auth', admin_auth_router)
app.use('/district', admin_router)
app.use('/region', admin_router)
app.use('/district', admin_router)

export default app