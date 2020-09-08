import Head from 'next/head';
import Link from 'next/link';
import { Grid, Button, Typography, Paper, Container, IconButton } from '@material-ui/core';
import Mail from '@material-ui/icons/Mail';
import Call from '@material-ui/icons/Call';
import Update from '@material-ui/icons/Update';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resumen of Jose Jaime Figueroa</title>
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <img src='images/JJFB-4.jpg' style={{ width: 100, margin: '1rem', border: 'solid 2px #f3f3f3', borderRadius: '100%' }} />
        <h1 className={styles.title}>
          Software Engineer
          {/* <Link href='https://nextjs.org'>
            <a>Next.js!</a>
          </Link> */}
        </h1>

        <p className={styles.description}>Jose Jaime Figueroa Barrios {/* <code className={styles.code}>pages/index.js</code> */}</p>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} lg={3} xl={3}>
            <Typography align='center'>
              <Button color='inherit'>
                <Mail />
                jaimefigueroa84@gmail.com
              </Button>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={3}>
            <Typography align='center'>
              <Button color='inherit'>
                <Call />
                +52 656 301 91 67
              </Button>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={3}>
            <Typography align='center'>
              <Button>
                <Update />
                Updated: September 2020
              </Button>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={3}>
            <Typography align='center'>
              <Button color='default' variant='contained' size='small'>
                Download Resume
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
        </Grid>
        <div className={styles.details}>
          <h4 className={styles.detail__title}>Profile</h4>
          <div className={styles.detail__description}>
            <p>Why do I like Programming?</p>
            <p>Creating systems means evolving, and I like to be part of the evolution, give something to the world.</p>
            <p>
              That's why I'm trying to get involved in projects that implicate developing programs with the purpose of practicing and
              continuing to learn new technologies.
            </p>
          </div>
        </div>
        <div className={styles.details}>
          <h4 className={styles.detail__title}>What you get?</h4>
          <div className={styles.detail__description}>
            <p>These are the benefits that you get when add software into your company:</p>
            <p> * Procesos digitales que resultan en datos inmediatos para la toma de deciciones.</p>
            <p>Creating systems means evolving, and I like to be part of the evolution, give something to the world.</p>
            <p>
              That's why I'm trying to get involved in projects that implicate developing programs with the purpose of practicing and
              continuing to learn new technologies.
            </p>
          </div>
        </div>
        <div className={styles.details}>
          <h4 className={styles.detail__title}>Portafolio</h4>
          <Container style={{ maxWidth: 1100 }}>
            <Grid container spacing={3} direction='row' justify='space-evenly' alignItems='center' style={{ marginTop: '1rem' }}>
              <Grid item xs={12} sm={6} lg={4} xl={4}>
                <Paper elevation={5} style={{ padding: '1rem' }}>
                  <Link href='https://nextjs.org/docs'>
                    <a className={styles.card}>
                      <h3>HR-Recruiter &rarr;</h3>
                      <p>Find in-depth information about Next.js features and API.</p>
                    </a>
                  </Link>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={4} xl={4}>
                <Paper elevation={5} style={{ padding: '1rem' }}>
                  <Link href='https://nextjs.org/docs'>
                    <a className={styles.card}>
                      <h3>HR-Training &rarr;</h3>
                      <p>Find in-depth information about Next.js features and API.</p>
                    </a>
                  </Link>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={4} xl={4}>
                <Paper elevation={5} style={{ padding: '1rem' }}>
                  <Link href='https://nextjs.org/docs'>
                    <a className={styles.card}>
                      <h3>ScanPack &rarr;</h3>
                      <p>Find in-depth information about Next.js features and API.</p>
                    </a>
                  </Link>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={4} xl={4}>
                <Paper elevation={5} style={{ padding: '1rem' }}>
                  <Link href='https://nextjs.org/docs'>
                    <a className={styles.card}>
                      <h3>MRO Inventory &rarr;</h3>
                      <p>Find in-depth information about Next.js features and API.</p>
                    </a>
                  </Link>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={4} xl={4}>
                <Paper elevation={5} style={{ padding: '1rem' }}>
                  <Link href='https://nextjs.org/docs'>
                    <a className={styles.card}>
                      <h3>Visitor Badges &rarr;</h3>
                      <p>Find in-depth information about Next.js features and API.</p>
                    </a>
                  </Link>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className={styles.details}>
          <h4 className={styles.detail__title}>Career</h4>
          <div className={styles.detail__description}>
            <p>
              <Link href='http://tecmilenio.mx/'>
                <a target='_blank'>"Ingeniero en Desarrollo de Software" at Universidad TecMilenio Ciuda Juárez</a>
              </Link>
            </p>
            <p>Why do I like Programming?</p>
            <p>Creating systems means evolving, and I like to be part of the evolution, give something to the world.</p>
            <p>
              That's why I'm trying to get involved in projects that implicate developing programs with the purpose of practicing and
              continuing to learn new technologies.
            </p>
          </div>
        </div>

        {/* <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href='https://github.com/vercel/next.js/tree/master/examples' className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
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
