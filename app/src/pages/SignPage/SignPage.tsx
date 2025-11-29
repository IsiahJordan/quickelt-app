import SignUp from './SignUp.module'
import Brand from '@/components/Brand'
import Log from '@/utils/log'
import { useMediaQuery } from 'react-responsive'

export default function SignPage() {
  const isBigScreen = useMediaQuery({query: '(min-width: 640px)'});
  const log = Log("SignPage");
  log.info("called");
  
  const display = isBigScreen ? "large" : "small";
  log.debug(display);

  return (
    <div className="sm:max-w-[40vw] h-full sm:mx-auto sm:min-w-150 max-sm:flex max-sm:flex-col">
      { display !== "large" && <Brand variant="full" style="min-h-[166px]"/> }
      <SignUp variant={display}/>
    </div>
  );
}
