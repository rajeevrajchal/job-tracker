export interface SESSION {
  expires_at: number;
  expires_in: number;
  token_type: string;
  access_token: string;
  refresh_token: string;
  provider_token: string;
  provider_refresh_token: any;
  user: USER;
}

export interface USER {
  id: string;
  factors: any;
  aud: string;
  iat: number;
  iss: string;
  email: string;
  phone: string;
  app_metadata: APP_META_DATA;
  user_metadata: USER_META_DATA;
  role: string;
  aal: string;
  amr: Amr[];
  session_id: string;
}

export interface APP_META_DATA {
  provider: string;
  providers: string[];
}

export interface USER_META_DATA {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  phone_verified: boolean;
  picture: string;
  provider_id: string;
  sub: string;
}

export interface Amr {
  method: string;
  timestamp: number;
}
