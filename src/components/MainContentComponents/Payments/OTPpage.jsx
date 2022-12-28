import React from "react";
// import {
//   getAuth,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "firebase/auth";
import { NavLink } from "react-router-dom";

export default function OTPpage() {
  //   const auth = getAuth();
  //   let setUpCaptcha = () => {
  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       "recaptcha-container",
  //       {
  //         size: "invisible",
  //         callback: (response) => {
  //           // reCAPTCHA solved, allow signInWithPhoneNumber.
  //           console.log("success");
  //           onSignInSubmit();
  //         },
  //       },
  //       auth
  //     );
  //   };

  //   const onSignInSubmit = () => {
  //     setUpCaptcha();
  //     //   const phoneNumber = getPhoneNumberFromUserInput();
  //     const phoneNumber = "+911234567899";
  //     console.log(phoneNumber);
  //     const appVerifier = window.recaptchaVerifier;
  //     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  //       .then((confirmationResult) => {
  //         // SMS sent. Prompt user to type the code from the message, then sign the
  //         // user in with confirmationResult.confirm(code).
  //         window.confirmationResult = confirmationResult;
  //         //   const code = getCodeFromUserInput();
  //         let code = window.prompt("Enter OTP");
  //         confirmationResult
  //           .confirm(code)
  //           .then((result) => {
  //             // User signed in successfully.
  //             const user = result.user;
  //             // ...
  //             console.log("Signed in");
  //           })
  //           .catch((error) => {
  //             // User couldn't sign in (bad verification code?)
  //             // ...
  //           });
  //         // ...
  //       })
  //       .catch((error) => {
  //         console.log("Error" + error);
  //         // Error; SMS not sent
  //         // ...
  //       });
  //   };

  return (
    <div>
      <div className=" bg-gray-200">
        {/* <button onClick={onSignInSubmit} className="border border-black p-4"> */}
        {/* <div id="recaptcha-container"></div> */}
        <div className="py-12">
          <div className="p-12 border text-left bg-gray-100 w-fit mx-auto border-gray-300 rounded-xl shadow-md">
            <div className="mb-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Razorpay_logo.svg/800px-Razorpay_logo.svg.png?20171127075036"
                alt=""
                className="h-10 rounded-lg"
              />
            </div>
            <div className="flex">
              <div className="w-[200px] mb-4 rounded-lg border-4 border-blue-500 text-blue-500 p-4 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
                <div className="font-bold text-xl">Card</div>
              </div>
              <div></div>
            </div>
            <div className="text-2xl font-semibold mb-4">
              Enter the OTP sent to +91 XXXXXXXXXX
            </div>
            <input
              type="number"
              placeholder="OTP"
              className="p-4 text-xl w-full shadow-md rounded-lg border border-gray-300 bg-white"
            />
            <div className="text-blue-500 text-right mt-2 mb-20 font-bold cursor-pointer ml-auto">
              Resend OTP
            </div>
            <div className="text-gray-600 text-sm my-1 max-w-[650px]">
              By clicking "Submit OTP", I agree to
              <a className="ml-1 font-semibold text-blue-500 cursor-pointer hover:underline">
                Terms and Conditions and Service Agreement
              </a>
            </div>
            <NavLink to="/OTPpage">
              <button className="bg-blue-500 hover:bg-blue-600 font-bold text-xl text-white w-full p-4 rounded-lg my-4">
                Submit OTP
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
