export interface RequestParamModel {
  user: string;
  page: number;
  pageSize: number;
}

export interface MyServicesDataModel {
  id: string | null;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  name: string;
  description: string;
  category: string;
  pricingType: number;
  amount: number;
  companyId: string | null;
  coverPhotoIndex: number;
  photos: string[];
  tags: string[];
  companyCity: string | null;
  companyState: string | null;
}

export interface MyServicesResponseModel {
  pageNumber: number;
  pageSize: number;
  count: number;
  data: MyServicesDataModel[];
}
