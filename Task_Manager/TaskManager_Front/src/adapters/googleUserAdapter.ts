import { USER_GENDER } from '@/constants/userGender';
import { USER_STATUS } from '@/constants/userStatus';
import User from '@/entities/User';
import { GoogleUser } from '@/types/GoogleUser';
import { getUnixTimestamp } from '@/utils/date';

const mapGoogleUserToUser = (googleUser: GoogleUser): User => {
  return new User({
    id: googleUser.sub,
    email: googleUser.email,
    firstName: googleUser.given_name,
    lastName: googleUser.family_name,
    avatar: googleUser.picture,
    status: USER_STATUS.ACTIVE,
    gender: USER_GENDER.OTHER,
    country: googleUser.locale ?? 'unknown',
    password: '',
    lastActiveAt: googleUser.exp,
    createdAt: getUnixTimestamp(),
    updatedAt: getUnixTimestamp(),
    updatedBy: 'system',
  });
};

export default mapGoogleUserToUser;
