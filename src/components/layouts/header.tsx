"use client";

import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { Button, InputAdornment, MenuItem, useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {useTranslations} from 'next-intl';
import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
  TextField,
} from "@mui/material";

import Iconify from "../iconify/iconify";
import { useRouter } from "next/navigation";
import Link from "next/link";

import CustomPopover, { usePopover } from "../custom-popover";
import { varHover } from "../animate";
import { m } from "framer-motion";
import LocaleButton from "./locale-button";
// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
  window?: () => Window;
};

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Categories",
    href: "/categories",
  },
];
const OPTIONS = [
  {
    label: "Home",
    linkTo: "/",
  },
  {
    label: "Profile",
    linkTo: "/#1",
  },
  {
    label: "Settings",
    linkTo: "/#2",
  },
];
const Items = [
  {
    label: "Join as a partner",
    href:"#Join"
  },
  {
    label: "Contact Us",
    href:"#Contact_Us"
  },
  {
    label: "FQA",
    href:"#FQA"
  },
  
  {
    label: "Home",
    href:"#Home"
  },
];

const user = {
  id: "8864c717-587d-472a-929a-8e5f298024da-0",
  displayName: "Jaydon Frankie",
  email: "demo@minimals.cc",
  photoURL: "",
  password: "demo1234",
  phoneNumber: "+40 777666555",
  country: "United States",
  address: "90210 Broadway Blvd",
  state: "California",
  city: "San Francisco",
  zipCode: "94116",
  about:
    "Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.",
  role: "admin",
  isPublic: true,
};
export default function Header(props: Props) {
  const t = useTranslations();
  const { window } = props;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const route = useRouter();
  const handleDrawerToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("md"));
  const popover = usePopover();

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        color: "#000",
        height: "100%",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
          textDecoration: "none",
        }}
      >
        {" "}
        <Box
          component="img"
          alt="auth"
          src={"/assets/logo/logo.svg"}
          sx={{
            my: 2,
            mx: "auto",
            display: "block",
            width: { xs: 50, md: 85 },
            height: { xs: 50, md: 70 },
          }}
        />
      </Link>

      <Divider />
      <List>
        {Items.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                "&:hover": { backgroundColor: "#bfbfbf" },
              }}
            >
              <Typography
                variant="body1"
                fontWeight="light"
                component={Link}
                href={item.href}
                color="inherit"
                sx={{ textDecoration: "none" }}
              >
                {item.label}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const [pageYOffset, setPageYOffset] = useState(0);
  const isScrolled = useMemo(() => pageYOffset > 10, [pageYOffset]);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setPageYOffset((prev) => scrollTop || prev);
      setScrollDir(() => (scrollTop > pageYOffset ? "down" : "up"));
    };

    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, [pageYOffset]);

  const handleClickItem = (path: string) => {
    popover.onClose();
    route.push(path);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const renderLinks = (
    <Box sx={{display:sm?'none':'flex', color: "#000" }}>
      {Items.map((item) => (
        <MenuItem sx={{color:'#1D5691', fontWeight:'bold'}} key={item.label} onClick={() => handleClickItem(item.href)}>
          {t(`Global.Navbar.${item.label}`)}
        </MenuItem>
      ))}
    </Box>
  );
  const renderNavToggler = (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="end"
      onClick={handleDrawerToggle}
      sx={{
        display:sm? 'block': 'none',
        mr: 1,
        color: isScrolled ? "black" : "white",
      }}
    >
      <Iconify
        icon="heroicons-outline:menu-alt-1"
        sx={{ height: "25px", width: "25px", color: "#1B76BA" }}
      />
    </IconButton>
  );

  const renderMenu = (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={menuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );

  const renderLogo = (
    <Link
      href="/"

    >
      <Box
        component="img"
        alt="auth"
        src="/assets/logo/logo.svg"
        sx={{
          cursor: "pointer",
          display: "block",
          width: { xs: 70 , md:100},
          height: { xs: 70, md:70 },
        }}
      />
    </Link>
  );

  const renderSearch = (
    <Box
      sx={{
        flexGrow: "1",
        mx: 4,
        borderColor: "#bfbfbf",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={4}>
        <TextField
          fullWidth
          sx={{
            direction: "rtl",
            "&:focus": {
              outline: "none",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box
                  sx={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#212B36",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                  }}
                >
                  <Iconify icon={"ri:search-line"} sx={{ color: "#fff" }} />
                </Box>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Box>
  );

  const renderProfile = (
    <IconButton color="inherit" sx={{}}>
      <Iconify
        icon="ooui:user-avatar"
        sx={{ height: "25px", width: "25px", color: "#919EAB" }}
      />
    </IconButton>
  );
  const renderDropDown = (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          width: 40,
          height: 40,
        }}
      >
        {renderProfile}
      </IconButton>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        sx={{ width: 200, p: 0 }}
      >
        <Box sx={{ p: 2, pb: 1.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.displayName}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              onClick={() => handleClickItem(option.linkTo)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem
          sx={{ m: 1, fontWeight: "fontWeightBold", color: "error.main" }}
        >
          Logout
        </MenuItem>
      </CustomPopover>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          bgcolor: "#EBF8F8",
          boxShadow: "none",
         py:{xs:0.5,md:2},px:{xs:1,md:4},
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {renderNavToggler}
          <Box>

          <Button sx={{
            fontWeight:'bold',
            fontSize:{xs:12,md:15},
            borderRadius:4,border:2, '&:hover':{border:2},
            color:(theme)=>theme.palette.primary.dark, 
            borderColor:(theme)=>theme.palette.primary.dark}} variant="outlined" >
            {t('Global.Navbar.Download')}
          </Button>
          <LocaleButton />

          </Box>
          {renderLinks}
          {renderMenu}
          {renderLogo}
        </Toolbar>
    
      </AppBar>
    </Box>
  );
}
