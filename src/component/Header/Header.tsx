"use client";
import SearchIcon from "@/icons/SearchIcon";
import React, { useEffect, useState } from "react";
import {
  StyledBoxContainer,
  StyledBoxIcon,
  StyledBoxMoonIcon,
  StyledDarkIcon,
  StyledDivider,
  StyledDrawer,
  StyledItemList,
  StyledLink,
  StyledList,
  StyledListItemText,
  StyledMenu,
  StyledNavbarListContainer,
  StyledSearchIcon,
  StyledTab,
  StyledTabs,
  StyledTitle,
} from "./Header.styles";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  useColorScheme,
} from "@mui/material";
import MoonIcon from "@/icons/MoonIcon";
import { LIST_ITEM_NAVBAR } from "@/contant/constants";
import { useRouter } from "next/navigation";
import MenuICon from "@/icons/MenuICon";
import HomeIcon from "@/icons/HomeIcon";
import BackIcon from "@/icons/BackIcon";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const Header = () => {
  const { setMode } = useColorScheme();

  const SunIcon = dynamic(() => import("@/icons/SunIcon"), { ssr: false });

  const router = useRouter();

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (
      typeof window !== "undefined" &&
      window.localStorage.getItem("mui-mode") === "dark"
    )
      return true;
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [isDarkMode, setMode]);

  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  const valuePathName = pathname ? pathname?.split("/")[1] : "";

  const [valueTab, setValueTab] = useState(valuePathName);

  const onClickDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (valueTab) router.push(valueTab.toLowerCase());
  }, [valueTab, router]);

  const handleChangeTabs = (event: React.SyntheticEvent, value: string) => {
    setValueTab(value);
  };

  const handleChangeItemList = (value: string) => {
    if (!value) setValueTab("");

    setValueTab(value.toLowerCase());
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    typeof window !== undefined ? () => window.document.body : undefined;

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box my={2}>
        <StyledLink
          href={"/"}
          onClick={() => {
            setValueTab("");
            setMobileOpen((prevState) => !prevState);
          }}
        >
          <Button variant="contained">
            <HomeIcon />
          </Button>
        </StyledLink>
      </Box>
      <Divider />
      <List>
        {LIST_ITEM_NAVBAR.map((item) => (
          <StyledLink
            key={item.title}
            href={item.url}
            onClick={() => handleChangeItemList(item.title)}
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <StyledListItemText
                  key={valueTab}
                  primary={item.title}
                  ischoosetab={(valueTab === item.url).toString()}
                />
              </ListItemButton>
            </ListItem>
          </StyledLink>
        ))}
      </List>
      <Box onClick={() => handleChangeItemList("search")}>
        <StyledLink href={"/search"}>
          <StyledSearchIcon ischoosetab={(valueTab === "search").toString()}>
            <SearchIcon />
          </StyledSearchIcon>
        </StyledLink>
      </Box>
      <StyledBoxIcon>
        <StyledDarkIcon onClick={onClickDarkMode}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </StyledDarkIcon>
      </StyledBoxIcon>
      <Divider />
      <Box my={2}>
        <Button onClick={handleDrawerToggle} variant="contained">
          <BackIcon />
        </Button>
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
        <StyledNavbarListContainer>
          <StyledList>
            <StyledTabs value={valueTab} onChange={handleChangeTabs}>
              {LIST_ITEM_NAVBAR.map((i) => (
                <StyledTab key={i.title} label={i.title} value={i.url} />
              ))}
            </StyledTabs>

            <StyledItemList onClick={() => handleChangeItemList("search")}>
              <StyledLink href={"/search"}>
                <StyledSearchIcon
                  ischoosetab={(valueTab === "search").toString()}
                >
                  <SearchIcon />
                </StyledSearchIcon>
              </StyledLink>
            </StyledItemList>
            <li>
              <StyledBoxMoonIcon>
                <StyledDarkIcon onClick={onClickDarkMode}>
                  {isDarkMode ? <SunIcon /> : <MoonIcon />}
                </StyledDarkIcon>
              </StyledBoxMoonIcon>
            </li>
          </StyledList>
        </StyledNavbarListContainer>
        <StyledMenu onClick={handleDrawerToggle}>
          <MenuICon />
        </StyledMenu>
      </StyledBoxContainer>
      <nav>
        <StyledDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </StyledDrawer>
      </nav>
      <StyledDivider variant="middle" />
    </Box>
  );
};

export default Header;
