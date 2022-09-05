import {
  Button,
  createTheme,
  Stack,
  styled,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Controller } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Box } from "@mui/system";
import Facebook from "./auth/Facebook";

export const CheckedIconTypography = ({ text }) => {
  return (
    <Stack direction="row">
      <Box paddingLeft="15px" paddingRight="5px">
        <CheckIcon />
      </Box>
      <Typography>{text}</Typography>
    </Stack>
  );
};

export const WhiteButton = styled(Button)({
  borderColor: "#000000",
  color: "#000000",
  ":hover": {
    color: "rgb(100 116 139)",
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },
});

export const FacebookButton = () => {
  return (

    <Stack
      sx={{ border: 1 }}
      direction="row"
      width="65%"
      paddingY="10px"
      paddingX="10px"
    >
      <Facebook />
      <FacebookIcon />
    </Stack>

  );
};

const StyledTypography = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  color: "#000000",
  backgroundColor: "#ffffff",
  fontWeight: "500",
  textDecoration: "underline",
  padding: "0",
  margin: "0",
  borderRadius: "0",
  transition: theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.complex,
  }),
  // background-color: theme.background.blur,
  ":hover": {
    color: "#ffffff",
    backgroundColor: "#000000",
  },
  ":focus": {
    color: "#ffffff",
    backgroundColor: "#000000",
  },
}));

const theme = createTheme({
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },
});

const ClickableTypography = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledTypography {...props} />
    </ThemeProvider>
  );
};

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root.Mui-error": {
    "& fieldset": {
      color: "rgb(118,118,119)",
      borderColor: "rgb(118,118,119)",
      borderBottomColor: "red",
      borderBottomWidth: "2px",
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgb(118,118,119)",
      borderRadius: "0",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& fieldset": {
      borderWidth: "1px",
    },
  },
});

export const InputField = ({ control, errors, name, placeholder, sx }) => {
  return (
    <Controller
      render={({ field }) => (
        <StyledTextField
          id="outlined-username-input"
          label={placeholder}
          autoComplete="username"
          type="text"
          error={errors?.name}
          helperText={errors.name?.message ? errors.name?.message : " "}
          {...field}
          sx={{ sx }}
        />
      )}
      name={name}
      control={control}
    />
  );
};

export const PasswordInputField = ({
  control,
  errors,
  placeholder,
  option,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Stack {...option}>
      <Stack direction="row" justifyContent="flex-end">
        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        <ClickableTypography onClick={handleClickShowPassword} marginLeft="5px">
          {showPassword ? "HIDE" : "SHOW"}
        </ClickableTypography>
      </Stack>
      <Controller
        render={({ field }) => (
          <StyledTextField
            id="outlined-password-input"
            label={placeholder}
            type={showPassword ? "text" : "password"}
            error={errors?.password}
            autoComplete="current-password"
            helperText={
              errors.password?.message ? errors.password?.message : " "
            }
            {...field}
          />
        )}
        name="password"
        control={control}
      />
    </Stack>
  );
};
