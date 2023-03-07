import express from 'express'
import { Request, Response, Express } from 'express'

const app: Express = express()
const port: number = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Application works!')
})

export const server = app.listen(3000, () => {
  console.log(`Application started on http://localhost:${port}`)
})