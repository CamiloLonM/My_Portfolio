export const USER_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  BANNED: 'banned',
  PENDING: 'pending',
  DELETED: 'deleted',
} as const;

export type UserStatus = (typeof USER_STATUS)[keyof typeof USER_STATUS];
