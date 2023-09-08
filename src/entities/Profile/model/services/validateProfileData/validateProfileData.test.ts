/**
 *    Test of validateProfileData.
 *
 *    @test 'get valid response'.
 *      - Expect of response empty array, because all fields from data is correct;
 *
 *    @test 'firstname & lastname incorrect'.
 *      - Expect that user didn't input firstname and lastname,in that fact returned error message
 *        In this order (cause view/render messages in ProfileCard/validateErrors in oder -
 *        firstname-len, lastname-len, data-error):
 *        'INCORRECT_USER_FIRSTNAME_LENGTH', 'INCORRECT_USER_LASTNAME_LENGTH', 'INCORRECT_USER_DATA'.
 *
 *    @test 'incorrect age'.
 *      - Expect that nothing was entered in the field 'age'. This moment handle INCORRECT_AGE message.
 *
 *    @test 'age is too old'.
 *      - Expect that user input too large number, in that fact returned error message
 *      'WRONG_AGE_RANGE_TOO_OLD'.
 *
 *    @test 'all fields empty'.
 *      - Expect that no one field wasn't filled
 */
import axios from 'axios';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';
import { ValidateProfileData } from './validateProfileData';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

const data = {
  profileId: 1,
  firstName: 'den',
  lastName: 'matvienko',
  age: 28,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'SpB',
  username: 'admin',
  avatar: './',
};

describe('ValidateProfileData', () => {
  test('get valid response', async () => {
    const result = ValidateProfileData(data);

    expect(result)
      .toEqual([]);
  });

  test('firstname & lastname incorrect', async () => {
    const result = ValidateProfileData({
      ...data,
      firstName: '',
      lastName: '',
    });

    expect(result)
      .toEqual(
        [
          ValidateProfileError.INCORRECT_USER_FIRSTNAME_LENGTH,
          ValidateProfileError.INCORRECT_USER_LASTNAME_LENGTH,
          ValidateProfileError.INCORRECT_USER_DATA,
        ],
      );
  });

  test('incorrect age', async () => {
    const result = ValidateProfileData({
      ...data,
      age: undefined,
    });

    expect(result)
      .toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('age is too old', async () => {
    const result = ValidateProfileData({
      ...data,
      age: 220,
    });

    expect(result)
      .toEqual([ValidateProfileError.WRONG_AGE_RANGE_TOO_OLD]);
  });

  test('all fields empty', async () => {
    const result = ValidateProfileData({});

    expect(result)
      .toEqual([ValidateProfileError.INCORRECT_USER_DATA,
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.INCORRECT_CURRENCY,
        ValidateProfileError.INCORRECT_CITY,
        ValidateProfileError.INCORRECT_COUNTRY,
        ValidateProfileError.INCORRECT_USERNAME]);
  });
});
