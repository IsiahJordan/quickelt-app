import api from '@/services/api'
import Log from '@/utils/log'
import { AccountProps } from '@/types/service'

export async function postRegister({ email, username, password } :AccountProps) {
  const log = Log("postRegister");
  log.info("called");
  log.debug(`${email}, ${username}, ${password}`);

  const res = await api.post("/account/register", { email, username, password });

  return res.data;
}
