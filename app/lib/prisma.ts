import { PrismaClient } from '../generated/prisma'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const prismaClientSingleton = () => {
  const url = process.env.DATABASE_URL;
  if (!url || url.includes("USER:PASSWORD")) {
    console.warn("❌ DATABASE_URL is missing or invalid!");
    return null;
  }

  try {
    const pool = new Pool({ connectionString: url })
    const adapter = new PrismaPg(pool)
    return new PrismaClient({ adapter })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("❌ Failed to initialize Prisma Client:", message);
    return null;
  }
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton> | undefined;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

