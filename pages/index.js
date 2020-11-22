import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Grid from "@material-ui/core/Grid";
import { Listitem } from "./listitem";

import Chart from "./Poker/Chart";
import Deposits from "./Poker/Deposits";
import { Doughnut } from "react-chartjs-2";

const drawerWidth = 240;

const data = {
  labels: ["AMZN", "SE", "SQ","BA","BYND","SNAP","NIO","U"],
  datasets: [
    {
      data: [0.38, 0.14, 0.07,0.123,0.05,0.1,0.08,0.046],
      backgroundColor: ["#33eb91","#00b0ff","#009688","#FF6384","#f44336","#ffeb3b", "#36A2EB", "#834bff"],
      hoverBackgroundColor: ["#33eb91","#00b0ff","#009688","#FF6384","#f44336","#ffeb3b", "#36A2EB", "#834bff"],
    },
  ],
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  background: {
    backgroundColor: "#FFD382",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Kobe's Space
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{Listitem}</List>

        <Divider />
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Box my={4}>
          <Paper className={fixedHeightPaper}>
            <Chart />
          </Paper>
        </Box>

        <Paper className={fixedHeightPaper}>
            <Deposits />
          </Paper>
        <Box my={4}>
          
          <Box p={24} display="flex">
          <Doughnut data={data} width={3} height={3 } />
          </Box>
        </Box>

        
      </main>
    </div>
  );
}

{
  /* <div
          style={{
            backgroundImage:{level},
            width: "100%",
            height: [300],
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          xxx
        </div> */
}
