
import { Box, TextField } from '@mui/material';



export const SharedTextField = (props) => {
  const { ...rest } = props;
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: "column",
        gap: "10px",
        ...props.sx
      }}
    >
      <label >{props.label}</label>
      <TextField
        {...rest}
      />
    </Box>
  );
};

// SharedTextField.propTypes = {
//   label: PropTypes.string.isRequired,
//   variant: PropTypes.string,
//   fullWidth: PropTypes.bool,
//   value: PropTypes.string,
//   onChange: PropTypes.func,
//   type: PropTypes.string,
//   id: PropTypes.string,
//   name: PropTypes.string,
//   placeholder: PropTypes.string,
//   error: PropTypes.bool,
//   helperText: PropTypes.string
// };
