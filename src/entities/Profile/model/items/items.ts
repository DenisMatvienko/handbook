/**
 * Type of sidebar items
 *  @param id
 *  - id of profile properties
 *  @param title
 *  - name of profile properties
 */

// export interface ProfileDataType {
//   profileId: number;
//   firstName: string;
//   secondName: string;
//   age: string;
// }

export interface ProfileItemType {
  profileId: number;
  title: string;
}

export const ProfileItemsList: ProfileItemType[] = [
  {
    profileId: 1,
    title: 'Имя',
  },
  {
    profileId: 2,
    title: 'Фамилия',

  },
  {
    profileId: 3,
    title: 'Возраст',
  },
  {
    profileId: 4,
    title: 'Валюта',
  },
  {
    profileId: 5,
    title: 'Страна',

  },
  {
    profileId: 6,
    title: 'Город',
  },
  {
    profileId: 7,
    title: 'Логин',
  },
  {
    profileId: 8,
    title: 'Аватар',
  },
];
