module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345678',
    database: 'prescription_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
};