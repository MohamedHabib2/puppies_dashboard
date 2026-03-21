import prisma from "./app/lib/prisma";

async function main() {
  const allRows = await (prisma as any).cityProgress.findMany();
  console.log("Total rows:", allRows.length);
  if (allRows.length > 0) {
    console.log("Sample row:", JSON.stringify(allRows[0], null, 2));
  }
  
  // Check for duplicate cities with different dates (though schema says unique)
  const cityCounts = await (prisma as any).cityProgress.groupBy({
    by: ['city'],
    _count: {
      city: true
    }
  });
  console.log("Unique cities:", cityCounts.length);
}

main().catch(console.error);
