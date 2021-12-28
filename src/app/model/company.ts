export interface Company {
  id: number;
  name: string;
  email: string;
  hotLine: string;
  dateIncorporation: Date;
  taxCode: number;
  taxDate:Date;
  taxPlace:string;
  headOffice: string;
  numberStaff:string;
  linkWeb:any;
  description?:any;
  avatar?:any;
  backdropImg?:any;
  isDelete?:any;
}


// export class company {

  // id NUMBER NOT NULL,
  // name  VARCHAR(200) NOT NULL,
  // email VARCHAR(100) NOT NULL,
  // hot_line VARCHAR(100) NOT NULL,
  // date_incoporation DATE NOT NULL, -- ngày thành lập công ty
  // tax_code VARCHAR(100) NOT NULL,
  // tax_date DATE NOT NULL,-- Ngày cấp mã số thuế
  // tax_place VARCHAR(50) NOT NULL, -- Nơi cấp mã số thuế
  // head_office VARCHAR(50) NOT NULL, -- trụ sở chính
  // number_staff INTEGER NOT NULL, -- số lượng nhân viên
  // link_web VARCHAR(50) NOT NULL, -- trụ sở chính
  // description VARCHAR(50) NOT NULL, -- mô tả công ty
  // avatar VARCHAR(50) NOT NULL, -- ảnh đại diện
  // backdrop_img VARCHAR(50) NOT NULL, -- ảnh bìa
  // is_delete INTEGER NOT NULL,



// }
