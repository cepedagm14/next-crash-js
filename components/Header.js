import React from "react";
import headerStyle from "../styles/Header.module.css";

export const Header = () => {
  return (
    <div>
      <h1 className={headerStyle.title}>
        <span>WebDEv</span>
        News
      </h1>
      <p className={headerStyle.description}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
        accusantium eos quae itaque odit repudiandae numquam, libero quaerat
        recusandae alias.
      </p>
    </div>
  );
};
