import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { StyledBadge } from './styles';

const BadgeAvatars: React.FC = () => {
  return (
    <div id='badge_avatars' data-testid='badge_avatars'>
      <Stack direction='row' spacing={2}>
        <StyledBadge
          overlap='circular'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant='dot'
        >
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        </StyledBadge>
      </Stack>
    </div>
  );
};
export default BadgeAvatars;
