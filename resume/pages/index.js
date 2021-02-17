import Head from "next/head";
import Link from "next/link";
import {
  Grid,
  Button,
  Typography,
  Paper,
  Container,
  IconButton,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Hidden,
} from "@material-ui/core";
import Mail from "@material-ui/icons/Mail";
import Call from "@material-ui/icons/Call";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import Update from "@material-ui/icons/Update";
import styles from "../styles/Home.module.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#415262",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Container fixed>
        <Head>
          <title>Jose Jaime Figueroa</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* // Profile */}
        <Grid container spacing={3}>
          <Hidden only={["xs", "sm", "md"]}>
            <Grid item xs={4} style={{ backgroundColor: "#d6d7d8" }}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <img
                  src="images/17651-1.jpg"
                  style={{
                    width: "50%",
                    margin: "1rem",
                    border: "solid 2px #f3f3f3",
                    borderRadius: "100%",
                  }}
                />
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ marginTop: "5%" }}
              >
                <Grid
                  item
                  xs={12}
                  style={{
                    padding: 8,
                    backgroundColor: "#fbfbfb",
                    marginBottom: "2%",
                  }}
                >
                  <Typography variant="subtitle1" align="center">
                    PROFILE
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="body2" gutterBottom>
                        <b>Why do I like Programming?</b>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Creating systems means evolving, and I like to be part
                        of evolution, give something to the world.
                      </Typography>
                      <Typography variant="body2">
                        That's why I'm trying to get involved in projects that
                        implicate developing programs with the purpose of
                        improving the quality of life in the world.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ marginTop: "5%" }}
              >
                <Grid
                  item
                  xs={12}
                  style={{
                    padding: 8,
                    backgroundColor: "#fbfbfb",
                    marginBottom: "2%",
                  }}
                >
                  <Typography variant="subtitle1" align="center">
                    CONTACT
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} justify="center" alignItems="center">
                <Grid item xs={12}>
                  <List>
                    <ListItemLink
                      href="mailto:jaimefigueroa84@gmail.com"
                      target="_blank"
                    >
                      <ListItemIcon>
                        <Mail />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="body2">
                          jaimefigueroa84@gmail.com
                        </Typography>
                      </ListItemText>
                    </ListItemLink>
                    <ListItemLink
                      href="https://wa.me/526563019167"
                      target="_blank"
                    >
                      <ListItemIcon>
                        <Call />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="body2">
                          +52 656 301 91 67
                        </Typography>
                      </ListItemText>
                    </ListItemLink>
                    <ListItemLink
                      href="https://www.linkedin.com/in/jaime-figueroa-97226898/"
                      target="_blank"
                    >
                      <ListItemIcon>
                        <LinkedIn />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="body2">JJFigueroa</Typography>
                      </ListItemText>
                    </ListItemLink>
                    <ListItemLink
                      href="https://github.com/JFigue27"
                      target="_blank"
                    >
                      <ListItemIcon>
                        <GitHub />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="body2">GitHub/JFigue27</Typography>
                      </ListItemText>
                    </ListItemLink>
                  </List>
                </Grid>
                {/* <Grid item xs={12}>
                <Typography align="center">
                  <Button color="default" variant="contained" size="small">
                    <a
                      href="static/Resumen of JJFigueroa.pdf"
                      target="_blank"
                      className="btn btn-sm btn-default"
                      download
                    >
                      Download Resume
                    </a>
                  </Button>
                </Typography>
              </Grid> */}
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  style={{ marginTop: "5%" }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{ padding: 8, backgroundColor: "#fbfbfb" }}
                  >
                    <Typography variant="subtitle1" align="center">
                      LANGUAGES
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                  style={{ marginTop: "1%" }}
                >
                  <Grid item xs={12}>
                    <Typography variant="body2">Spanish</Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.root}>
                    <BorderLinearProgress variant="determinate" value={100} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" align="right">
                      Native
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item xs={12}>
                    <Typography variant="body2">English</Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.root}>
                    <BorderLinearProgress variant="determinate" value={60} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" align="right">
                      Intermediate
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  style={{ marginTop: "5%" }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{ padding: 8, backgroundColor: "#fbfbfb" }}
                  >
                    <Typography variant="subtitle1" align="center">
                      EDUCATION
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  style={{ marginTop: "5%", marginBottom: "5%" }}
                >
                  <Grid item xs={3}>
                    <Typography variant="subtitle2" align="left">
                      Dec - 2011
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="body2" align="left">
                      Ingeniero en Desarrollo de Software
                    </Typography>
                    <Typography variant="body2" align="left">
                      Universidad TecMilenio Ciudad Juárez
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="overline"> Certifications </Typography>
                  <Divider />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs>
                  <Typography variant="body2"></Typography>
                  <List>
                    <ListItemLink
                      href="https://platzi.com/p/jjfigueroa/curso/1350-html5-css3/diploma/detalle/"
                      target="_blank"
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <img src="images/web.png" width="125%" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Desarrollo Web Online" />
                    </ListItemLink>
                    <ListItemLink
                      href="https://platzi.com/p/jjfigueroa/curso/1229-css-grid-layout-2017/diploma/detalle/"
                      target="_blank"
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <img src="images/css_grid.png" width="125%" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="CSS Grid Layout" />
                    </ListItemLink>
                    <ListItemLink
                      href="https://platzi.com/p/jjfigueroa/curso/1339-fundamentos-javascript/diploma/detalle/"
                      target="_blank"
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <img src="images/js_icon.png" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Fundamentos de Javascript" />
                    </ListItemLink>
                    <ListItemLink
                      href="https://platzi.com/p/jjfigueroa/curso/1789-asincronismo-js/diploma/detalle/"
                      target="_blank"
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <img src="images/js_icon.png" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Asyncronismo con Javascript" />
                    </ListItemLink>
                    <ListItemLink
                      href="https://platzi.com/p/jjfigueroa/curso/1651-react-ejs/diploma/detalle/"
                      target="_blank"
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <img src="images/react_icon.png" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Practica de React JS" />
                    </ListItemLink>
                    <ListItemLink
                      href="https://platzi.com/p/jjfigueroa/curso/1652-react-router-redux/diploma/detalle/"
                      target="_blank"
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <img src="images/js_icon.png" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="React Router & Redux" />
                    </ListItemLink>
                    <ListItemLink
                      href="https://platzi.com/p/jjfigueroa/curso/1815-ecmascript-6/diploma/detalle/"
                      target="_blank"
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <img src="images/web.png" width="125%" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="ECMAScript 6+" />
                    </ListItemLink>
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>

          {/* // Work Experience  */}
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper
                  elevation={0}
                  square
                  style={{ backgroundColor: "#2c3e50" }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      align="center"
                      style={{
                        color: "#eaeaea",
                        borderBottom: "2px solid #eaeaea",
                        paddingTop: "8%",
                      }}
                    >
                      JOSE JAIME FIGUEROA BARRIOS
                    </Typography>
                    <Typography
                      variant="h6"
                      align="center"
                      style={{
                        color: "#eaeaea",
                        paddingTop: "1%",
                      }}
                    >
                      Frontend React Developer
                    </Typography>
                  </CardContent>
                </Paper>

                <Hidden only={["lg", "xl"]}>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Divider />
                      <Typography variant="subtitle2" align="center">
                        <b>PROFILE</b>
                      </Typography>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2" gutterBottom>
                        <b> Why do I like programming?</b>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Creating systems means evolving, and I like to be part
                        of evolution, give something to the world.
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        That's why I'm trying to get involved in projects that
                        implicate developing programs with the purpose of
                        improving the quality of life in the world.
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={6}>
                      <Divider />
                      <Typography variant="subtitle2" align="center">
                        <b>CONTACT</b>
                      </Typography>
                      <Divider />

                      <Grid item xs={12}>
                        <List>
                          <ListItemLink
                            href="mailto:jaimefigueroa84@gmail.com"
                            target="_blank"
                          >
                            <ListItemIcon>
                              <Mail />
                            </ListItemIcon>
                            <ListItemText>
                              <Typography variant="body2">
                                jaimefigueroa84@gmail.com
                              </Typography>
                            </ListItemText>
                          </ListItemLink>
                          <ListItemLink
                            href="https://wa.me/526563019167"
                            target="_blank"
                          >
                            <ListItemIcon>
                              <Call />
                            </ListItemIcon>
                            <ListItemText>
                              <Typography variant="body2">
                                +52 656 301 91 67
                              </Typography>
                            </ListItemText>
                          </ListItemLink>
                          <ListItemLink
                            href="https://www.linkedin.com/in/jaime-figueroa-97226898/"
                            target="_blank"
                          >
                            <ListItemIcon>
                              <LinkedIn />
                            </ListItemIcon>
                            <ListItemText>
                              <Typography variant="body2">
                                JJFigueroa
                              </Typography>
                            </ListItemText>
                          </ListItemLink>
                          <ListItemLink
                            href="https://github.com/JFigue27"
                            target="_blank"
                          >
                            <ListItemIcon>
                              <GitHub />
                            </ListItemIcon>
                            <ListItemText>
                              <Typography variant="body2">
                                GitHub/JFigue27
                              </Typography>
                            </ListItemText>
                          </ListItemLink>
                        </List>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                      <Divider />
                      <Typography variant="subtitle2" align="center">
                        <b>LANGUAGES</b>
                      </Typography>
                      <Divider />

                      <Grid item xs={12}>
                        <Typography variant="body2" gutterBottom>
                          Spanish
                        </Typography>
                      </Grid>
                      <Grid item xs={12} className={classes.root}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={100}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2" align="right">
                          Native
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2" gutterBottom>
                          English
                        </Typography>
                      </Grid>
                      <Grid item xs={12} className={classes.root}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={60}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2" align="right">
                          Intermediate
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  elevation={0}
                  square
                  style={{ backgroundColor: "#2c3e50", padding: ".5%" }}
                >
                  <Typography
                    variant="subtitle1"
                    align="center"
                    style={{
                      color: "#eaeaea",
                    }}
                  >
                    WORK EXPERIENCE
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography noWrap>
                  <h4 className={styles.detail__title}>
                    Woodhead México S.A a Division of Molex
                  </h4>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" align="right">
                  Jan 2018 - Oct 2020
                </Typography>
                <Typography variant="body2" gutterBottom>
                  As a Software Developer Engineer in Molex, I was responsible
                  to made improvements converting manual processes into a
                  digital processes.
                </Typography>
                <Typography variant="body2">
                  <b>Achievements:</b>
                </Typography>

                <div className={styles.details}>
                  <Divider />
                  <Grid container spacing={2}>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={3}>
                      <Typography variant="subtitle2" align="center">
                        Digital Visitors Log
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography variant="subtitle2">
                        The purpose of this software is to keep digital records
                        of visitors and to obtain a printed instant badge which
                        is going to be valid only during the visit's time. In
                        order to be in compliance with the security
                        certifications.
                      </Typography>
                      <Typography variant="subtitle2">
                        For this project I used:
                      </Typography>
                      <Typography variant="subtitle2">
                        <b> - Next.js + React in frontend. </b>
                      </Typography>
                      <Typography variant="subtitle2">
                        <b>- .NetCore 3.0 for the backend.</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="subtitle2" align="center">
                        MRO Inventory
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography variant="subtitle2">
                        This software has the capability to manage the MRO
                        inputs and outputs, has an inventory view and can
                        provide the reorder point for buyers, so they can put
                        their purchase orders on time. Also has the module to
                        let users request material by part number and
                        department.
                      </Typography>
                      <Typography variant="subtitle2">
                        For this project I used:
                      </Typography>
                      <Typography variant="subtitle2">
                        <b>- Angular.js </b>
                      </Typography>
                      <Typography variant="subtitle2">
                        <b>- ASP Net Web API for the backend.</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="subtitle2" align="center">
                        VBA Macros
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography variant="subtitle2">
                        Several Interfaces were created for SAP from Excel in
                        order to made massive updates and new records.
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
            <Grid container direction="column">
              <Grid item xs>
                <h4 className={styles.detail__title}>Personal Projects</h4>
                <Typography variant="subtitle2" align="right">
                  Since 2016 - Currently
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  The personal projects are my way to continue learning while I
                  build and resolve real cases in the community.
                </Typography>

                <Typography variant="subtitle2">
                  <b>Achievements:</b>
                </Typography>
                <Divider />
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}></Grid>
                <Grid item xs={3}>
                  <Typography variant="subtitle2" align="center">
                    Siafracc
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="subtitle2">
                    Siafracc is a residential management system which helps to
                    control payments, agreements, account statements and
                    imported information from the bank, in order to maintain a
                    clear visibility of the transactions between the resident
                    and the community administrator.
                  </Typography>
                  <Typography variant="subtitle2">
                    My participation in this project is as a frontend react
                    developer.
                  </Typography>
                  <Typography variant="subtitle2">
                    <b>- React</b>
                  </Typography>
                  <Typography variant="subtitle2">
                    <b>- Next.js</b>
                  </Typography>
                  <Typography variant="subtitle2">
                    <b>- Material UI as a Kit of Components</b>
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="subtitle2" align="center">
                    Platzi Video
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="subtitle2">
                    This project is part of the Platzi Platform where I learn
                    and practice in a daily basis about MERN.
                  </Typography>
                  <Typography variant="subtitle2">
                    <b>- JSON WEB TOKEN (JWT)</b>
                  </Typography>
                  <Typography variant="subtitle2">
                    <b>- Server Side Rendering (SSR)</b>
                  </Typography>
                  <Typography variant="subtitle2">
                    <b>- Redux Thunk</b>
                  </Typography>
                  <Typography variant="subtitle2">
                    <b>- MongoDb as database</b>
                  </Typography>
                  <Typography variant="subtitle2">
                    <b>- Express to build the API.</b>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <h4 className={styles.detail__title}>Skills</h4>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <Grid item xs={12}>
                  <Typography align="center" variant="button">
                    Frontend
                  </Typography>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">HTML</Typography>
                  <BorderLinearProgress variant="determinate" value={70} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">CSS</Typography>
                  <BorderLinearProgress variant="determinate" value={50} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">Javascript</Typography>
                  <BorderLinearProgress variant="determinate" value={60} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">React JS</Typography>
                  <BorderLinearProgress variant="determinate" value={50} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">Redux Thunk</Typography>
                  <BorderLinearProgress variant="determinate" value={40} />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} sm={12} lg={4} xl={4}>
                <Grid item xs={12}>
                  <Typography align="center" variant="button">
                    Backend & Databases
                  </Typography>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">NodeJS</Typography>
                  <BorderLinearProgress variant="determinate" value={40} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">Express</Typography>
                  <BorderLinearProgress variant="determinate" value={30} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">MongoDB</Typography>
                  <BorderLinearProgress variant="determinate" value={25} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">PostgreSQL</Typography>
                  <BorderLinearProgress variant="determinate" value={40} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">SQL Server</Typography>
                  <BorderLinearProgress variant="determinate" value={40} />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <Grid item xs={12}>
                  <Typography align="center" variant="button">
                    Tools
                  </Typography>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">Git</Typography>
                  <BorderLinearProgress variant="determinate" value={60} />
                  <Typography variant="subtitle2" align="right">
                    Control versions
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">GitHub & Gitlab</Typography>
                  <BorderLinearProgress variant="determinate" value={50} />
                  <Typography variant="subtitle2" align="right">
                    Web Repositories
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">Postman</Typography>
                  <BorderLinearProgress variant="determinate" value={60} />
                  <Typography variant="subtitle2" align="right">
                    For APIs
                  </Typography>
                </Grid>
              </Grid>
              <Hidden lgUp>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Divider />
                      <Typography variant="subtitle2" align="center">
                        <b>Certifications</b>
                      </Typography>
                      <Divider />
                    </Grid>
                    <Grid item xs>
                      <List>
                        <ListItemLink
                          href="https://platzi.com/p/jjfigueroa/curso/1350-html5-css3/diploma/detalle/"
                          target="_blank"
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <img src="images/web.png" width="125%" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Desarrollo Web Online" />
                        </ListItemLink>
                        <ListItemLink
                          href="https://platzi.com/p/jjfigueroa/curso/1229-css-grid-layout-2017/diploma/detalle/"
                          target="_blank"
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <img src="images/css_grid.png" width="125%" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="CSS Grid Layout" />
                        </ListItemLink>
                        <ListItemLink
                          href="https://platzi.com/p/jjfigueroa/curso/1339-fundamentos-javascript/diploma/detalle/"
                          target="_blank"
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <img src="images/js_icon.png" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Fundamentos de Javascript" />
                        </ListItemLink>
                        <ListItemLink
                          href="https://platzi.com/p/jjfigueroa/curso/1789-asincronismo-js/diploma/detalle/"
                          target="_blank"
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <img src="images/js_icon.png" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Asyncronismo con Javascript" />
                        </ListItemLink>
                        <ListItemLink
                          href="https://platzi.com/p/jjfigueroa/curso/1651-react-ejs/diploma/detalle/"
                          target="_blank"
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <img src="images/react_icon.png" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Practica de React JS" />
                        </ListItemLink>
                        <ListItemLink
                          href="https://platzi.com/p/jjfigueroa/curso/1652-react-router-redux/diploma/detalle/"
                          target="_blank"
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <img src="images/js_icon.png" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="React Router & Redux" />
                        </ListItemLink>
                        <ListItemLink
                          href="https://platzi.com/p/jjfigueroa/curso/1815-ecmascript-6/diploma/detalle/"
                          target="_blank"
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <img src="images/web.png" width="125%" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="ECMAScript 6+" />
                        </ListItemLink>
                      </List>
                    </Grid>
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
            {/* <Grid item>
              <h4 className={styles.detail__title}>Interests</h4>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  - My .
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  - Do workout on crossfit discipline.
                </Typography>
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
      </Container>
      <div style={{ marginTop: ".9%" }}>
        <footer className={styles.footer}>
          Created by Jose Jaime Figueroa
        </footer>
      </div>
    </>
  );
}
