import { Company } from "./company";

export interface Job {
  _id: string;
  user: string;
  company: Company;
  status: {
    isApproved: boolean;
    isPublished: boolean;
    isFeatured: boolean;
    isActive: boolean;
  };
  jobTitle: string;
  location: string;
  region: string;
  jobTypes: string[];
  category: string;
  specialTags: string[];
  jobDescription: string;
  email: string;
  jobExperience: string;
  applyDeadline: string;
  hourlyrate: {
    minimum: number;
    maximum: number;
  };
  salary: {
    minimum: number;
    maximum: number;
  };
  applyLink: string;
  expireAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface GetJobsResponse {
  success: boolean;
  jobs: Job[];
}

export interface PostJobRequest {
  user: string;
  company: Company;
  status: {
    isApproved: boolean;
    isPublished: boolean;
    isFeatured: boolean;
    isActive: boolean;
  };
  jobTitle: string;
  location: string;
  region: string;
  jobTypes: string[];
  category: string;
  specialTags: string[];
  jobDescription: string;
  email: string;
  jobExperience: string;
  applyDeadline: string;
  hourlyrate: {
    minimum: number;
    maximum: number;
  };
  salary: {
    minimum: number;
    maximum: number;
  };
  applyLink: string;
  expireAt: string;
}

export interface PutJobRequest extends PostJobRequest {
  _id: string;
}
