import { appLogger, errorHandler } from "./middleware.js"
import express from 'express'
import { userRoutes } from "./routes.js"
const app = express()


// App Level Middleware
app.use(express.json())
app.use(appLogger)
app.use(errorHandler)


// Routes
app.use('/user', userRoutes())
//app.use('/task', taskRoutes)

app.listen(8080, () => console.log('Server running on http://localhost:3000'));

