import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  const category = req.url.split("/api/category/")[1];

  let { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("tag", category);

  if (!data) {
    notFound();
  }

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}
