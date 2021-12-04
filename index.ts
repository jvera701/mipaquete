export const config = {
  port: process.env.PORT,
  dbConnectionString: process.env.DB_CONNECTION_STRING as string,
  apiKey: process.env.API_KEY as string,
}
