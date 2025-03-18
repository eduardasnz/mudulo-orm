import { prisma } from "@/prisma";

async function seed(){
  await prisma.user.createMany({
    data: [
      {
        name: "Fernanda Kipper",
        email: "fernandakipper@gmail.com"
      },
      {
        name: "Rodrigo Gonçalves",
        email: "rodrigaooo@gmail.com"
      }
    ]
  })
}

seed().then(() => {
  console.log("database seeded!")
  prisma.$disconnect()
})