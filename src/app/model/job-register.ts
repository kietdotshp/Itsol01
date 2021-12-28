import { User } from './User';
import { Profiles } from './profiles';
import { Jobs } from './job.model';
import { JobRegisterStatus } from './job-register-status';
export interface JobRegister {
  id?: number;
  applicationTime?: any;
  cvFile?: any,
  isDelete?: any,
  status?: any,
  jobs: Jobs,
  jobRegisterStatus: JobRegisterStatus,
  user: User,
  profiles: Profiles,
  reason: string,
  methodWork: string
}
