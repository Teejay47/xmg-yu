import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      // className="password-input-wrapper"
      styles={{
        backgroundColor: "black",
        width: "100%",
        height: "300px",
      }}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <div className="password-input">
        <input
          type={showPassword ? "text" : "password"}
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          aria-label="Toggle password visibility"
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
      </div>
    </div>
  );
}
