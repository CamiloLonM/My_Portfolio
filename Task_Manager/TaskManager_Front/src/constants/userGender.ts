export const USER_GENDER = {
  MALE: 'male',
  FEMALE: 'female',
  OTHER: 'other',
} as const;

export type USER_GENDER = (typeof USER_GENDER)[keyof typeof USER_GENDER];
