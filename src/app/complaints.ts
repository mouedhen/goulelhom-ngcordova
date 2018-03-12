interface ITheme {
  id: number;
  name_en: string;
  name_fr: string;
  name_ar: string;
  color: string;
  is_active: number;
  created_at: string;
  updated_at: string;
}

interface IClaimer {
  id: number;
  name: string;
  phone_number: string;
  mail: undefined;
  address: undefined;
  is_banned: undefined;
  created_at: string;
  updated_at: string;
}

interface IMunicipality {
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
  is_active: number;
  city_id: number;
  created_at: string;
  updated_at: string;
}

interface ICover {
  id: number;
  attachable_id: number;
  name: string;
  mime: string;
  size: number;
  url: string;
}

export interface IComplaints {
  id: number;
  subject: string;
  description: string;
  longitude: string;
  latitude: string;
  is_new: boolean;
  is_moderated: boolean;
  is_valid: boolean;
  has_approved_sworn_statement: boolean;
  has_approved_term_of_use: boolean;
  attachments: Array<{
    id: number;
    attachable_id: number;
    name: string;
    mime: string;
    size: number;
    url: string;
  }>;
  theme: {
    [key: string]: ITheme;
  };
  claimer: {
    [key: string]: IClaimer;
  };
  municipality: {
    [key: string]: IMunicipality;
  };
  keywords: string[];
  cover: {
    [key: string]: ICover;
  };
}
