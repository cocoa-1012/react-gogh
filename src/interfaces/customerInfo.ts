export interface AddressModel {
    streetAddress: string;
    city: string;
    state: string;
}

export interface CustomerInfoModel {
    firstName: string;
    lastName: string;
    email: string;
    passwordSalt: string;
    passwordHash: string;
    phoneNumber: string;
    passwordRessetToken: boolean;
    passwordRessetTokenExpiredOn: Date;
    companyId: string;
    role: number;
    originalCreatedAt: Date;
    fullName: string;
    addresses: AddressModel[];
    profilePicture: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
}
