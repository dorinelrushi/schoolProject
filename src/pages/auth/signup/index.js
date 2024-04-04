import React from "react";
import Link from "next/link";
function Signup() {
  return (
    <div className="w-[100%]  bg-[#ffffff] absolute top-0 left-0">
      <div className="flex  justify-center items-center ">
        <div className="signup flex w-[100%]  m-auto  ">
          <div className="leftLogin1 flex-[1.1] flex  justify-center items-center  ">
            <div className="bg-[#ffffffcc] backdrop-blur-sm p-[50px] rounded-[10px] text-center">
              <h2 className="text-[30px]">Welcome</h2>
              <button className="w-[140px] rounded-[5px] text-[white] h-[40px] mt-[20px] bg-[#7848f4]">
                <Link href="/auth/signin">Sign In</Link>
              </button>
            </div>
          </div>
          <div className="rightLogin1 flex-[1.5] bg-[#f8f8fa]  ">
            <div className="paddingLogin p-[40px] ">
              <h2 className="text-center text-[30px] mt-[50px] mb-[50px]">
                Sign Up to SSS
              </h2>
              <form className="rightLg p-[30px] flex flex-col w-[60%] m-auto gap-[10px] ">
                <div className="inp">
                  <label id="yourEmail">YOUR EMAIL</label>

                  <input
                    type="text"
                    placeholder="Enter your Email"
                    name="yourEmail"
                  />
                </div>
                <div className="inp">
                  <label id="yourEmail">YOUR EMAIL</label>

                  <input
                    type="text"
                    placeholder="Enter your Email"
                    name="yourEmail"
                  />
                </div>
                <div className="inp">
                  <label id="password">PASSWORD</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                  />
                </div>
                <div className="inp">
                  <label id="confirmPassword">CONFIRM PASSWORD</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="confirmPassword"
                  />
                </div>
                <div className="inp">
                  <label id="sponsorshipLevel">Sponsorship Level</label>

                  <select
                    id="sponsorshipLevel"
                    className="bg-[white]  flex justify-center items-center h-[60px] text-[#aaaaaa]"
                  >
                    <option value="Presenter">Presenter</option>
                    <option value="Volunteer">Volunteer</option>
                    <option value="Atendee">Atendee</option>
                  </select>
                </div>
                <div className="text-center mt-[20px]">
                  <button
                    className="w-[280px] text-[19px]  m-auto text-center rounded-[5px] text-[white] h-[50px] mt-[20px] bg-[#7848f4]"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
