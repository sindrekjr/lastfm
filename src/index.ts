import { config } from 'dotenv';

import { ApiClient } from './api';

const environment = process.env.NODE_ENV || 'development';

if (environment === 'development') {
  config();

  const { LASTFM_API_KEY } = process.env;
  if (LASTFM_API_KEY) console.log(new ApiClient(LASTFM_API_KEY));
}

export * from './api';
