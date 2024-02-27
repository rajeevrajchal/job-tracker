"use server";

import supabaseServer from "@/libs/supabase-client";
import { redirect } from "next/navigation";

const origin = process.env.NEXT_PUBLIC_APP_URL;

export async function socialLogin(provider?: string) {
  const { error }: any = await (
    await supabaseServer
  ).auth.signInWithOAuth({
    provider: (provider as any) || "google",
    options: {
      redirectTo: `${origin}/auth/confirm`,
    },
  });

  if (error) {
    redirect("/error");
  }
}
