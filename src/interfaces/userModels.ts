export interface LoginUserModel {
  email: string;
  password: string;
}

export interface RegisterUserModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: number;
}

export interface LogInUserTokens {
  accessToken: string;
  refreshToken: string;
  role: number;
}

export interface LoginFormProps {
  currentUser: LogInUserTokens;
}

export interface BasicInfoModel {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  companyId: string;
}

export interface UserNameModel {
  firstName: string;
  lastName: string;
}
