import {MetaType} from '../../global.types';

type Region = {
  id: number;
  name: string;
  delivery_amount: number;
  delivery_timer_in_hours: number;
};

type District = Region & {
  region_id: number;
};

export type AllUsersStorage = {
  id: number;
  owner_user_id: number;
  name: string;
  region_id: number;
  district_id: number;
  call_center: string;
  updated_at: string;
  created_at: string;
  region: Region;
  district: District;
  logo: string;
  service_fee_percent: number;
  is_can_accept_parcels: number;
  created_at_label: number;
};

export type NewStoreData = Omit<
  AllUsersStorage,
  | 'id'
  | 'updated_at'
  | 'created_at'
  | 'region'
  | 'district'
  | 'created_at_label'
> & {
  logo: any;
};

export type AllUsersStorageResponse = {
  data: AllUsersStorage[];
  meta: MetaType;
};

// Location
type D = 'delivery_amount' | 'delivery_timer_in_hours';
type ResRegion = Omit<Region, D>;
export type ResDistricts = Omit<District, D>;

export type LocationType = {
  districts: ResDistricts[];
} & ResRegion;

export type LocationResponse = {
  data: LocationType[];
};
