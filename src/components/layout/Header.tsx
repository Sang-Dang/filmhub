import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../base/Logo";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";

const MenuItems = [
  ["About", "/about"],
  ["Genres", "/genres"],
  ["Contact", "/contact"],
];

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const Header = () => {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      className={isScrolled ? "scrolled" : ""}
      position="fixed"
      sx={{
        background: `linear-gradient(to bottom, ${theme.palette.secondary.main} 30%, rgba(0,0,0,0)) 100%`,
        boxShadow: `none`,
        padding: "0 50px 0 50px",
        transition: "all 0.2s ease",
        transitionDelay: "0.2s",
        "&.scrolled": {
          backgroundColor: "black",
        },
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <StyledLink to="/">
              <Logo size={20} />
            </StyledLink>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {MenuItems.map((item) => {
                return (
                  <MenuItem key={item[0]} onClick={handleCloseNavMenu}>
                    <StyledLink to={item[1]}>{item[0]}</StyledLink>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, mr: 1 }}>
            <StyledLink to="/">
              <Logo size={20} />
            </StyledLink>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {MenuItems.map((item) => {
              return (
                <Button
                  key={item[0]}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block", textTransform: "none" }}
                >
                  <StyledLink to={item[1]}>
                    <Typography color="white">{item[0]}</Typography>
                  </StyledLink>
                </Button>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="Profile" onClick={handleCloseUserMenu}>
                <Typography textAlign="center" color="black">
                  Profile
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
