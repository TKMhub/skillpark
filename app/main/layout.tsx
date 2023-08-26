"use client";
import * as React from "react";
import Image from "next/image";
import skillParkLogo from "../../public/image/skillPark.svg";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import styles from "./mainLayout.module.scss";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { css } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import StarIcon from "@mui/icons-material/Star";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListIcon from "@mui/icons-material/List";
import TocTwoToneIcon from "@mui/icons-material/TocTwoTone";
import CodeTwoToneIcon from "@mui/icons-material/CodeTwoTone";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import AutoStoriesTwoToneIcon from "@mui/icons-material/AutoStoriesTwoTone";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
import PrecisionManufacturingTwoToneIcon from "@mui/icons-material/PrecisionManufacturingTwoTone";
import RequestQuoteTwoToneIcon from "@mui/icons-material/RequestQuoteTwoTone";
import NewspaperTwoToneIcon from "@mui/icons-material/NewspaperTwoTone";
import MilitaryTechTwoToneIcon from "@mui/icons-material/MilitaryTechTwoTone";
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";

import LinearProgress from "@mui/material/LinearProgress";
// 月 / 太陽
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
// ベル
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
// サイクル
import SyncTwoToneIcon from "@mui/icons-material/SyncTwoTone";
// 目
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import { Typography } from "@mui/material";

const drawerWidth = 240;
const TopAppBarHeight = 64;

const mainItems = [
  { text: "スキル", icon: <CodeTwoToneIcon style={{ color: "white" }} /> },
  { text: "投稿", icon: <TocTwoToneIcon style={{ color: "white" }} /> },
  { text: "記事", icon: <NewspaperTwoToneIcon style={{ color: "white" }} /> },
  { text: "学習", icon: <SchoolTwoToneIcon style={{ color: "white" }} /> },
  { text: "共有", icon: <ShareTwoToneIcon style={{ color: "white" }} /> },
  {
    text: "自動化",
    icon: <PrecisionManufacturingTwoToneIcon style={{ color: "white" }} />,
  },
  {
    text: "アイディア",
    icon: <TipsAndUpdatesTwoToneIcon style={{ color: "white" }} />,
  },
  { text: "教材", icon: <AutoStoriesTwoToneIcon style={{ color: "white" }} /> },
  {
    text: "資格",
    icon: <MilitaryTechTwoToneIcon style={{ color: "white" }} />,
  },
  {
    text: "申請",
    icon: <RequestQuoteTwoToneIcon style={{ color: "white" }} />,
  },
];
const subItems = [
  {
    text: "Profile ",
    icon: <AccountBoxTwoToneIcon style={{ color: "white" }} />,
  },
  { text: "Contact", icon: <SendTwoToneIcon style={{ color: "white" }} /> },
  { text: "Setting", icon: <SettingsTwoToneIcon style={{ color: "white" }} /> },
];

const openedMixin = (theme: Theme): CSSObject => ({
  top: TopAppBarHeight,
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  top: TopAppBarHeight,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const MainHeader = styled("div")(({ theme }) => ({
  marginTop: TopAppBarHeight,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const TopAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 2,
  height: TopAppBarHeight,
  backgroundColor: "white",
  color: "#333333",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  boxShadow: "none",
  backgroundColor: "white",
  borderBottom: "1px solid #e0e0e0",
  color: "black",
  top: TopAppBarHeight,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  // 以下、既存のコード
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  top: TopAppBarHeight,
}));

const mainBackgroundColor = {
  backgroundColor: "#f2f6fa",
  height: "100vh",
  width: "100%",
  display: "flex",
};

export default function Main({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <section style={mainBackgroundColor}>
      <CssBaseline />
      {/* TOPバー */}
      <TopAppBar position="fixed" sx={{ height: `${TopAppBarHeight}px` }}>
        <Toolbar sx={{ height: `${TopAppBarHeight}px` }}>
          <Image
            src={skillParkLogo}
            alt="skillpark_logo"
            width={40}
            height={40}
          />
          <h1 className={styles.TopbarTitle}>skillPark</h1>
        </Toolbar>
        <div>
          <LinearProgress />
        </div>
      </TopAppBar>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <h6>
            機能タイトルバー
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ↑画面遷移中のエフェクト（画面遷移を実装したら制御を加える）
          </h6>
        </Toolbar>
      </AppBar>
      <div
        style={{
          background: "linear-gradient(45deg, #003CFF, #8FD4FF)",
        }}
      >
        <Drawer variant="permanent" open={open} className={styles.drawerPaper}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <div
            style={{
              height: "30rem",
              overflowY: "auto",
              color: "white",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 10000,
            }}
          >
            <Divider />
            <List>
              {mainItems.map((item) => (
                <ListItem
                  key={item.text}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
          <Divider />
          <List>
            {subItems.map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                sx={{
                  display: "block",
                  marginTop: "20px",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <MainHeader />
        {children}
      </Box>
    </section>
  );
}
