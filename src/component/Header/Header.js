import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./Header.styles";
import styles from "./Header.module.css";
import logo from "../../assets/Images/logo2.png";
import Scrollspy from "react-scrollspy";

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
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
    >
      <Scrollspy items={["home", "about", "contact", "portfolio"]}>
        <div>
          <li>
            <a href={"#home"}>Home</a>
          </li>
        </div>
        <div>
          <li>
            <a href={"#about"}>About</a>
          </li>
        </div>
        <div>
          <li>
            <a href={"#contact"}>Contact</a>
          </li>
        </div>
        <div>
          <li>
            <a href={"#portfolio"}>Portfolio</a>
          </li>
        </div>
        {/* <li>
                <a href={"home"}>Home</a>
              </li>
              <li>
                <a href={"home"}>Home</a>
              </li>
              <li>
                <a href={"home"}>Home</a>
              </li> */}
      </Scrollspy>
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );

  return (
    <React.Fragment>
      <div className={classes.grow}>
        <AppBar position="static" className={styles.header}>
          <Toolbar>
            <div className={styles.headerLogo}>
              <img src={logo} alt={"logo"} className={styles.logoImage} />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Scrollspy items={["home", "about", "contact", "portfolio"]}>
                <div>
                  <li>
                    <a href={"#home"}>Home</a>
                  </li>
                </div>
                <div>
                  <li>
                    <a href={"#about"}>About</a>
                  </li>
                </div>
                <div>
                  <li>
                    <a href={"#contact"}>Contact</a>
                  </li>
                </div>
                <div>
                  <li>
                    <a href={"#portfolio"}>Portfolio</a>
                  </li>
                </div>
                {/* <li>
                <a href={"home"}>Home</a>
              </li>
              <li>
                <a href={"home"}>Home</a>
              </li>
              <li>
                <a href={"home"}>Home</a>
              </li> */}
              </Scrollspy>
              {/* <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div> */}
              {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
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
      <div>
        <section id="home" className={styles.section}>
          section 1
        </section>
        <section id="about" className={styles.section}>
          section 2
        </section>
        <section id="contact" className={styles.section}>
          section 3
        </section>
        <section id="portfolio" className={styles.section}>
          section 4
        </section>
      </div>
    </React.Fragment>
  );
}
