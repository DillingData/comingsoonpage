// src/app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const emails = await prisma.signUp.findMany();
    return NextResponse.json(emails);
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const { emailAddress, timeStamp } = await request.json();

  if (!emailAddress || !timeStamp) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }

  try {
    const newPost = await prisma.signUp.create({
      data: {
        emailAddress,
        timeStamp,

      },
    });
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
