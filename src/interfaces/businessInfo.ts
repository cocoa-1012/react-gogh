export interface AddressModel {
  streetAddress: string;
  city: string;
  state: string;
}

export interface BusinessInfoModel {
  name: string;
  website: string;
  logo: string;
  address: AddressModel;
}

export interface CustomerInfoModel {
  addresses: AddressModel[];
  profilePicture: string;
}

export interface AdditionalBusinessCompanyItem {
  photo: string;
  isCoverPhoto: boolean;
}

export interface AdditionalBusinessInfoModel {
  description: string;
  companyPortfolio: AdditionalBusinessCompanyItem[];
}

export interface BusinessInfoResponseModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  name: string;
  website: string;
  logo: string;
  address: AddressModel;
  description: string;
  companyPortfolio: AdditionalBusinessCompanyItem[];
}
