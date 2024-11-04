"use client";
import SearchIcon from "@/icons/SearchIcon";
import React, { useEffect, useState } from "react";
import {
  StyledBoxContainer,
  StyledDarkIcon,
  StyledDivider,
  StyledLink,
  StyledSearchIcon,
  StyledTab,
  StyledTabs,
  StyledTitle,
} from "./Header.styles";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useColorScheme,
} from "@mui/material";
import MoonIcon from "@/icons/MoonIcon";
import SunIcon from "@/icons/SunIcon";
import { LIST_ITEM_NAVBAR } from "@/contant/constants";
import { useRouter } from "next/navigation";
import MenuICon from "@/icons/MenuICon";
import HomeIcon from "@/icons/HomeIcon";
import BackIcon from "@/icons/BackIcon";
const Header = () => {
  const { setMode } = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [valueTab, setValueTab] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const onClickDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  const router = useRouter();

  useEffect(() => {
    if (isDarkMode) {
      setMode("dark");
    } else {
      setMode("system");
    }
  }, [isDarkMode, setMode]);

  useEffect(() => {
    if (valueTab) router.push(valueTab.toLowerCase());
  }, [valueTab, router]);

  const handleChangeTabs = (event: React.SyntheticEvent, value: string) => {
    setValueTab(value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container =
    window !== undefined ? () => window.document.body : undefined;
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <StyledLink
          href={"/"}
          onClick={() => {
            setValueTab("");
          }}
        >
          <StyledTitle variant="bodyL">
            <HomeIcon />
          </StyledTitle>
        </StyledLink>
      </Box>
      <Divider />
      <List>
        {LIST_ITEM_NAVBAR.map((item) => (
          <StyledLink key={item.title} href={item.url}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </StyledLink>
        ))}
      </List>
      <Box>
        <StyledLink href={"/search"}>
          <StyledSearchIcon>
            <SearchIcon />
          </StyledSearchIcon>
        </StyledLink>
      </Box>
      <Box sx={{ cursor: "pointer", my: 2 }}>
        <StyledDarkIcon onClick={onClickDarkMode}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </StyledDarkIcon>
      </Box>
      <Divider />
      <Box sx={{ my: 2 }} onClick={handleDrawerToggle}>
        <BackIcon />
      </Box>
    </Box>
  );

  return (
    <Box>
      <StyledBoxContainer>
        <div>
          <StyledLink
            href={"/"}
            onClick={() => {
              setValueTab("");
            }}
          >
            <StyledTitle variant="bodyL">DomCoding</StyledTitle>
          </StyledLink>
        </div>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <ul
            style={{ display: "flex", listStyle: "none", alignItems: "center" }}
          >
            <StyledTabs value={valueTab} onChange={handleChangeTabs}>
              {LIST_ITEM_NAVBAR.map((i) => (
                <StyledTab key={i.title} label={i.title} value={i.title} />
              ))}
            </StyledTabs>

            <li style={{ padding: "4px 8px", marginRight: "24px" }}>
              <StyledLink href={"/search"}>
                <StyledSearchIcon>
                  <SearchIcon />
                </StyledSearchIcon>
              </StyledLink>
            </li>
            <li>
              <div style={{ cursor: "pointer" }}>
                <StyledDarkIcon onClick={onClickDarkMode}>
                  {isDarkMode ? <SunIcon /> : <MoonIcon />}
                </StyledDarkIcon>
              </div>
            </li>
          </ul>
        </Box>
        <Box
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={handleDrawerToggle}
        >
          <MenuICon />
        </Box>
      </StyledBoxContainer>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            position: "relative",
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <StyledDivider variant="middle" />
    </Box>
  );
};

export default Header;
