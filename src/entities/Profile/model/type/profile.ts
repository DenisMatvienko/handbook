/**
 *  - ProfileSchema
 *    General Profile state type
 *
 *    @param ValidateProfileError
 *
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

export enum ValidateProfileError {
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
  INCORRECT_USER_FIRSTNAME_LENGTH = 'INCORRECT_USER_FIRSTNAME_LENGTH',
  INCORRECT_USER_LASTNAME_LENGTH = 'INCORRECT_USER_LASTNAME_LENGTH',
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  WRONG_AGE_RANGE_TOO_OLD = 'WRONG_AGE_RANGE_TOO_OLD',
  WRONG_AGE_RANGE_TOO_YOUNG = 'WRONG_AGE_RANGE_TOO_YOUNG',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
  INCORRECT_CITY = 'INCORRECT_CITY',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  INCORRECT_USERNAME = 'INCORRECT_USERNAME',
}

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
  validateErrors?: ValidateProfileError[];
}
