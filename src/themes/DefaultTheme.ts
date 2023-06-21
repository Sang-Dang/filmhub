import { Theme, createTheme } from "@mui/material";

export const DefaultTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#de923c",
    },
    secondary: {
      main: "#000000",
    },
    error: {
      main: "#cf2121",
    },
    warning: {
      main: "#f5f5f1",
    },
    background: {
      default: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
      disabled: "#ffffff",
    }
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          color: "#ffffff",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          color: "#ffffff",
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#de923c",
          color: "#000000",
          fontWeight: "bold",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: "20px 24px"
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          backgroundColor: "#141414",
          color: "#ffffff",
        },
      },
    }
  },
});