// // id NUMBER(4) NOT NULL  PRIMARY KEY,
// // full_name VARCHAR(50) NOT NULL,
// // email VARCHAR(50) NOT NULL UNIQUE ,
// // user_name VARCHAR(20) NOT NULL UNIQUE,
// // password VARCHAR(20) NOT NULL,
// // phone_number  VARCHAR(20) NOT NULL UNIQUE,
// // home_town VARCHAR(100) ,
// // gender VARCHAR(100) ,
// // birth_day DATE NOT NULL ,
// // avatar VARCHAR(100),
// // user_status INTEGER NOT NULL,
// // is_delete INTEGER NOT NULL
// export class User {
export interface User {
  id: number;
  birthDay: any;
  email: string;
  fullName: string;
  gender: string;
  homeTown: any;
  isactive: any;
  isDelete: any;
  password: any;
  phoneNumber: string;
  userName?: any;
}

// constructor(id: any, full_name: string, email: string, username: string, password: string, home_town: string, gender: string, birth_day: string, lastAccess: any, phoneNumber: number, departmentName: string, leaderId: number, fbLink: string, faculty: string, education: string, birthday: any, isLeader: any, isManager: any, skypeAcc: string, university: string, userType: string, graduationYear: number) {
//   this.id = id;
//   this.username = username;
//   this.password = password;
//   this.address = address;
//   this.email = email;
//   this.createdDate = createdDate;
//   this.fullName = fullName;
//   this.actived = actived;
//   this.lastAccess = lastAccess;
//   this.phoneNumber = phoneNumber;
//   this.departmentName = departmentName;
//   this.leaderId = leaderId;
//   this.fbLink = fbLink;
//   this.faculty = faculty;
//   this.education = education;
//   this.birthday = birthday;
//   this.isLeader = isLeader;
//   this.isManager = isManager;
//   this.skypeAcc = skypeAcc;
//   this.university = university;
//   this.userType = userType;
//   this.graduationYear = graduationYear;
// }
