import { AcademicLevel } from "./academiclevel";
import { DesiredWork } from "./desiredwork";
import { User } from "./User";

export interface Profiles {
  id: number;
  skill: string;
  numberYearsExperience:number;
  desiredSalary: string;
  desiredWorkingAddress:string;
  isDelete:any;
  users:User;

  acdemiclevel: AcademicLevel;
  desiredwork: DesiredWork;
}
