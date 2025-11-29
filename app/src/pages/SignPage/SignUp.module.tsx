import Form from '@/components/Form'
import Icon from '@/components/Icon'
import Brand from '@/components/Brand'
import Button from '@/components/Button'

import Log from '@/utils/log'
import { MediaQueryProps } from '@/types/page.d'
import { useState } from 'react'
import { useRegister } from '@/hooks/useAccount'
import useNav from '@/hooks/useNav'

export default function SignUp({ variant }: MediaQueryProps) {
  const log = Log("SignUp");
  log.info("called");
  log.debug(variant);

  const titleColor = variant === "large" ? "text-default" : "text-alt";
  const { setQuery } = useNav();
  const [inputArray, setInputArray] = useState<Array<string>>(Array(4));
  const registerMutation = useRegister();

  const handleSubmit = async () => {
    log.info("data submit");
    log.debug(inputArray);
    
    const [email, username, password, repassword] = inputArray;
    
    if (password !== repassword) {
      log.danger("wrong password");
    }
    else {
      log.info("sending data");
      
      registerMutation.mutateAsync(
        { email, username, password },
        {
          onSuccess: (data: object) => {
            log.info("successful register");
            log.debug(data);
          }
        }
      );
    }
  }

  return (
    <Form
      variant={variant}
      labels={["Email", "Username", "Password", "Repassword"]}
      types={["email", "text", "password", "password"]}
      topChild={(
        <>
          { variant === "large" && <Brand variant="full"/> }
          <div className={"text-[24px] tracking-wide font-medium " + titleColor}>
            Create your account
          </div>
        </>
      )}
      bottomChild={(
        <>
          <Button
            variant="primary"
            label="SIGN UP"
            style="mb-[9px]"
            onClick={handleSubmit}
          /> 
          <Button
            variant="secondary"
            label="CONTINUE WITH LOGIN"
            onClick={() => {
              log.info("direct to login");
              setQuery({form: "in"});
            }}
          /> 
        </>
      )}
      leftIcons={[<Icon variant="mail"/>, <Icon variant="profile"/>, <Icon variant="lock"/>, <Icon variant="lock"/>]}
      rightIcons={[undefined, undefined, <Icon variant="neye"/>, <Icon variant="neye"/>]}
      setter={setInputArray}
      style="flex-1"
    />
  );
}
