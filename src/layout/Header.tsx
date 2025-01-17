import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

function ResponsiveAppBar() {
  const router = useRouter();
  const { t } = useTranslation(router);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorSubMenu, setAnchorSubMenu] = React.useState<null | HTMLElement>(
    null
  );
  const [submenu, setSubmenu] = React.useState<string>("");

  const links = [
    { title: t("Home"), link: "/" },
    {
      title: t("About.About"),
      link: "/tentang",
      links: [
        { title: t("About.WhyAIS.WhyAIS"), link: "/why-us" },
        { title: t("About.Facilities.Title"), link: "/facilities" },
        { title: t("About.Guru.Title"), link: "/staf-pengajar" },
        { title: t("About.Teknisi.Title"), link: "/staf-it" },
        { title: t("About.Santri.Title"), link: "/santri" },
        // { title: "AIS Team", link: "/ais-team" },
      ],
    },
    {
      title: t("Academics.Title"),
      link: "/akademik",
      links: [
        { title: t("Academics.Curriculum.Title"), link: "/kurikulum" },
        // { title: t("Academics.StudyLevels.KG.Title"), link: "/study-level" },
        { title: t("Academics.Kosp.Title"), link: "/kosp" },
        { title: t("Academics.Skkd.Title"), link: "/skkd" },
        { title: t("Academics.Modul.Title"), link: "/modul" },
      ],
    },
    {
      title: t("Media.Title"),
      link: "/media",
      links: [
        { title: t("Media.Foto.Title"), link: "/foto" },
        { title: t("Media.Vidio.Title"), link: "/vidio" },
      ],
    },
    { title: t("News.News"), link: "/informasi" },
    { title: t("Contact.Contact"), link: "/kontak" },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: theme.palette.blue.dark,
        direction: router.locale === "ar" ? "rtl" : "ltr",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense" style={{ margin: "10px auto" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                  display: { xs: "block", md: "none" },
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                {links.map(({ title, link, links }, i) =>
                  links ? (
                    <React.Fragment key={i}>
                      <ListItemButton
                        onClick={() => {
                          setSubmenu((current) =>
                            current === link + "mobile" ? "" : link + "mobile"
                          );
                        }}
                      >
                        <ListItemText primary={title} />
                        {submenu === link + "mobile" ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )}
                      </ListItemButton>

                      <Collapse
                        in={submenu === link + "mobile"}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {links.map(
                            ({ link: sublink, title: subtitle }, y) => (
                              <Link
                                href={link + "/" + sublink}
                                key={y}
                                onClick={() => {
                                  setSubmenu("");
                                  handleCloseNavMenu();
                                }}
                                role="button"
                                style={{
                                  textDecoration: "none",
                                  color: theme.palette.blue.dark,
                                  display: "block",
                                }}
                              >
                                <ListItemButton>
                                  <ListItemText primary={subtitle} />
                                </ListItemButton>
                              </Link>
                            )
                          )}
                        </List>
                      </Collapse>

                      <Divider />
                    </React.Fragment>
                  ) : (
                    <React.Fragment key={i}>
                      <Link
                        href={link}
                        key={i}
                        onClick={handleCloseNavMenu}
                        role="button"
                        style={{
                          textDecoration: "none",
                          color: theme.palette.blue.dark,
                          display: "block",
                        }}
                      >
                        <ListItemButton>
                          <ListItemText primary={title} />
                        </ListItemButton>
                      </Link>
                    </React.Fragment>
                  )
                )}
              </List>
            </Menu>
          </Box>

          <Link
            href="/"
            style={{
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: theme.palette.basic.light,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            <img src="/images/AIS-En-Mobile-Logo-1-White.png" width="75%" />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {links.map(({ title, link, links }, i) =>
              links ? (
                <React.Fragment key={i}>
                  <div
                    aria-controls={
                      submenu === link ? `${link}-basic-menu` : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={submenu === link ? "true" : undefined}
                    onClick={(e) => {
                      setSubmenu((current) => (current === link ? "" : link));
                      setAnchorSubMenu(e.currentTarget);
                    }}
                    style={{
                      textDecoration: "none",
                      color: theme.palette.basic.light,
                      display: "block",
                      margin: "2em 0.5em",
                      cursor: "pointer",
                      textTransform: "uppercase",
                    }}
                    role="button"
                  >
                    {title}
                  </div>

                  <Menu
                    id={`${link}-basic-menu`}
                    open={submenu === link}
                    anchorEl={anchorSubMenu}
                    onClose={() => setSubmenu("")}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    {links.map(({ link: sublink, title: subtitle }, y) => (
                      <MenuItem onClick={() => setSubmenu("")} key={y}>
                        <Link
                          href={link + "/" + sublink}
                          onClick={() => setSubmenu("")}
                          role="button"
                          style={{
                            textDecoration: "none",
                            color: theme.palette.blue.dark,
                            display: "block",
                          }}
                        >
                          {subtitle}
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              ) : (
                <Link
                  key={i}
                  href={link}
                  onClick={handleCloseNavMenu}
                  role="button"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.basic.light,
                    display: "block",
                    margin: "2em 0.5em",
                    textTransform: "uppercase",
                  }}
                >
                  {title}
                </Link>
              )
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link
              href=""
              locale={router.locale === "ar" ? "en" : "ar"}
              role="button"
              style={{
                textDecoration: "none",
                color: theme.palette.basic.light,
                display: "block",
              }}
            >
              {t("OtherLang")}
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;