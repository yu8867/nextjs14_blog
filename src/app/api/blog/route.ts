import { supabase } from "@/utils/supabaseClient";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextResponse) {
  let { data, error } = await supabase.from("posts").select("*");

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: Request, res: NextApiResponse) {
  const { id, title, content } = await req.json();

  const { data, error } = await supabase
    .from("posts")
    .insert([
      {
        id,
        title,
        content,
        tag: "Technology",
        createdAt: new Date().toISOString(),
      },
    ])
    .select();

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 201 });
}
