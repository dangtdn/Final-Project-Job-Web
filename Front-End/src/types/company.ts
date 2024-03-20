export interface Company {
  _id: string;
  companyName: string;
  companyTagline: string;
  companyEmail: string;
  phoneNumber: string;
  companyWebsite: string;
  socialLink: {
    linkedin: string;
    facebook: string;
    twitter: string;
  };
  logo: string;
}

export interface CompanyDetail extends Company {
  status: {
    isPublished: boolean;
    isApproved: boolean;
    isActive: boolean;
  };
  locationMap: {
    latitude: string;
    longitude: string;
  };
  user: string;
  category: string;
  videoLink: string;
  eatablishedDate: string;
  avarageSalary: string;
  companySize: string;
  description: string;
  location: string;
  logoCloudinary_id: string;
  thumb: string;
  thumbCloudinary_id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface GetCompaniesResponse {
  success: boolean;
  companies: CompanyDetail[];
  page: number;
  pages: number;
  count: number;
}

export type PostCompanyRequest = Omit<CompanyDetail, "_id">;
export type PutCompanyRequest = CompanyDetail;
