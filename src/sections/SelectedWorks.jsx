import React from "react";
import { Section } from "../muiThemeConfig/muiThemeConfig";
import GridContainer from "../components/gridContainer/GridContainer";

function SelectedWorks() {
  return (
    <Section
      sx={{
        pt: "120px",
        pb: "125px",
      }}
    >
      <GridContainer />
    </Section>
  );
}

export default SelectedWorks;
