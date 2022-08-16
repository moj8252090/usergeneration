import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./avatar.styles.scss";
import UserIcon from "../../../assets/images/user.png";

/**
 * 
 * @param clear clears the interval function whenever it's called
 * @param setPercentage set the percentage of the radial progress bar
 * @param percentage is the percentage value of the radial progress bar 
 * 
 */

const interval = ({ clear, setPercentage, percentage }) =>
  setInterval(() => {
    setPercentage(percentage + 1);
    clear();
  }, 0.005);

/**
 * 
 * @param src is the source address of the avatar
 * @param loading is the boolean to check if the data is loading now
 * @returns the JSX template
 */

function Avatar({ src, loading }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    interval({
      setPercentage,
      percentage,
      clear: () => {
        if (percentage === 100) {
          clearInterval(interval);
        }
      },
    });
  }, []);

  return (
    <div
      className="avatar"
      style={{
        backgroundImage: `url(${src || UserIcon})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      {loading && !src ? (
        <CircularProgressbar strokeWidth={3} value={percentage} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Avatar;
