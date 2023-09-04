/**
 *  - ProfileSchema
 *    General Profile state type
 *
 *    @param Profile
 *      - Profile options type
 *
 *    @param data
 *      - Getting from server data's
 *
 *    @param form
 *      - Storage which contain, that user edit in data's.
 */

import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export interface Profile {
  profileId?: number;
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
