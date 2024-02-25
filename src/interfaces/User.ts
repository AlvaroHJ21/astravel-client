export interface User {
  id: number;
  name: string;
  email: string;
}

export interface RegisterUserDto {
  name: string;
  email: string;
  password: string;
  document: string;
  country: string;
  phone: string;
  profession: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}
