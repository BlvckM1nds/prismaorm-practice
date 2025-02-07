import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 99,
      userPreference: {
        create: {
          emailUpdates: true
        }
      }
    },
    include: {
      userPreference: true
    }
  });

  console.log(user);
};

main()
  .catch(e => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });