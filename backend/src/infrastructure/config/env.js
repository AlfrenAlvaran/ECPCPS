import 'dotenv/config'

export const env = {
    port: process.env.PORT || 5000,
    database: process.env.MONGOOSE,
    development: process.env.NODE_ENV ,
    ip: process.env.IP
}

