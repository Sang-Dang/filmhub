import {
  TextField,
  styled,
  Grid,
  Button,
  Autocomplete,
  Box,
} from "@mui/material";
import React from "react";
import Genre from "../../database/model/Genre";

type Props = {
  genres: Genre[];
};

const StyledTextField = styled(TextField)({
  "& label": {
    color: "white",
  },
  "&:hover label": {
    fontWeight: 700,
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

const StyledSelect = styled(Autocomplete)({
  "& label": {
    color: "white",
  },
  "& input": {
    color: "white",
  },
  "&:hover label": {
    fontWeight: 700,
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

export default function ContactForm({ genres }: Props) {
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Box width={{ sx: "100%", md: "50%" }} margin="0 auto">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <StyledTextField
              type="text"
              id="firstName"
              value={firstName}
              variant="outlined"
              onChange={(e) => setFirstName(e.target.value)}
              label="First Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              type="text"
              id="lastName"
              value={lastName}
              variant="outlined"
              onChange={(e) => setLastName(e.target.value)}
              label="Last Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              type="email"
              id="email"
              value={email}
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <StyledSelect
              disablePortal
              id="combo-box-demo"
              options={genres.map((genre) => genre.name)}
              color="white"
              renderInput={(params) => <TextField {...params} label="Movie" style={{color: "white"}} />}
              sx={{color: "white"}}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              multiline
              fullWidth
              rows={5}
              maxRows={10}
              variant="outlined"
              label="Message"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
