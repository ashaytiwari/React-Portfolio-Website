import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./Header.styles";
import styles from "./Header.module.css";
import logo from "../../assets/Images/logo2.png";
import Scrollspy from "react-scrollspy";
import { useLocation } from "react-router-dom";
import { MenuItem } from "@material-ui/core";

//Static Data for header
const headerData = [
  { name: "Home", id: "#home" },
  { name: "About", id: "#about" },
  { name: "Work", id: "#work" },
  { name: "Contact", id: "#contact" },
];

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const location = useLocation();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  console.log(location.hash, "hash");

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={`${styles.menuHeader} text-center`}
    >
      <Scrollspy items={["home", "about", "contact", "portfolio"]}>
        {headerData.map((item) => (
          <MenuItem onClick={() => handleMobileMenuClose()}>
            <a
              href={item.id}
              className={
                !location.hash && item.name === "Home"
                  ? styles.activeNavLinkMenu
                  : location.hash === item.id
                  ? styles.activeNavLinkMenu
                  : styles.navLinksMenu
              }
            >
              {item.name}
            </a>
          </MenuItem>
        ))}
      </Scrollspy>
    </Menu>
  );

  return (
    <React.Fragment>
      <div className={classes.grow}>
        <AppBar position="fixed" className={styles.header}>
          <Toolbar variant={"dense"}>
            <div className={styles.headerLogo}>
              <IconButton className={styles.logoButton}>
                <img src={logo} alt={"logo"} className={styles.logoImage} />
              </IconButton>
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Scrollspy
                className="scrollspy"
                items={["home", "about", "work", "contact"]}
              >
                {headerData.map((item, index) => (
                  <a
                    href={item.id}
                    className={
                      !location.hash && item.name === "Home"
                        ? styles.activeNavLink
                        : location.hash === item.id
                        ? styles.activeNavLink
                        : styles.navLinks
                    }
                  >
                    {item.name}
                  </a>
                ))}
              </Scrollspy>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    </React.Fragment>
  );
}
