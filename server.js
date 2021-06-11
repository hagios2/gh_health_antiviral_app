import {express} from 'express'
import {cors} from 'cors'
import routes from 'routes/index.js'

const app = express()

app.use(cors())

app.use(express.json())

app.use('api', routes)


const PORT  = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))