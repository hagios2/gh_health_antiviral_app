import {express} from 'express'
import admin_auth_router from 'routes/admin/authRouter'
import district_router from './admin/districtRouter'
import region_router from 'routes/admin/regionRouter'
import facility_router from 'routes/admin/facilityRouter'

const app = express()

app.use('/district', district_router)
app.use('/facility', facility_router)
app.use('/region', region_router)
app.use('/admin/auth', admin_auth_router)

export default app