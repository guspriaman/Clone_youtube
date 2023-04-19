import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo, github, logoYoutube, logoGithub } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: 'space-between' }}>
    <Link to={logoYoutube} style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <h2 style={{
        color: 'white',
        fontSize: '24px',
        // fontWeight: 'bold',
        fontFamily: 'Serif',
      }}> Clone YT </h2>
    </Link>
    <SearchBar />
    <Link to={logoGithub} style={{ display: "flex", alignItems: "center" }}>
      <img src={github} alt="logo" height={45} />
    </Link>
  </Stack >
);

export default Navbar;
