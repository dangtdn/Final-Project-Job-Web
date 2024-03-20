import React from "react";

const Reviews = () => {
  return (
    <section className="testimonial-section py-16 md:py-20 lg:py-24 bg-light">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-themePrimary font-bold text-xs leading-none mb-1">
            Our Reviews
          </p>
          <h2 className="text-xl font-bold text-black">
            What Our Customer Saying
          </h2>
        </div>
        <div className="relative">
          <div className="absolute top-1/3 -translate-y-1/2 w-full z-10">
            <button className="2xl:-left-10 -left-3 top-7 absolute rounded-full flex justify-center items-center hover:bg-themePrimary h-10 w-10 bg-gray hover:text-white p-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="w-6 h-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" />
              </svg>
            </button>
            <button className="2xl:-right-10 -right-3 top-7 absolute rounded-full flex justify-center items-center hover:bg-themePrimary h-10 w-10 bg-gray hover:text-white p-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="w-6 h-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
              </svg>
            </button>
          </div>
          <div className="slick-slider slick-initialized" dir="ltr">
            <div className="slick-list">
              <div
                className="slick-track"
                style={{
                  width: 4950,
                  opacity: 1,
                  transform: "translate3d(-1800px, 0px, 0px)",
                }}
              >
                <div
                  data-index={-3}
                  tabIndex={-1}
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: 450 }}
                >
                  <div>
                    <div
                      tabIndex={-1}
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="p-3">
                        <div className="bg-white p-6 rounded-md">
                          <div className="flex gap-4 items-center mb-6">
                            <div>
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
                                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
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
                                    srcSet="/assets/img/cs-img2.png?w=96&q=75 1x, /assets/img/cs-img2.png?w=256&q=75 2x"
                                    src="/assets/img/cs-img2.png?w=256&q=75"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    className="rounded-full w-auto"
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
                            <div>
                              <h4 className="text-lg2 text-black font-normal leading-4 mb-2">
                                Mark Jukerberg
                              </h4>
                              <p className="text-grayLight text-xss font-normal">
                                Position Here
                              </p>
                            </div>
                          </div>
                          <div className="f">
                            <p className="text-xs text-deep font-normal leading-6">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={-2}
                  tabIndex={-1}
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: 450 }}
                >
                  <div>
                    <div
                      tabIndex={-1}
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="p-3">
                        <div className="bg-white p-6 rounded-md">
                          <div className="flex gap-4 items-center mb-6">
                            <div>
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
                                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
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
                                    srcSet="/assets/img/cs-img3.png?w=96&q=75 1x, /assets/img/cs-img3.png?w=256&q=75 2x"
                                    src="/assets/img/cs-img3.png?w=256&q=75"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    className="rounded-full w-auto"
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
                            <div>
                              <h4 className="text-lg2 text-black font-normal leading-4 mb-2">
                                Mark Jukerberg
                              </h4>
                              <p className="text-grayLight text-xss font-normal">
                                Position Here
                              </p>
                            </div>
                          </div>
                          <div className="f">
                            <p className="text-xs text-deep font-normal leading-6">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={-1}
                  tabIndex={-1}
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: 450 }}
                >
                  <div>
                    <div
                      tabIndex={-1}
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="p-3">
                        <div className="bg-white p-6 rounded-md">
                          <div className="flex gap-4 items-center mb-6">
                            <div>
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
                                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
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
                                    srcSet="/assets/img/demo-5.png?w=96&q=75 1x, /assets/img/demo-5.png?w=256&q=75 2x"
                                    src="/assets/img/demo-5.png?w=256&q=75"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    className="rounded-full w-auto"
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
                            <div>
                              <h4 className="text-lg2 text-black font-normal leading-4 mb-2">
                                Mark Jukerberg
                              </h4>
                              <p className="text-grayLight text-xss font-normal">
                                Position Here
                              </p>
                            </div>
                          </div>
                          <div className="f">
                            <p className="text-xs text-deep font-normal leading-6">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={0}
                  className="slick-slide"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ outline: "none", width: 450 }}
                >
                  <div>
                    <div
                      tabIndex={-1}
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="p-3">
                        <div className="bg-white p-6 rounded-md">
                          <div className="flex gap-4 items-center mb-6">
                            <div>
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
                                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
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
                                    srcSet="/assets/img/cs-img1.png?w=96&q=75 1x, /assets/img/cs-img1.png?w=256&q=75 2x"
                                    src="/assets/img/cs-img1.png?w=256&q=75"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    className="rounded-full w-auto"
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
                            <div>
                              <h4 className="text-lg2 text-black font-normal leading-4 mb-2">
                                Mark Jukerberg
                              </h4>
                              <p className="text-grayLight text-xss font-normal">
                                Position Here
                              </p>
                            </div>
                          </div>
                          <div className="f">
                            <p className="text-xs text-deep font-normal leading-6">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={1}
                  className="slick-slide slick-active slick-current"
                  tabIndex={-1}
                  aria-hidden="false"
                  style={{ outline: "none", width: 450 }}
                >
                  <div>
                    <div
                      tabIndex={-1}
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="p-3">
                        <div className="bg-white p-6 rounded-md">
                          <div className="flex gap-4 items-center mb-6">
                            <div>
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
                                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
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
                                    srcSet="/assets/img/cs-img2.png?w=96&q=75 1x, /assets/img/cs-img2.png?w=256&q=75 2x"
                                    src="/assets/img/cs-img2.png?w=256&q=75"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    className="rounded-full w-auto"
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
                            <div>
                              <h4 className="text-lg2 text-black font-normal leading-4 mb-2">
                                Mark Jukerberg
                              </h4>
                              <p className="text-grayLight text-xss font-normal">
                                Position Here
                              </p>
                            </div>
                          </div>
                          <div className="f">
                            <p className="text-xs text-deep font-normal leading-6">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={2}
                  className="slick-slide slick-active"
                  tabIndex={-1}
                  aria-hidden="false"
                  style={{ outline: "none", width: 450 }}
                >
                  <div>
                    <div
                      tabIndex={-1}
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="p-3">
                        <div className="bg-white p-6 rounded-md">
                          <div className="flex gap-4 items-center mb-6">
                            <div>
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
                                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
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
                                    srcSet="/assets/img/cs-img3.png?w=96&q=75 1x, /assets/img/cs-img3.png?w=256&q=75 2x"
                                    src="/assets/img/cs-img3.png?w=256&q=75"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    className="rounded-full w-auto"
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
                            <div>
                              <h4 className="text-lg2 text-black font-normal leading-4 mb-2">
                                Mark Jukerberg
                              </h4>
                              <p className="text-grayLight text-xss font-normal">
                                Position Here
                              </p>
                            </div>
                          </div>
                          <div className="f">
                            <p className="text-xs text-deep font-normal leading-6">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={3}
                  className="slick-slide slick-active"
                  tabIndex={-1}
                  aria-hidden="false"
                  style={{ outline: "none", width: 450 }}
                >
                  <div>
                    <div
                      tabIndex={-1}
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="p-3">
                        <div className="bg-white p-6 rounded-md">
                          <div className="flex gap-4 items-center mb-6">
                            <div>
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
                                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
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
                                    srcSet="/assets/img/demo-5.png?w=96&q=75 1x, /assets/img/demo-5.png?w=256&q=75 2x"
                                    src="/assets/img/demo-5.png?w=256&q=75"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    className="rounded-full w-auto"
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
                            <div>
                              <h4 className="text-lg2 text-black font-normal leading-4 mb-2">
                                Mark Jukerberg
                              </h4>
                              <p className="text-grayLight text-xss font-normal">
                                Position Here
                              </p>
                            </div>
                          </div>
                          <div className="f">
                            <p className="text-xs text-deep font-normal leading-6">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={4}
                  tabIndex={-1}
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: 450 }}
                >
                  <div>
                    <div
                      tabIndex={-1}
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="p-3">
                        <div className="bg-white p-6 rounded-md">
                          <div className="flex gap-4 items-center mb-6">
                            <div>
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
                                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
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
                                    srcSet="/assets/img/cs-img1.png?w=96&q=75 1x, /assets/img/cs-img1.png?w=256&q=75 2x"
                                    src="/assets/img/cs-img1.png?w=256&q=75"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    className="rounded-full w-auto"
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
                            <div>
                              <h4 className="text-lg2 text-black font-normal leading-4 mb-2">
                                Mark Jukerberg
                              </h4>
                              <p className="text-grayLight text-xss font-normal">
                                Position Here
                              </p>
                            </div>
                          </div>
                          <div className="f">
                            <p className="text-xs text-deep font-normal leading-6">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={5}
                  tabIndex={-1}
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: 450 }}
                >
                  <div>
                    <div
                      tabIndex={-1}
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="p-3">
                        <div className="bg-white p-6 rounded-md">
                          <div className="flex gap-4 items-center mb-6">
                            <div>
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
                                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
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
                                    srcSet="/assets/img/cs-img2.png?w=96&q=75 1x, /assets/img/cs-img2.png?w=256&q=75 2x"
                                    src="/assets/img/cs-img2.png?w=256&q=75"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    className="rounded-full w-auto"
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
                            <div>
                              <h4 className="text-lg2 text-black font-normal leading-4 mb-2">
                                Mark Jukerberg
                              </h4>
                              <p className="text-grayLight text-xss font-normal">
                                Position Here
                              </p>
                            </div>
                          </div>
                          <div className="f">
                            <p className="text-xs text-deep font-normal leading-6">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={6}
                  tabIndex={-1}
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: 450 }}
                >
                  <div>
                    <div
                      tabIndex={-1}
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="p-3">
                        <div className="bg-white p-6 rounded-md">
                          <div className="flex gap-4 items-center mb-6">
                            <div>
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
                                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
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
                                    srcSet="/assets/img/cs-img3.png?w=96&q=75 1x, /assets/img/cs-img3.png?w=256&q=75 2x"
                                    src="/assets/img/cs-img3.png?w=256&q=75"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    className="rounded-full w-auto"
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
                            <div>
                              <h4 className="text-lg2 text-black font-normal leading-4 mb-2">
                                Mark Jukerberg
                              </h4>
                              <p className="text-grayLight text-xss font-normal">
                                Position Here
                              </p>
                            </div>
                          </div>
                          <div className="f">
                            <p className="text-xs text-deep font-normal leading-6">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={7}
                  tabIndex={-1}
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: 450 }}
                >
                  <div>
                    <div
                      tabIndex={-1}
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="p-3">
                        <div className="bg-white p-6 rounded-md">
                          <div className="flex gap-4 items-center mb-6">
                            <div>
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
                                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
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
                                    srcSet="/assets/img/demo-5.png?w=96&q=75 1x, /assets/img/demo-5.png?w=256&q=75 2x"
                                    src="/assets/img/demo-5.png?w=256&q=75"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    className="rounded-full w-auto"
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
                            <div>
                              <h4 className="text-lg2 text-black font-normal leading-4 mb-2">
                                Mark Jukerberg
                              </h4>
                              <p className="text-grayLight text-xss font-normal">
                                Position Here
                              </p>
                            </div>
                          </div>
                          <div className="f">
                            <p className="text-xs text-deep font-normal leading-6">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
