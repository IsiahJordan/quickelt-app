import Log from '@/utils/log'
import restApi from '@/services/api.rest.ts'
import { UploadProps } from '@/types/service'

export function getImage({ imageUrl }: UploadProps) {
  const log = Log("getImage");
  log.info("called");
  const filename = imageUrl.split("/").pop();

  log.debug(filename);
  return `http://127.0.0.1:8000/rest/files/${filename}`;
  
}
