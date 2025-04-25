import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function POST(req: NextRequest) {
  try {
    const { id, password } = await req.json();
    const account = await prisma.user.create({
      data: { id, password },
    });
    return NextResponse.json({ id: id, password: password }, { status: 201 });
  } catch (e: any) {
    if(e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return NextResponse.json({error:"The account already exists"}, {status:409});
      }
    }
    else {
      return NextResponse.json({error:"Unhandled API error"}, {status:500})
    }
  }
}
