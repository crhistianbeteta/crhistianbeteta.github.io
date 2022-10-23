import React from "react";
import Chip from "@mui/material/Chip";
import PropTypes from "prop-types";

export default function StyledChip({ text }) {
  return (
    <Chip
      style={{ margin: "5px 5px 5px 0px" }}
      label={text}
      variant="outlined"
    />
  );
}

StyledChip.propTypes = {
  text: PropTypes.string.isRequired,
};
