"use server";

import { createClient } from "@/libs/supabase-server";
import { redirect } from "next/navigation";

const origin = process.env.NEXT_PUBLIC_APP_URL;

export async function socialLogin() {
  const supabaseServer = createClient();

  const { error, data }: any = await supabaseServer.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/confirm`,
    },
  });

  console.log("the res", {
    error,
    data,
  });
  if (error) {
    redirect("/error");
  }
  redirect(data?.url, "replace" as any);
}
