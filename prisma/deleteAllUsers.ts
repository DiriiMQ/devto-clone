const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Delete all users
  const deleteUsers = await prisma.user.deleteMany({});
  console.log(`Deleted ${deleteUsers.count} users`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });