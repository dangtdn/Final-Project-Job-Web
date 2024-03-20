export interface Category {
  _id: string;
  categoryTitle: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface GetCategoriesResponse {
  success: boolean;
  job: Category[];
}

export interface PostCategoryRequest {
  categoryTitle: string;
  user: string;
}

export interface PutCategoryRequest extends PostCategoryRequest {
  _id: string;
}
