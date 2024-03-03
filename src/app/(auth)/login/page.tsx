"use server";

import { Button } from "@radix-ui/themes";
import { socialLogin } from "./action";

const Login = () => {
  return (
    <form action={socialLogin}>
      <Button>Google Login</Button>
    </form>
  );
};

export default Login;
