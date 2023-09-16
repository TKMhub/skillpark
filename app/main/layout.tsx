"use client";
import * as React from "react";
import Image from "next/image";
import skillParkLogo from "../../public/image/skillPark.svg";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import styles from "./mainLayout.module.scss";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
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
import TocTwoToneIcon from "@mui/icons-material/TocTwoTone";
import CodeTwoToneIcon from "@mui/icons-material/CodeTwoTone";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import DirectionsWalkRoundedIcon from "@mui/icons-material/DirectionsWalkRounded";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import AutoStoriesTwoToneIcon from "@mui/icons-material/AutoStoriesTwoTone";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
import PrecisionManufacturingTwoToneIcon from "@mui/icons-material/PrecisionManufacturingTwoTone";
import NewspaperTwoToneIcon from "@mui/icons-material/NewspaperTwoTone";
import MilitaryTechTwoToneIcon from "@mui/icons-material/MilitaryTechTwoTone";

import LinearProgress from "@mui/material/LinearProgress";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Link from "next/link";

import { useRecoilState } from "recoil";
import { layoutTitle } from "../recoil/atoms/atom";
import AlertDialogSlide from "../components/AlertDialogSlide/AlertDialogSlide";

const drawerWidth = 240;
const TopAppBarHeight = 64;

const mainItems = [
  {
    text: "ポスト",
    title: "ポスト",
    icon: <TocTwoToneIcon style={{ color: "white" }} />,
    path: "/main/post",
  },
  {
    text: "プロジェクト",
    title: "プロジェクト",
    icon: <AccountTreeTwoToneIcon style={{ color: "white" }} />,
    path: "/main/project",
  },
  {
    text: "ロードマップ",
    title: "ロードマップ",
    icon: <DirectionsWalkRoundedIcon style={{ color: "white" }} />,
    path: "/main/roadmap",
  },
  {
    text: "学習",
    title: "学習",
    icon: <SchoolTwoToneIcon style={{ color: "white" }} />,
    path: "/main/learn",
  },
  {
    text: "共有",
    title: "共有",
    icon: <ShareTwoToneIcon style={{ color: "white" }} />,
    path: "/main/share",
  },
  {
    text: "自動化",
    title: "自動化",
    icon: <PrecisionManufacturingTwoToneIcon style={{ color: "white" }} />,
    path: "/main/automation",
  },
  {
    text: "教材",
    title: "教材",
    icon: <AutoStoriesTwoToneIcon style={{ color: "white" }} />,
    path: "/main/books",
  },

  {
    text: "資格",
    title: "資格",
    icon: <MilitaryTechTwoToneIcon style={{ color: "white" }} />,
    path: "/main/qualification",
  },
];
const subItems = [
  {
    text: "Profile ",
    icon: <AccountBoxTwoToneIcon style={{ color: "white" }} />,
    path: "/main/profile",
  },
  {
    text: "Contact",
    icon: <SendTwoToneIcon style={{ color: "white" }} />,
    path: "/main/contact",
  },
  {
    text: "Settings",
    icon: <SettingsTwoToneIcon style={{ color: "white" }} />,
    path: "/main/settings",
  },
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
  // boxSizing: "border-box",
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
  display: "flex",
};

function HideOnScroll({
  children,
  window,
}: {
  children: React.ReactElement;
  window?: () => Window;
}) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Main({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [title, setTitle] = useRecoilState(layoutTitle);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // ローカルストレージから状態を読み込む
    const savedTitle = localStorage.getItem("title");
    if (savedTitle) {
      setTitle(savedTitle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    // 状態が変更されるたびにローカルストレージに保存する
    if (title) {
      localStorage.setItem("title", title);
    }
  }, [title]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpen = (title: string) => {
    if (
      title === "ポスト" ||
      title === "プロジェクト" ||
      title === "ロードマップ" ||
      title === "テンプレート"
    ) {
      // タイトルを変更
      // Recoilで状態を管理する
      setTitle(title);
      setOpen(true);
      setLoading(true); // サイドメニューを開く時にローディングを開始
      setTimeout(() => {
        setLoading(false); // 〜後にローディングを終了
      }, 1820);
    } else {
      // AlertDialogSlideコンポーネントを表示
      setTitle(title);
    }
  };
  return (
    <section style={mainBackgroundColor}>
      <AlertDialogSlide alertDetail={title} />
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
        {loading && ( // loadingの状態がtrueの時にLinearProgressコンポーネントを表示
          <div>
            <LinearProgress />
          </div>
        )}
      </TopAppBar>
      <HideOnScroll>
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
            <h1 className="font-bold">{title}</h1>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div
        style={{
          background: "linear-gradient(45deg, #003CFF, #8FD4FF)",
        }}
      >
        <Drawer variant="permanent" open={open} className={styles.drawerPaper}>
          <HideOnScroll>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
          </HideOnScroll>
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
                <Link
                  href={item.path ?? "/default-path"}
                  passHref
                  key={item.text}
                  onClick={() => handleOpen(item.title)}
                >
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
                </Link>
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
