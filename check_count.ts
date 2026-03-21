import prisma from "./app/lib/prisma";

async function main() {
  const count = await (prisma as any).cityProgress.count();
  console.log("Total cities:", count);
}

main().catch(console.error);
