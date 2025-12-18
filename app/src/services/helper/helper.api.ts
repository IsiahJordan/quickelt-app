import Log from '@/utils/log'
import api from '@/services/api'
import { UploadProps, AccountProps } from '@/types/service'

export function getImage({ imageUrl }: UploadProps) {
  const log = Log("getImage");
  log.info("called");

  return `http://localhost:3000${imageUrl}`;
}

export async function postToken() {
  const log = Log("postToken");
  log.info("called");

  const result = await api.post("/resource/fetch/token", {}, { withCredentials: true });

  return result.data;
}
