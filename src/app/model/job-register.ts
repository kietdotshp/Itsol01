import { User } from './User';
import { Profiles } from './profiles';
import { Jobs } from './job.model';
import { JobStatus } from './job-status';
export interface JobRegister {
  data: any;
  id?: number;
  applicationTime?: any;
  cvFile?: any,
  isDelete?: any,
  status?: any,
  jobs: Jobs,
  jobStatus: JobStatus,
  user: User,
  profiles: Profiles
}
