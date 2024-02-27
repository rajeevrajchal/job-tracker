"use server";

import supabaseServer from "@/libs/supabase-server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function logout() {
  console.log("logout");
  const { error }: any = await (await supabaseServer).auth.signOut();
  console.log(error, "error");
  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/");
}
