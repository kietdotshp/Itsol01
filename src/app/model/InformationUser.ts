import { AcademicLevel } from "./academiclevel";
import { DesiredWork } from "./desiredwork";
import { Profiles } from "./profiles";
import { User } from "./User";

export interface InfomationUser{
  user: User;
  profile: Profiles;
  acdemiclevel: AcademicLevel;
  disireWork:DesiredWork;
};
