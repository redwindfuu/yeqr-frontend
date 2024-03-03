
import { Box, Button, TextField } from '@mui/material';
import style from '@styles/user.module.scss';
import { useFormik } from 'formik';
import { SharedTextField } from './../../common/components/shared-text-field';


export const AddUserContent = (props) => {

  const formik = useFormik({


  });

  return (
    <Box
      sx={{
        width: '100%',
        height: '500px',
      }}
    >
      <Box className={style.AddUserContent}>
        <SharedTextField 
          label="Username"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />
      </Box>
      <Box className="add-user-btn-group">
        <Button
          variant="contained"
          color="primary">
          Add
        </Button>
        <Button
          variant="contained"
          color="primary">
          Close
        </Button>
      </Box>
    </Box>
  )
}