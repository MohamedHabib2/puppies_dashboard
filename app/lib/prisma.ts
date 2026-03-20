import { PrismaClient } from '../generated/prisma'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const prismaClientSingleton = () => {
  try {
    const url = process.env.DATABASE_URL;
    if (!url || url.includes("USER:PASSWORD")) {
       return null as any;
    }
    const pool = new Pool({ connectionString: url })
    const adapter = new PrismaPg(pool as any)
    return new PrismaClient({ adapter })
  } catch (err: any) {
    console.warn("Failed to initialize Prisma Client:", err?.message);
    return null as any;
  }
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
