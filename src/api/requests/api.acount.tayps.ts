export type SiginUpPayload = {
  phone: string;
  password: string;
  name: string;
};

export type SiginUpResponse = {
  message: string;
  data: any;
};
export type LoginPayload = {
  phone: string;
  password: string;
};
export type LoginResponse = {
  message: string;
  data: any;
};
