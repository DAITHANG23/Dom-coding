"use client";
import SearchIcon from "@/icons/SearchIcon";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  StyledBoxContainer,
  StyledBoxIcon,
  StyledBoxMoonIcon,
  StyledButtonDarkMode,
  StyledDarkIcon,
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
  StyledBox,
} from "./Header.styles";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  useColorScheme,
} from "@mui/material";
import MoonIcon from "@/icons/MoonIcon";
import { LIST_ITEM_NAVBAR } from "@/constant/constants";
import { useRouter } from "next/navigation";
import MenuICon from "@/icons/MenuICon";
import HomeIcon from "@/icons/HomeIcon";
import BackIcon from "@/icons/BackIcon";
import { usePathname } from "next/navigation";
import SunIcon from "@/icons/SunIcon";
import DividerComponent from "@/share/components/Divivder/Divider";

const Header = () => {
  const { setMode } = useColorScheme();

  const router = useRouter();

  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [fixedHeaderBackground, setFixedHeaderBackground] = useState(false);

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

  const valuePathName = useMemo(() => {
    return pathname !== "/" ? pathname?.split("/")[1] : pathname;
  }, [pathname]);

  const [valueTab, setValueTab] = useState(valuePathName);

  useEffect(() => {
    if (valuePathName) setValueTab(valuePathName);
  }, [valuePathName]);

  const divRef = useRef<HTMLDivElement>(null);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      let width;
      if (divRef.current) {
        width = divRef.current.offsetWidth;
      }

      if (!!width && width === 740) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleSroll = () => {
      if (window.scrollY && window.scrollY > 64) setFixedHeaderBackground(true);
      else setFixedHeaderBackground(false);
    };
    window.addEventListener("scroll", handleSroll);

    return () => {
      window.removeEventListener("scroll", handleSroll);
    };
  }, []);

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
          <StyledButtonDarkMode variant="contained">
            <HomeIcon />
          </StyledButtonDarkMode>
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
        <StyledButtonDarkMode onClick={handleDrawerToggle} variant="contained">
          <BackIcon />
        </StyledButtonDarkMode>
      </Box>
    </Box>
  );

  return (
    <StyledBox ref={divRef} fixedHeaderBackground={fixedHeaderBackground}>
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

      {!fixedHeaderBackground && <DividerComponent />}
    </StyledBox>
  );
};

export default Header;
