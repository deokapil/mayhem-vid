import { NextResponse } from "next/server";
import { getVideoList } from "@/lib/videos";

export async function GET() {
  const data = await getVideoList();
  console.log(data);
  return NextResponse.json(data);
}
