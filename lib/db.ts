import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function test() {
  const token = await db.sMSToken.findUnique({
    where: {
      id: 1,
    },
    include: {
      user: true,
    },
  });
  console.log(token);
}
test();

// async function test() {
//   const token = await db.sMSToken.create({
//     data: {
//       token: "12121212",
//       user: {
//         connect: {
//           id: 1,
//         },
//       },
//     },
//   });
//   console.log(token);
// }
// test();

// async function test() {
//   const user = await db.user.create({
//     data: {
//       username: "test",
//     },
//   });
//   console.log(user);
// }

// async function test() {
//   const users = await db.user.findMany({
//     where: {
//       username: {
//         contains: "est",
//       },
//     },
//   });
//   console.log(users);
// }

// test();

export default db;
