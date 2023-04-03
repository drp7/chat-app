import React from "react";

export default function FormRow({
  labelText,
  name,
  value,
  type,
  handleChange,
  Required,
  icon,
  handleShow,
  placeholder,
  accept,
}) {
  labelText = labelText || name;
  return (
    <label className="flex flex-col items-start gap-0.5 ">
      <h5 className="pl-3">{labelText}</h5>
      <div
        className={`w-full flex items-center gap-3 ${
          type !== "file" && "border border-lime-500"
        } rounded-full 
  `}
      >
        <input
          className="w-full p-2 px-8  rounded-full bg-transparent focus:outline-none   "
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          required={Required}
          accept={accept}
          placeholder={placeholder}
        />

        <button
          type="button"
          onClick={handleShow && handleShow}
          className="w-16"
        >
          {icon && icon}
        </button>
      </div>
    </label>
  );
}
