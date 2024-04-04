import React from "react";
import Link from "next/link";
function SignIn() {
  return (
    <div className="w-[100%]  bg-[#ffffff] absolute top-0 left-0">
      <div className="flex h-[100vh] justify-center items-center ">
        <div className="flex w-[100%] h-[100vh] m-auto  ">
          <div className="leftLogin flex-[1.5] bg-[#f8f8fa]  ">
            <div className="p-[40px] ">
              <h2 className="text-center text-[30px] mt-[50px] mb-[50px]">
                Sign In to SSS System
              </h2>
              <form className="rightLg p-[30px] flex flex-col gap-[10px] w-[60%] m-auto ">
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
                  <Link className="text-[#7848f4]" href="/">
                    Forgot your password?
                  </Link>
                </div>
                <div className="text-center mt-[20px]">
                  <button
                    className="w-[280px] text-[19px]  m-auto text-center rounded-[5px] text-[white] h-[50px] mt-[20px] bg-[#7848f4]"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="rightLogin flex-[1.1]  bg-[#7848f4]"></div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
