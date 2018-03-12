interface ICover {
  id: number;
  attachable_id: number;
  name: string;
  mime: string;
  size: number;
  url: string;
}

interface ICountry {
  id: number;
  name_en: string;
  name_fr: string;
  name_ar: string;
  created_at: string;
  updated_at: string;
}

interface ICity {
  id: number;
  name_en: string;
  name_fr: string;
  name_ar: string;
  country_id: number;
  country: {
    [key: string]: ICountry;
  };
  population: number;
  houses: number;
}

export interface IMunicipalities {
  id: number;
  name_en: string;
  name_fr: string;
  name_ar: string;
  population: number;
  houses: number;
  regional_council_number: number;
  municipal_council_number: number;
  website: string;
  phone: string;
  email: string;
  fax: string;
  description_en: undefined;
  description_fr: undefined;
  description_ar: undefined;
  is_active: boolean;
  city_id: number;
  attachments: Array<{
    id: number;
    attachable_id: number;
    name: string;
    mime: string;
    size: number;
    url: string
  }>;
  cover: {
    [key: string]: ICover;
  };
  city: {
    [key: string]: ICity;
  };
}
