// 取出 req.body，呼叫 service
import { Request, Response } from 'express'
import { UserService } from '../services/user.service'

export const UserController = {
  async register(req: Request, res: Response) {
    const { username, email, password } = req.body
    if (!username || !email || !password) return res.status(400).json({ message: '缺少必要欄位' })
    try {
      const user = await UserService.register({ username, email, password })
      return res.status(201).json(user)
    } catch (err: any) {
      if (err.code === 'USER_EXISTS') {
        return res.status(409).json({ message: '帳號或 Email 已存在' })
      }
      return res.status(500).json({ message: 'Server Error' })
    }
  },

  async login(req: Request, res: Response) {
    const { username, password } = req.body
    if (!username || !password) return res.status(400).json({ message: '缺少帳號或密碼' })
    try {
      const result = await UserService.login({ username, password })
      return res.status(200).json(result)
    } catch (err: any) {
      if (err.code === 'INVALID_CREDENTIALS')
        return res.status(401).json({ message: '帳號或密碼錯誤' })
      return res.status(500).json({ message: 'Server Error' })
    }
  }
}
