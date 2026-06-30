// 執行商業邏輯、寫入 DB
import prisma from '../prisma'

const hashPassword = async (raw: string) => raw // TODO: bcrypt.hash
const comparePassword = async (raw: string, hashed: string) => raw === hashed // TODO: bcrypt.compare
const signToken = (userId: number) => `fake-token-${userId}` // TODO: jwt.sign

export const UserService = {
  async register(data: { username: string; email: string; password: string }) {

    const exists = await prisma.user.findFirst({
      where: { OR: [{ username: data.username }, { email: data.email }] }
    })
    if (exists) throw { code: 'USER_EXISTS' }

    const user = await prisma.user.create({
      data: { ...data, password: await hashPassword(data.password) }
    })
    return { id: user.id, username: user.username, email: user.email } // 不回傳 password
  },

  async login(data: { username: string; password: string }) {
    const user = await prisma.user.findUnique({ where: { username: data.username } })
    if (!user) throw { code: 'INVALID_CREDENTIALS' }

    const ok = await comparePassword(data.password, user.password)
    if (!ok) throw { code: 'INVALID_CREDENTIALS' }

    return { token: signToken(user.id), user: { id: user.id, username: user.username } }
  }
}
