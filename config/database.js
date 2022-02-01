// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: "postgres",
//         host: env("DATABASE_HOST", "172.17.0.1"),
//         port: env.int("DATABASE_PORT", 5432),
//         database: env("DATABASE_NAME"),
//         username: env("DATABASE_USERNAME"),
//         password: env("DATABASE_PASSWORD"),
//         schema: env("DATABASE_SCHEMA", "public"),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });
module.exports = ({ env }) => ({
	defaultConnection: "default",
	connections: {
		default: {
			connector: "bookshelf",
			settings: {
				client: "sqlite",
				filename: env("DATABASE_FILENAME", ".tmp/data.db"),
			},
			options: {
				useNullAsDefault: true,
			},
		},
	},
});
