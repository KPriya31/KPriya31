import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        EZRefund
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
  {
    title: 'Follow Us',
    description: ['Facebook', 'Twitter','LinkedIn','Instagram'],
  },
];

const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
    <Container
    maxWidth="md"
    component="footer"
    sx={{
      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      mt: 8,
      py: [3, 6],
    }}
  >
    <Grid container spacing={4} justifyContent="spaced-between">
      {footers.map((footer) => (
        <Grid item xs={6} sm={3} key={footer.title}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            {footer.title}
          </Typography>
          <ul>
            {footer.description.map((item) => (
              <li key={item}>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
      ))}
    </Grid>
    <Copyright sx={{ mt: 5 }} />
  </Container>
  </ThemeProvider>
  
    );
};
