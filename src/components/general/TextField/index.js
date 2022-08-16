import React from "react";
import { useFormContext } from "react-hook-form";
import "./textfield.styles.scss";

function TextField(props) {
  const { type, placeholder, name, readonly } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        readOnly={readonly && "readOnly"}
        className={`${readonly ? "text-field" : "lined-text-field"} ${
          errors?.[name] && "error"
        }`}
        type={type}
        placeholder={placeholder}
        name={name}
        {...register(name)}
      />
      {/* {errors?.[name] && (
        <span className="error">{errors?.[name]?.message}</span>
      )} */}
    </>
  );
}

export default TextField;
