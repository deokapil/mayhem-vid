import { NextResponse } from "next/server";
import { getVideoList } from "@/lib/videos";
import { pusherServer } from "@/lib/pusher";

export async function GET(request) {
  // connect to pusher channel and get number of connected user
  // const { searchParams } = new URL(request.url);
  // const channel_name = searchParams.get("channel_name");
  // const channelUrl = `/channels/${channel_name}`;
  // console.log(channelUrl);
  // const attributes = "subscription_count";
  // const info = await pusherServer.get({
  //   path: channelUrl,
  //   params: { info: attributes },
  // });
  // const body = await info.json();
  // console.log(body);
  const data = { canConnect: true };
  return NextResponse.json(data);
}
