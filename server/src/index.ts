import 'dotenv/config'
import express, { Request, Response } from 'express'
import cors from 'cors'
import prisma from './prisma'
import { FavoriteLocation } from './types'

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

let favorites: FavoriteLocation[] = []

app.get('/api/favorites', (req: Request, res: Response) => {
  res.json(favorites)
})
app.post('/api/favorites', (req: Request, res: Response) => {
  const { cityName, latitude, longitude, weatherCode, countryCode, minTemp, maxTemp } = req.body

  if (!cityName || !weatherCode || latitude === 0 || longitude === 0) {
    return res.status(400).json({ message: 'No Data' })
  }

  const newLocation: FavoriteLocation = {
    cityName,
    latitude,
    longitude,
    weatherCode,
    countryCode,
    minTemp,
    maxTemp
  }
  favorites.push(newLocation)
  return res.status(200).json(favorites)
})
app.delete('/api/favorites/:cityName', (req: Request, res: Response) => {
  const { cityName } = req.params
  const favoriteLength = favorites.length
  if (!cityName) {
    return res.status(400).json({ message: 'cityName is required' })
  }
  favorites = favorites.filter(location => location.cityName !== cityName)
  if (favorites.length === favoriteLength) {
    return res.status(404).json({ message: 'Favorite location not found' })
  }
  return res.status(200).json({ message: 'Deleted' })
})

// 監聽 port
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`)
})
