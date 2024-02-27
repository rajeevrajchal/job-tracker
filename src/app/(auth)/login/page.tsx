import { Button } from "@radix-ui/themes";
import { socialLogin } from "./action";

const Login = () => {
  return (
    <Button formAction={() => socialLogin("google")} type="submit">
      Google Login
    </Button>
  );
};

export default Login;
