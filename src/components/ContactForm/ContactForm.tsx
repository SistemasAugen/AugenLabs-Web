import React from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Dialog from '@mui/material/Dialog';
import DeleteIcon from '@mui/material/IconButton';
import useStyles from "./ContactForm.styles";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useFormControls } from './ContactFormControls';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { useRouter } from "next/router";

import TRANSLATIONS from "@constants/locales";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      contrastText: grey[50],
    },
  },
});

const ContactForm = ({ setIsOpen }: { setIsOpen: any }) => {
  const classes = useStyles({});
  const locale = useRouter().locale!;
  const textFieldValues = [
    {
      name: "user_name",
      label: TRANSLATIONS[locale]["form.contact.label1"], // nombre
      id: "username"
    },
    {
      name: "user_email",
      label: TRANSLATIONS[locale]["form.contact.label2"], // correo electronico
      id: "email"
    },
    {
      name: "user_message",
      label: TRANSLATIONS[locale]["form.contact.label3"], // ¿en que te podemos ayudar?
      id: "message",
      multiline: true,
      rows: 5
    }
  ];

  const {
    handleInputValue,
    formIsValid,
    errors,
    successToast
  } = useFormControls();

  const sendEmail = (event: any) => {
    event.preventDefault();
    // Service ID, Template ID, Private Key
    emailjs.sendForm('service_g9onais', 'template_m4v3jee', event.target, 'E4tBiST83S1ieh1nz',)
      .then(response => console.log('SUCCESS', response.status, response.text))
      .catch(error => console.log('ERROR', error))
    successToast()
    setIsOpen(false)
  }

  return (
    <Dialog
      className={classes.root}
      fullWidth
      maxWidth="md"
      // sx={{
      //   "& .MuiDialog-container": {
      //     "& .MuiPaper-root": {
      //       width: "100%",
      //       maxWidth: "600px",  // Set your width here
      //     },
      //   },
      // }}
      open={true}
    >
      <Grid container className={[classes.mainHeader, classes.padding].join(" ")}>
        <div className={classes.icon_right}>
          <DeleteIcon
            style={{}}
            onClick={() => setIsOpen(false)}
          >
            X
          </DeleteIcon>
        </div>
        <div className={classes.primaryContainer}>
          <Typography className={classes.primaryColor} variant="h1">
            {TRANSLATIONS[locale]["form.contact.title"]}
          </Typography>
          <Typography className={classes.secondaryColor} variant="h5">
            {TRANSLATIONS[locale]["form.contact.subtitle"]}
          </Typography>
        </div>
      </Grid>
      <Grid className={classes.mainContent} item margin="10px">
        <form autoComplete="off" onSubmit={sendEmail}>
          {textFieldValues.map((textFieldValues) => {
            return (
              <div key={textFieldValues.id}>
                <br />
                <TextField
                  required
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  name={textFieldValues.name}
                  label={textFieldValues.label}
                  error={!!errors[textFieldValues.name]}
                  multiline={textFieldValues.multiline ?? false}
                  maxLength="10"
                  fullWidth
                  rows={textFieldValues.rows ?? 1}
                  autoComplete="none"
                  inputProps={{
                    maxLength: 500,
                  }}
                  {... (errors[textFieldValues.name] && {
                    error: true,
                    helperText: errors[textFieldValues.name]
                  })}
                />
              </div>
            );
          })}
          <div className={classes.spaceBetween}>
            <div className={classes.containerButton}>
              <Button href="https://wa.me/+5218117583416?text=Hola,%20quiero%20más%20información.%20">Atención al cliente.</Button>
              <WhatsAppIcon color="success" />
            </div>
            <div className={classes.containerButton}>
              <Button href="https://wa.me/+523310620319?text=Hola,%20quiero%20más%20información.%20">Información para especialistas.</Button>
              <WhatsAppIcon color="success" />
            </div>
          </div>
          <ThemeProvider theme={theme}>
            <div className={classes.icon_right}>
              <Button
                variant="contained"
                type="submit"
                disabled={!formIsValid()}
              >
                Enviar
              </Button>
            </div>
          </ThemeProvider>
        </form>
      </Grid>
    </Dialog>
  );
}

export default ContactForm;