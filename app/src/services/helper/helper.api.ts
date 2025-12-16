import Log from '@/utils/log'
import { UploadProps } from '@/types/service'

export function getImage({ imageUrl }: UploadProps) {
  const log = Log("getImage");
  log.info("called");

  return `http://localhost:3000${imageUrl}`;
}
