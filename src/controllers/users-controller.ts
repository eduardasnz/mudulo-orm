import { Request, Response } from "express"
import { prisma } from "@/prisma"

class UsersController {
  async index(request: Request, response: Response) {
    const users = await prisma.user.findMany()

    return response.json(users)
  }

  async create(request: Request, response: Response) {
    const { name, email } = request.body
    
    await prisma.user.create({
      data: {
        name,
        email
      }
    })

    return response.status(201).json({ message: "created user", name, email})
  }

  async show(request: Request, response: Response) {
    const { id } = request.params

    const user = await prisma.user.findUnique({
      where: { id: request.params.id }
    })

    return response.json(user)
  }
}

export { UsersController }
