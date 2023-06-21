import {
  Alert,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import Logo from "../base/Logo";
import CloseIcon from "@mui/icons-material/Close";

type Props = {};

const StyledTextField = styled(TextField)({
  "& label": {
    color: "white",
  },
  "&:hover label": {
    fontWeight: 700,
  },
  "& input": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
      borderWidth: 2,
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

export default function Footer({}: Props) {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);

  const handleClose = () => {
    setEmailError(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailError(false);

    if (
      email === "" ||
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false
    ) {
      setEmailError(true);
    } else {
      console.log("Email: " + email);
      alert(email);
    }
  };

  return (
    <>
      <Grid
        container
        p="75px 50px"
        height={"max-content"}
        bgcolor="#262626"
        spacing={2}
        mt={5}
        position="relative"
        bottom="0"
        textAlign={ {xs: "center", md: "left"} }
      >
        <Grid item md={3} xs={12} mb={5}>
          <Logo size={35} />
          <Typography color="white" mt={2} display={{xs: "none", md: "flex"}}>
            A place where all your wildest dreams can come true!
          </Typography>
        </Grid>
        <Grid item md={3} xs={6} textAlign={"left"}>
          <Typography color="white" fontWeight="bold" mb={2}>
            HO CHI MINH CITY
          </Typography>
          <Typography color="white">danganhsang2003@gmail.com</Typography>
          <Typography color="white">(08) 98291768</Typography>
          <Typography color="white">
            Line 3, Linh Trung 2 EPZ. Thu Duc Dist.
          </Typography>
        </Grid>
        <Grid item md={3} xs={6} textAlign={"left"}>
          <Typography color="white" fontWeight="bold" mb={2}>
            FPT UNIVERSITY HCMC
          </Typography>
          <Typography color="white">(028) 7300 5588</Typography>
          <Typography color="white">daihoc.hcm@fpt.edu.vn</Typography>
          <Typography color="white">
            Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức,
            TP.HCM.
          </Typography>
        </Grid>
        <Grid item md={3} xs={12} mt={{xs: 5, md: 0}}>
          <Card>
            <CardContent>
              <form onSubmit={handleFormSubmit}>
                <Typography color="white" mb={2}>
                  Stay up to date with new films on FilmHub!
                </Typography>
                <StyledTextField
                  label="Email"
                  variant="outlined"
                  placeholder="Type your email here"
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  sx={{ mb: 2 }}
                  required
                />
                <Button type="submit" variant="contained" color="primary">
                  I agree to receive emails.
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        open={emailError}
        action={action}
        autoHideDuration={100}
        color="#cf2121"
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Email is invalid. Try again.
        </Alert>
      </Snackbar>
    </>
  );
}
