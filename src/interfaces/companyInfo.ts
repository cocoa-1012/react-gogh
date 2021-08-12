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

export interface AdditionalBusinessCompanyItem {
    photo: string;
    isCoverPhoto: boolean;
}

export interface ServicesOfferedModel {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    name: string;
    description: string;
    category: string;
    pricingType: number;
    amount: number;
    companyId: string;
    coverPhotoIndex: number;
    photos: string[];
    tags: string[];
    companyCity: string;
    companyState: string;
    alreadySubscribed: boolean;
}

export interface CompanyInfoModel {
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
    servicesOffered: ServicesOfferedModel[];
}
