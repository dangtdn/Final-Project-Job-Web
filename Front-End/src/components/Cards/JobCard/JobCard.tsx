import React from "react";

interface JobCardProps {
  useCardLoading?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ useCardLoading = false }) => {
  const renderBody = () =>
    useCardLoading ? (
      <div className="overflow-hidden relative h-full grid content-between px-6 !pt-4 pb-6 rounded-md group">
        <img
          src="https://metajobs.vercel.app/assets/img/loader/company_loader.svg?w=384&q=75"
          alt=""
          className="w-full h-full"
        />
      </div>
    ) : (
      <div className="overflow-hidden relative h-full grid content-between px-6 !pt-4 pb-6 !border-blue-700 bg-white border border-solid transition-all rounded-md group hover:!border-blue-700">
        <div
          className="bg-blue-700 p-1"
          style={{
            position: "absolute",
            transform: "rotate(-135deg)",
            margin: "0px",
            zIndex: "99",
            justifyContent: "center",
            display: "flex",
            color: "rgb(255, 255, 255)",
            fontWeight: "500",
            width: "66px",
            height: "66px",
            right: "-33px",
            top: "-33px",
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 1024 1024"
            className="text-white text-xxs -rotate-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
          </svg>
        </div>
        <span className="flex flex-wrap gap-2 left-0">
          <span className="bg-blue-100 py-1 px-2.5 rounded-sm text-xss1 font-normal text-blue-500">
            Full time
          </span>
        </span>
        <div className="text-center !pt-5 pb-6">
          <div className="flex justify-center mb-4">
            <div style={{ marginBottom: "-7px" }}>
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%",
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                    }}
                  />
                </span>
                <img
                  alt="img"
                  srcSet="https://res.cloudinary.com/js-template/image/upload/v1649142612/eeli62k6lgqzrc0x56qo.png?w=128&q=75 1x, https://res.cloudinary.com/js-template/image/upload/v1649142612/eeli62k6lgqzrc0x56qo.png?w=256&q=75 2x"
                  src="https://res.cloudinary.com/js-template/image/upload/v1649142612/eeli62k6lgqzrc0x56qo.png?w=256&q=75"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="rounded-lg"
                  style={{
                    position: "absolute",
                    inset: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
                <noscript />
              </span>
            </div>
          </div>
          <h3 className="text-xxs font-normal capitalize text-black leading-5 mb-2">
            Billing Support Specialist Job
          </h3>
          <div className="flex gap-2 justify-center items-center text-grayLight text-xss1 capitalize font-normal">
            <div style={{ marginBottom: "-7px" }}>
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%",
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                    }}
                  />
                </span>
                <img
                  alt="img"
                  srcSet="/assets/img/map-pin1.svg?w=16&q=75 1x, /assets/img/map-pin1.svg?w=32&q=75 2x"
                  src="/assets/img/map-pin1.svg?w=32&q=75"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: "absolute",
                    inset: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
              </span>
            </div>
            Anywhere
          </div>
        </div>
        <div className="px-2">
          <ul className="mb-4">
            <li className="mb-2">
              <div className="flex gap-3 items-center text-deep text-xss1 font-normal">
                <div style={{ marginBottom: "-7px" }}>
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                      />
                    </span>
                    <img
                      alt="img"
                      srcSet="/assets/img/dollar-sign3.svg?w=16&q=75 1x, /assets/img/dollar-sign3.svg?w=32&q=75 2x"
                      src="/assets/img/dollar-sign3.svg?w=32&q=75"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        inset: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </span>
                </div>
                25k - 45k Taka
              </div>
            </li>
            <li className="mb-0">
              <div className="flex gap-3 items-center text-deep text-xss1 font-normal">
                <div style={{ marginBottom: "-7px" }}>
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                      />
                    </span>
                    <img
                      alt="img"
                      srcSet="/assets/img/clock1.svg?w=16&q=75 1x, /assets/img/clock1.svg?w=32&q=75 2x"
                      src="/assets/img/clock1.svg?w=32&q=75"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        inset: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <div>
            <a
              className="block leading-4 text-deep text-xs group-hover:text-white text-center py-3 px-6 bg-light rounded-md transition-all group-hover:!bg-blue-700"
              href="/job/6252746c52f5accc3ec9def8"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    );

  return renderBody();
};

export default JobCard;
