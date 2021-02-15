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
  Divider,
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

export default function Home() {
  const classes = useStyles();
  return (
    <Container fixed>
      <Head>
        <title>Jose Jaime Figueroa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={3}>
        <Grid item xs={4} style={{ backgroundColor: "#d6d7d8" }}>
          <Grid container direction="row" justify="center" alignItems="center">
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
            style={{ marginTop: "10%" }}
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

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Mail />
                    </ListItemIcon>
                    <ListItemText>
                      <Link href="mailto:jaimefigueroa84@gmail.com">
                        <a target="_blank">jaimefigueroa84@gmail.com</a>
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Call />
                    </ListItemIcon>
                    <ListItemText> +52 656 301 91 67</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LinkedIn />
                    </ListItemIcon>
                    <ListItemText> JJFigueroa</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <GitHub />
                    </ListItemIcon>
                    <ListItemText> GitHub </ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ marginTop: "10%" }}
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
                <Typography variant="subtitle1">Spanish</Typography>
              </Grid>
              <Grid item xs={12} className={classes.root}>
                <BorderLinearProgress variant="determinate" value={100} />
              </Grid>
              <Grid item xs={12}>
                <Typography align="right">Native</Typography>
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
                <Typography>English</Typography>
              </Grid>
              <Grid item xs={12} className={classes.root}>
                <BorderLinearProgress variant="determinate" value={50} />
              </Grid>
              <Grid item xs={12}>
                <Typography align="right">Intermediate</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ marginTop: "10%" }}
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
              spacing={1}
            >
              <Grid item xs={12}>
                <List>
                  <ListItem>
                    {/* <ListItemIcon></ListItemIcon> */}
                    <ListItemText>Dec - 2011</ListItemText>
                    <ListItemText>
                      Ingeniero en Desarrollo de Software
                    </ListItemText>
                  </ListItem>
                  <ListItem>Test2</ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                elevation={0}
                square
                style={{ backgroundColor: "#2c3e50" }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    align="center"
                    style={{
                      color: "#eaeaea",
                      borderBottom: "2px solid #eaeaea",
                      paddingTop: "10%",
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
            </Grid>
            <Grid item xs={12}>
              <Grid container direction="column">
                <Grid item>
                  <h4 className={styles.detail__title}>Profile</h4>
                </Grid>
                <Grid item>
                  {/* <div className={styles.detail__description}> */}
                  <p>Why do I like Programming?</p>
                  <p>
                    Creating systems means evolving, and I like to be part of
                    the evolution, give something to the world.
                  </p>
                  <p>
                    That's why I'm trying to get involved in projects that
                    implicate developing programs with the purpose of improve
                    the quality life in the world.
                  </p>

                  {/* </div> */}
                </Grid>
              </Grid>
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
          <Grid container direction="column">
            <Grid item xs>
              <h4 className={styles.detail__title}>
                Woodhead de Mexico a Divition of Molex
              </h4>
            </Grid>
            <Grid item>
              <p>Jan 2018 - Oct 2020</p>
              <p>
                As a Software Engineer in Molex, I was responsible to made
                improvements about manual process into a digital process.
              </p>

              <div className={styles.details}>
                <List>
                  <Typography variant="subtitle1">Achievements</Typography>
                  <ListItem></ListItem>
                  <ListItem></ListItem>
                  <ListItem>
                    <ListItemText>
                      <Typography variant="body2">VBA Macros</Typography>
                    </ListItemText>
                    <ListItemText>
                      <Typography variant="body2">
                        Interfaces were created with SAP from Excel in order to
                        made massive updates and new records.
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
                <h4 className={styles.detail__title}></h4>
              </div>
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Grid item xs>
              <h4 className={styles.detail__title}>Personal Projects</h4>

              <div className={styles.details}>
                <h4 className={styles.detail__title}>Achievements</h4>
              </div>
            </Grid>
            <Grid item>
              {/* <div className={styles.detail__description}> */}
              <p>
                As a Software Engineer in Molex, I was responsible to made
                improvements about manual process into a digital process.
              </p>

              {/* </div> */}
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Grid item xs>
              <h4 className={styles.detail__title}>Personal Projects</h4>

              <div className={styles.details}>
                <h4 className={styles.detail__title}>Achievements</h4>
              </div>
            </Grid>
            <Grid item>
              {/* <div className={styles.detail__description}> */}
              <p>
                As a Software Engineer in Molex, I was responsible to made
                improvements about manual process into a digital process.
              </p>

              {/* </div> */}
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Grid item xs>
              <h4 className={styles.detail__title}>Personal Projects</h4>

              <div className={styles.details}>
                <h4 className={styles.detail__title}>Achievements</h4>
              </div>
            </Grid>
            <Grid item>
              {/* <div className={styles.detail__description}> */}
              <p>
                As a Software Engineer in Molex, I was responsible to made
                improvements about manual process into a digital process.
              </p>

              {/* </div> */}
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Grid item xs>
              <h4 className={styles.detail__title}>Personal Projects</h4>

              <div className={styles.details}>
                <h4 className={styles.detail__title}>Achievements</h4>
              </div>
            </Grid>
            <Grid item>
              {/* <div className={styles.detail__description}> */}
              <p>
                As a Software Engineer in Molex, I was responsible to made
                improvements about manual process into a digital process.
              </p>

              {/* </div> */}
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Grid item xs>
              <h4 className={styles.detail__title}>Personal Projects</h4>

              <div className={styles.details}>
                <h4 className={styles.detail__title}>Achievements</h4>
              </div>
            </Grid>
            <Grid item>
              {/* <div className={styles.detail__description}> */}
              <p>
                As a Software Engineer in Molex, I was responsible to made
                improvements about manual process into a digital process.
              </p>

              {/* </div> */}
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Grid item xs>
              <h4 className={styles.detail__title}>Personal Projects</h4>

              <div className={styles.details}>
                <h4 className={styles.detail__title}>Achievements</h4>
              </div>
            </Grid>
            <Grid item>
              {/* <div className={styles.detail__description}> */}
              <p>
                As a Software Engineer in Molex, I was responsible to made
                improvements about manual process into a digital process.
              </p>

              {/* </div> */}
            </Grid>
          </Grid>

          <div className={styles.details}>
            <h4 className={styles.detail__title}>Career and Certifications</h4>
            <div className={styles.detail__description}>
              <p>
                <Link href="http://tecmilenio.mx/">
                  <a target="_blank">
                    "Ingeniero en Desarrollo de Software" at Universidad
                    TecMilenio Ciudad Juárez
                  </a>
                </Link>
              </p>
              <p>Javascript Certs</p>
              <p></p>
            </div>
          </div>
        </Grid>
      </Grid>

      <footer className={styles.footer}>
        {/* <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          >
          Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a> */}
        Powered by JJFIGUEROA
      </footer>
    </Container>
    // <>
    //   <Head>
    //     <title>Resumen of Jose Jaime Figueroa</title>
    //     <link rel='icon' href='/favicon.ico' />
    //   </Head>
    //   <div className='container-fluid header templateBG' style={{ marginTop: -20 }}>
    //     <div className='container'>
    //       <div className='row'>
    //         <div className='col-xs-12 col-sm-3'>
    //           <img ng-src='images/Profile.JPG' className='img-circle center-block' style={{ width: 150 }} />
    //         </div>
    //         <div className='col-xs-12 col-sm-9 text-right'>
    //           <span style={{ fontSize: '.9em' }}>Last Updated: September, 2020</span>
    //           <h1>Software Engineer</h1>
    //           <h3>Jose Jaime Figueroa Barrios</h3>
    //           <a href='mailto:jaimefigueroa84@gmail.com'>jaimefigueroa84@gmail.com</a>
    //         </div>
    //         <Link href='static/CV - Jaime Figueroa.pdf'>
    //           <a target='_blank' className='btn btn-sm btn-default' download>
    //             Download Resume
    //           </a>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
