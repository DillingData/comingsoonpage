/*
import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton = () => {
    return new PrismaClient();
};

declare global {
    var prisma: undefined | ReturnType<typeof PrismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? PrismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
*/

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma };
