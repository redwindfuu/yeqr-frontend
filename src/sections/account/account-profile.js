import { useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

const avatar = '/assets/avatars/avatar-anika-visser.png';
const user = {
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Anika Visser',
  timezone: 'GTM-7'
};

export const AccountProfile = () => {
  const user = useSelector((state) => state.user?.auth?.user );
  return (<Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={avatar}
          sx={{
            height: 80,
            mb: 2,
            width: 80
          }}
        />
        <Typography
          gutterBottom
          variant="h5"
        >
          {user?.name}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {user?.city} {user?.country}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {"GTM+7"}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>)
}
