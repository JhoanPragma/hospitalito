module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345678',
    database: 'medical_history_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
};