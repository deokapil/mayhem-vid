import { NextResponse } from "next/server";
import { getVideoList } from "@/lib/videos";

export async function GET() {
  const data = await getVideoList();
  return NextResponse.json(data);
}
