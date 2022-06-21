import React from "react";
import { swLinks } from "../../data/starWarsLinks";
export const Footer = ({mode}) => {
    return (
      <footer className={mode}>
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
        <h1 style={{backgroundColor: "white"}}>Pull requested by Alibek</h1>
      </footer>
    );
};