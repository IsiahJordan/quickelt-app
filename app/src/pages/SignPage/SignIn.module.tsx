import Form from '@/components/Form'
import Icon from '@/components/Icon'
import Brand from '@/components/Brand'
import Button from '@/components/Button'

import Log from '@/utils/log'
import { MediaQueryProps } from '@/types/page.d'
import { useState } from 'react'
import { useLogin } from '@/hooks/useAccount'
import useNav from '@/hooks/useNav'

export default function SignIn({ variant }: MediaQueryProps) {
  const log = Log("SignIn");
  log.info("called");
  log.debug(variant);

  const titleColor = variant === "large" ? "text-default" : "text-alt";
  const [inputArray, setInputArray] = useState<Array<string>>(Array(2));
  const loginMutation = useLogin();
  const { goTo, setQuery } = useNav();

  const handleSubmit = async () => {
    log.info("data submit");
    log.debug(inputArray);
    
    const [email, password] = inputArray;
    
    log.info("login with data");
    loginMutation.mutateAsync(
      { email, password },
      {
        onSuccess: (data: object) => {
          log.info("successful register");
          log.debug(JSON.stringify(data));
          goTo("quiz");
        }
      }
    );
  }

  return (
    <Form
      variant={variant}
      labels={["Email", "Password"]}
      types={["email", "password"]}
      topChild={(
        <>
          { variant === "large" && <Brand variant="full"/> }
          <div className={"text-[24px] tracking-wide font-medium " + titleColor}>
            Welcome Back 
          </div>
        </>
      )}
      bottomChild={(
        <div className="py-4">
          <Button
            variant="primary"
            label="SIGN IN"
            style="mb-4"
            onClick={handleSubmit}
          /> 
          <Button
            variant="secondary"
            label="CREATE ACCOUNT"
            onClick={() => {
              log.info("direct to login");
              setQuery({form: "up"});
            }}
          /> 
        </div>
      )}
      leftIcons={[<Icon variant="mail"/>, <Icon variant="lock"/>]}
      rightIcons={[undefined, <Icon variant="neye"/>]}
      setter={setInputArray}
      style="flex-1 max-w-[528px] m-auto"
    />
  );
}
