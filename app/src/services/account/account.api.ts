import api from '@/services/api'
import Log from '@/utils/log'
import { AccountProps } from '@/types/service'

export async function postRegister({ email, username, password }: AccountProps) {
  const log = Log("postRegister");
  log.info("called");
  log.debug(`${email}, ${username}, ${password}`);

  const res = await api.post("/account/register", { email, username, password });

  return res.data;
}

export async function postLogin({ email, password }: AccountProps) {
  const log = Log("postLogin");
  log.info("called");
  log.debug(`${email}, ${password}`);

  const res = await api.post("/account/login", { email, password }, { withCredentials: true });

  return res.data;
}
