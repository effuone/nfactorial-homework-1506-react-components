import React from "react";
import { ReactComponent as StarWarsLogoSVG } from "../../assets/star-wars.svg";
import { ReactComponent as IconSearchSVG } from "../../assets/icon-search.svg";
import { swLinks } from "../../data/starWarsLinks";
import { TextField } from "@mui/material";
import { useState } from "react";
export const Header = ({ fan, mode }) => {
  return (
    <header className={mode}>
      <div className="links-layout">
        {swLinks.map((link) => (
          <a
            key={link.name}
            className="link"
            href={link.url}
            target="_blank"
            alt={link.name}
            rel="noreferrer"
          >
            {link.component}
          </a>
        ))}
        
      </div>
      <StarWarsLogoSVG />
      <div className="search-layout">
        <IconSearchSVG className="search-icon" />
        <TextField
         id="outlined-basic"
         label="Search Star Wars"
         variant="outlined"
         InputProps={{
          style: {
            backgroundColor: 'white' 
          }
         }}
        />
        <div style={{ color: "white", paddingTop: "1rem" }}>
          I am fan of: {fan}
        </div>
      </div>
    </header>
  );
};
