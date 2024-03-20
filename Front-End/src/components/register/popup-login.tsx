"use client";

import styled from "@emotion/styled";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ThemeContext } from "../../context/ThemeContext";
import { Axios } from "../../lib/utils/axiosKits";
import { localGet, localRemove, localSave } from "../../lib/utils/localStore";
import { useRouter } from "next/navigation";
import { untitled } from "@/data/mongodb collections/Untitled";
import { useSWRConfig } from "swr";

const PopupLogin = () => {
  const { mutate } = useSWRConfig();
  const [loading, setLoading] = React.useState(false);
  const {
    LoginPopup,
    LoginPopupHandler,
    RegisterPopupHandler,
    lostPasswordHandler,
  } = React.useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();

  React.useEffect(() => {
    const local = localGet("user_login_info");
    if (local) {
      const { email, password } = local;
      setValue("email", email);
      setValue("password", password);
      setValue("remember", true);
    }
  }, [setValue, LoginPopup]);

  const onSubmitHandler = async (data: any) => {
    const local = localGet("user_login_info");
    setLoading(true);
    await Axios({
      method: "post",
      url: `/signin`,
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          /* ------------------------- localStorage data save ------------------------- */
          localSave("UserData", {
            ...res.data,
            login_at: new Date(),
            // expires one day after login
            expires_in: new Date(new Date().getTime() + 86400000),
          });
          /* -------------------------- user logged in popup ------------------------- */
          mutate("/current-user").then(() => {
            toast.success(res.data.message, {
              position: "bottom-right",
              className: "foo-bar",
            });
            setLoading(false);
            LoginPopupHandler?.();
            reset();
          });
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: "bottom-right",
          className: "foo-bar",
        });
        setLoading(false);
      });

    if (data.remember) {
      localSave("user_login_info", data);
    }
    if (data.remember === false && local) {
      localRemove("user_login_info");
    }
  };

  const RegisterHandler = async () => {
    await LoginPopupHandler?.();
    await setTimeout(() => {
      RegisterPopupHandler?.();
    }, 300);
  };

  return (
    <PopupLoginWrapper className={LoginPopup ? "show" : "hide"}>
      <div className="flex justify-center items-center w-full h-screen">
        <LoginForm className={LoginPopup ? "show" : "hide"}>
          <LoginFormTitle>
            <LoginFormTitleText>Login</LoginFormTitleText>
            <LoginFormTitleClose
              onClick={LoginPopupHandler}
              className="hover:bg-themePrimary duration-300 ease-in-out"
            >
              <LoginFormTitleCloseIcon />
            </LoginFormTitleClose>
          </LoginFormTitle>
          <LoginFormBody>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="mb-6">
                <label
                  className="block mb-2 text-themeDarker font-normal"
                  htmlFor=""
                >
                  Username
                </label>
                <input
                  className={`appearance-none block w-full !p-3 leading-5 text-themeDarker border ${
                    errors?.email ? "!border-red-500" : "border-gray"
                  } placeholder:font-normal placeholder:text-xss1 rounded-lg placeholder-themeDarkAlt focus:outline-none `}
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Username"
                />
                {errors?.email && (
                  <span className="text-red-500 text-xss italic">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-themeDarker font-normal"
                  htmlFor=""
                >
                  Password
                </label>
                <input
                  className={`appearance-none block w-full !p-3 leading-5 text-themeDarker border ${
                    errors?.password ? "!border-red-500" : "border-gray"
                  } placeholder:font-normal placeholder:text-xss1 rounded-lg placeholder-themeDarkAlt focus:outline-none `}
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Enter Your Password"
                />
                {errors?.password && (
                  <span className="text-red-500 text-xss italic">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center justify-between mb-6">
                <div className="w-full md:w-1/2">
                  <label className="relative inline-flex items-center">
                    <input
                      className="checked:bg-red-500 w-4 h-4"
                      type="checkbox"
                      {...register("remember")}
                    />
                    <span className="ml-3 text-sm text-themeDarker font-normal">
                      Remember me
                    </span>
                  </label>
                </div>
                <div className="w-full md:w-auto mt-1">
                  <button
                    type="button"
                    className="inline-block text-sm font-normal text-themePrimary hover:text-green-600 hover:underline"
                    onClick={lostPasswordHandler}
                  >
                    Lost password?
                  </button>
                </div>
              </div>
              <button
                className={`flex gap-2 items-center justify-center !py-3 px-7 duration-300 ease-in-out mb-6 w-full text-base text-white font-normal text-center leading-6 ${
                  isSubmitting || loading
                    ? "bg-themeDarkerAlt"
                    : "bg-themePrimary"
                } rounded-md hover:bg-black`}
                type="submit"
                disabled={isSubmitting || loading}
              >
                {isSubmitting || loading ? "Please wait..." : "Login"}
                {(isSubmitting || loading) && (
                  <div className="spinner-grow w-5 h-5 text-themePrimary" />
                )}
              </button>
            </form>

            <p className="text-center flex flex-wrap items-center justify-center gap-3">
              <span className="text-sm text-deep font-normal">
                Not a Member?
              </span>
              <button
                onClick={RegisterHandler}
                className="inline-block text-sm font-normal text-themePrimary hover:text-green-600 hover:underline"
              >
                Create Account
              </button>
            </p>
          </LoginFormBody>
        </LoginForm>
        <PopupOverlay onClick={LoginPopupHandler} />
      </div>
    </PopupLoginWrapper>
  );
};

const LoginFormTitleCloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PopupLogin;
const PopupLoginWrapper = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
  color: #fff;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  &.show {
    opacity: 1;
    visibility: visible;
  }
`;
const LoginForm = styled("div")`
  max-width: 550px;
  width: 100%;
  max-height: 90%;
  height: fit-content;
  overflow: auto;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(0.7);
  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  position: relative;
  z-index: 2;
  &.show {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }
`;
const LoginFormTitle = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid #ebebeb;
`;
const LoginFormTitleText = styled("div")`
  font-size: 28px;
  font-weight: 500;
  color: #000;
`;
const LoginFormTitleClose = styled("div")`
  cursor: pointer;
  padding: 15px;
  background-color: #000;
  border-radius: 5px;
  & svg {
    color: #fff;
    width: 16px;
    height: 16px;
  }
`;
const LoginFormBody = styled("div")`
  padding: 40px 40px 25px 40px;
`;
const PopupOverlay = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
