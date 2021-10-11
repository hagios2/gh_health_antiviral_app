import express from 'express'
import admin_router from './admin/adminRouter.js'
import admin_auth_router from './admin/authRouter.js'
import facilitator_auth_router from './facilitator/authRouter.js'

const app = express()

app.use('/admin/auth', admin_auth_router)

app.use('/admin', admin_router)

app.use('/', facilitator_auth_router)

// app.use('/facility', admin_router)

export default app