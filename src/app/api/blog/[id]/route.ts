import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  const id = req.url.split("/api/blog/")[1];

  let { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) {
    notFound();
  }

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}

export async function DELETE(req: Request, res: NextApiResponse) {
  const id = req.url.split("/api/blog/")[1];

  let { error: deleteError } = await supabase
    .from("posts")
    .delete()
    .eq("id", id);

  if (deleteError) {
    return NextResponse.json(deleteError);
  }

  return NextResponse.json(null, { status: 204 });
}
