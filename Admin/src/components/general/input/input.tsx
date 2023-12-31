import React from "react";
import { InputProps } from "@/typesrafce";
import Image from "next/image";
import styles from "./input.module.css";

const InputBox = ({
  type,
  name,
  id,
  holder,
  icons,
  value,
  handleChange,
  inputStyle,
}: InputProps) => {
  return (
    <div className={`${styles.input__box} ${inputStyle}`}>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={holder}
        value={value}
        onChange={handleChange}
      />
      <span>{icons}</span>
    </div>
  );
};

export default InputBox;
