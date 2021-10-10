import connection  from '../config/db.js'
import { Admin } from '../Models/Admin.js'
import bcrypt from 'bcrypt'

const superAdminSeeder = async () => {

    try {

        const name = 'Emmanuel Oteng Wilson'

        const email = 'hagioswilson@gmail.com'

        const password = '123456'

        const hashedPassword = await bcrypt.hash(password, 10)

        if(hashedPassword)
        {
            console.log('new password is ', hashedPassword)

            console.log(connection.readyState)

            await connection

            if(connection.readyState === 1)
            {
                await Admin.create({name, email, password: hashedPassword})

                await connection.close()
            }
        }

    } catch (error) {

        console.log(error)
        
    }

}

await superAdminSeeder()