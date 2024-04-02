import { Box, Link } from "@mui/material";
import React from "react";

function HeaderNav() {
  return (
    <Box component={"nav"} display={"flex"} gap={"30px"}>
      <Link href="#" variant="body1" underline="none">
        About us
      </Link>
      <Link href="#" variant="body1" underline="none">
        Services
      </Link>
      <Link href="#" variant="body1" underline="none">
        Our work
      </Link>
      <Link href="#" variant="body1" underline="none">
        Blog
      </Link>
    </Box>
  );
}

export default HeaderNav;
