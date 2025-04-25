import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "ID를 입력하세요." }, { status: 400 });
  }
  const user = await prisma.user.findUnique({
    where: { id },
  });
  if (!user) {
    return NextResponse.json(
      { message: "ID가 존재하지 않습니다." },
      { status: 404 }
    );
  }
  return NextResponse.json(user);
}
