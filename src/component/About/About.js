import React from 'react'
import styles from './About.module.css'
import { Grid } from '@material-ui/core'
import Profile from '../../assets/Images/profile2.jpeg'
import { KritinUrl } from '../../GlobalUtils/globalconstants'
import ScrollSpy from 'react-scrollspy'

const About = () => {
  const renderToContact = () => {}

  return (
    <div id={'about'} className={styles.aboutSection}>
      <div className={styles.header}>
        <h4 className={styles.aboutHeading}>About</h4>
      </div>
      <div className={styles.body}>
        <Grid container>
          <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
            <div className={styles.aboutWrapper}>
              <div className={styles.imageWrapper}>
                <img className={`${styles.profileImg}`} src={Profile} alt={'profile'} />
                <div className={styles.overlay}>Make it work, make it right, make it fast.</div>
              </div>
              <div className={styles.aboutContent}>
                <h5 className={styles.aboutTitle}>Who's this guy?</h5>
                <p className={styles.aboutText}>
                  I'm a Front-End Developer for{' '}
                  <a href={KritinUrl} className={styles.link} target={'blank'}>
                    Kritin
                  </a>{' '}
                  in Indore, India. I have a passion for web design and development and love to
                  create for web and mobile devices.
                  <ScrollSpy items={['contact']} className={styles.scrollSpy}>
                    <a className={styles.link} onClick={() => renderToContact()} href={'#contact'}>
                      Let's make something special.
                    </a>
                  </ScrollSpy>
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
            Home2
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default About
