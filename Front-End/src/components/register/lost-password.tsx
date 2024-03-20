"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ThemeContext } from "../../context/ThemeContext";
import PopupModule from "../../lib/popup-modul/popup-modul";
import { Axios } from "../../lib/utils/axiosKits";

const LostPassword = () => {
  const { lostPasswordShow, lostPasswordHandler } =
    React.useContext(ThemeContext);
  const [currentStep, setCurrentStep] = React.useState(1);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // lost password submit handler
  const onSubmit = async (data: any) => {
    try {
      await Axios({
        method: "PUT",
        url: `/users/password/forget`,
        data: {
          email: data.email,
        },
      }).then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success(res.data.message, {
            position: "bottom-right",
            className: "foo-bar",
          });
          setCurrentStep(2);
          reset();
        }
      });
    } catch (error: any) {
      if (error.response?.data) {
        toast.error(error.response.data.message, {
          position: "bottom-right",
          className: "foo-bar",
        });
      } else {
        toast.error(error.message, {
          position: "bottom-right",
          className: "foo-bar",
        });
      }
    }
  };

  return (
    <>
      {/* Lost Password popup module */}
      <PopupModule
        PopupTitle="Lost Password"
        Popup={lostPasswordShow}
        PopupHandler={() => {
          lostPasswordHandler?.();
          reset();
          setCurrentStep(1);
        }}
      >
        {currentStep === 1 && (
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="!mb-6">
              <input
                className={`appearance-none block w-full !p-3 leading-5 text-themeDarker border ${
                  errors?.email ? "!border-red-500" : "border-gray"
                } placeholder:font-normal placeholder:text-xss1 rounded placeholder-themeDarkAlt focus:outline-none focus:ring-0 focus:ring-opacity-50`}
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                placeholder="Email Address"
              />
              {errors?.email && (
                <span className="text-red-500 text-xss italic">
                  {errors?.email?.message as string}
                </span>
              )}
            </div>
            <button
              className={`!py-3 px-7 flex gap-2 justify-center items-center transition-all duration-300 ease-in-out !mb-4 text-base text-white font-normal text-center leading-6 ${
                isSubmitting ? "bg-themeDarkerAlt" : "bg-themePrimary"
              } rounded-md hover:bg-black`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Please wait..." : "Reset Password"}
              {isSubmitting && (
                <div
                  className="spinner-grow w-5 h-5 text-themePrimary"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </button>
          </form>
        )}
        {currentStep === 2 && (
          <div className="!mb-6">
            <p className="!text-center text-xs text-themeDarker">
              Please check your email for a link to reset your password.
            </p>
          </div>
        )}
      </PopupModule>
    </>
  );
};

export default LostPassword;
