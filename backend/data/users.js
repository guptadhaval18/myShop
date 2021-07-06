import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Dhaval Gupta',
        email: 'dhaval@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Parul Gupta',
        email: 'parul@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users