import React from "react";
import mailSvg from "../../assets/mail.svg";
import manSvg from "../../assets/man.svg";
import womanSvg from "../../assets/woman.svg";
import manAgeSvg from "../../assets/growing-up-man.svg";
import womanAgeSvg from "../../assets/growing-up-woman.svg";
import mapSvg from "../../assets/map.svg";
import phoneSvg from "../../assets/phone.svg";
import padlockSvg from "../../assets/padlock.svg";

const ValueList = ({ gender, selection }) => {
  const handleSend = (e) => {
    selection(e.target.className.split(" ")[1]);
  };

  return (
    <div className="values-list">
      <button className="icon name" data-label="name" onMouseEnter={handleSend}>
        <img
          src={gender === "male" ? manSvg : womanSvg}
          alt="user"
          id="iconImg"
        />
      </button>
      <button
        className="icon email"
        data-label="email"
        onMouseEnter={handleSend}
      >
        <img src={mailSvg} alt="mail" id="iconImg" />
      </button>
      <button className="icon age" data-label="age" onMouseEnter={handleSend}>
        <img
          src={gender === "male" ? manAgeSvg : womanAgeSvg}
          alt="age"
          id="iconImg"
        />
      </button>
      <button
        className="icon street"
        data-label="street"
        onMouseEnter={handleSend}
      >
        <img src={mapSvg} alt="map" id="iconImg" />
      </button>
      <button
        className="icon phone"
        data-label="phone"
        onMouseEnter={handleSend}
      >
        <img src={phoneSvg} alt="phone" id="iconImg" />
      </button>
      <button
        className="icon password"
        data-label="password"
        onMouseEnter={handleSend}
      >
        <img src={padlockSvg} alt="lock" id="iconImg" />
      </button>
    </div>
  );
};

export default ValueList;
