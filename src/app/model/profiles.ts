import { AcademicLevel } from "./academiclevel";
import { DesiredWork } from "./desiredwork";
import { User } from "./User";

export interface Profiles {
  id: number;
  skill: string;
  numberYearsExperience: number;
  desiredSalary: number;
  desiredWorkingAddress: string;
  isDelete: any;
  user: User;
  acdemiclevel: AcademicLevel;
  desiredwork: DesiredWork;
}
