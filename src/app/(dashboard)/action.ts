"use server";

import { createClient } from "@/libs/supabase-server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function logout() {
  const supabaseServer = await createClient();
  const { error }: any = await supabaseServer.auth.signOut();
  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/");
}
