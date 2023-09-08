/**
 *    Validate profile fields
 *
 *    @param firstname-length
 *      - Incorrect length of firstname
 *    @param lastname-length
 *      - Incorrect length of lastname
 *    @param availability-of-firstname-&-lastname
 *      - Forgot type firstname and lastname
 *    @param profile-age-ranges
 *      - Validate by age range
 *      may add Number.isInteger(age), but regEx handle that
 *    @param availability-of-currency
 *    @param availability-city
 *    @param availability-country
 *    @param username-availability-of-username
 */

import { Profile, ValidateProfileError } from '../../type/profile';

export const ValidateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const {
    firstName,
    lastName,
    age,
    currency,
    country,
    city,
    username,
  } = profile;

  const errors: ValidateProfileError[] = [];

  if (firstName?.length! < 2 || firstName?.length! > 10) {
    errors.push(ValidateProfileError.INCORRECT_USER_FIRSTNAME_LENGTH);
  }

  if (lastName?.length! < 2 || lastName?.length! > 25) {
    errors.push(ValidateProfileError.INCORRECT_USER_LASTNAME_LENGTH);
  }

  if (!firstName || !lastName) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (age) {
    if (age < 1) {
      errors.push(ValidateProfileError.WRONG_AGE_RANGE_TOO_YOUNG);
    }

    if (age > 120) {
      errors.push(ValidateProfileError.WRONG_AGE_RANGE_TOO_OLD);
    }
  }

  if (!age && !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!currency) {
    errors.push(ValidateProfileError.INCORRECT_CURRENCY);
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  if (!username) {
    errors.push(ValidateProfileError.INCORRECT_USERNAME);
  }

  return errors.flat();
};
