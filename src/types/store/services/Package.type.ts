import {StatusType} from '../../StatusType';

export type Operation<T> = {
  data: T;
  error: Error | null;
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  run: (promise: Promise<T>) => Promise<T>;
  clear: () => void;
};

export type PackageResponse = {
  data: Package[];
  message: string;
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: string | null;
      label: string | number;
      active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
};

export type PackagesArray = Package[];

export type Package = {
  [x: string]: unknown;
  id: number;
  creator_id: number;
  creator_name: string;
  creator_phone: string;
  creator_avatar: string;
  driver_id: number | null;
  driver_name: string | null;
  driver_phone: string | null;
  recipient_name: string;
  recipient_phone: string;
  from_region_id: number;
  from_region_name: string;
  from_district_id: number;
  from_district_name: string;
  from_address: string;
  to_region_id: number;
  to_region_name: string;
  to_district_id: number;
  to_district_name: string;
  to_address: string;
  note: string;
  request_id: number;
  status: StatusType;
  matter: string;
  vehicle_type: 'on_foot' | 'on_car' | 'on_truck';
  is_paid: number;
  status_label: string | null;
  cash_amount: number;
  delivery_fee_amount: number;
  insurance_amount: number;
  expired_at: string | null;
  created_at: string;
  created_at_label: string;
};

export type PackageList = {
  created_at: string;
  created_at_label: string;
  driver_id: number | null;
  driver_name: string | null;
  driver_phone: string | null;
  id: number;
  is_active: boolean;
  is_closed: boolean;
  minus_transactions: number;
  packages: Package[];
  packages_active_count: number;
  packages_active_sum_cash_amount: number;
  packages_cancelled_count: number;
  packages_cancelled_sum_cash_amount: number;
  packages_completed_count: number;
  packages_completed_sum_cash_amount: number;
  packages_count: number;
  packages_sum_cash_amount: number;
  packages_sum_delivery_fee_amount: number;
  plus_transactions: number;
  residual_amount: number;
  sender_id: number;
  sender_name: string;
  storage_id: number;
  storage_name: string;
  storage_phone: string;
  to_region_id: number | null;
  to_region_name: string | null;
  transactions: [];
  type: string;
};

export type PackageListResponse = {
  data: PackageList[];
  message: string;
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: string | null;
      label: string | number;
      active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
};
