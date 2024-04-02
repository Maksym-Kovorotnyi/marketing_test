import React from "react";
import Btn from "../button/Btn";
import { Box } from "@mui/material";

function Form() {
  return (
    <form style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Email"
        style={{
          width: "100%",
          height: "72px",
          borderRadius: "64px",
          padding: "8px 8px 8px 32px",
        }}
      />
      <Box position={"absolute"} top={"10%"} right={"1%"}>
        <Btn content={"SUBMIT"} />
      </Box>
    </form>
  );
}

export default Form;
