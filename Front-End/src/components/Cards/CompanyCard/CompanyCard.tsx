import React from "react";

interface CompanyCardProps {
  useCardLoading?: boolean;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  useCardLoading = false,
}) => {
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
      <div className="relative grid content-between bg-white p-6 border-white border border-solid transition-all rounded-md group hover:!border-themePrimary">
        <div className="text-center pt-4 pb-6">
          <div className="flex justify-center mb-3">
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
                  srcSet="https://res.cloudinary.com/js-template/image/upload/v1647876454/i1frrtnlzy3hlmvliutr.png?w=128&q=75 1x, https://res.cloudinary.com/js-template/image/upload/v1647876454/i1frrtnlzy3hlmvliutr.png?w=256&q=75 2x"
                  src="https://res.cloudinary.com/js-template/image/upload/v1647876454/i1frrtnlzy3hlmvliutr.png?w=256&q=75"
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
          <h3 className="text-xs font-normal text-black leading-6 mb-0">
            Ojjomedia
          </h3>
          <p className="text-deep text-xss1 font-normal mb-2 leading-6">
            Get it done with love
          </p>
        </div>
        <div className="px-2">
          <ul className="mb-6">
            <li className="mb-3">
              <p className="flex gap-3 items-center text-deep text-xss1 font-normal" />
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
                    srcSet="assets/img/users1.svg?w=16&q=75 1x, assets/img/users1.svg?w=32&q=75 2x"
                    src="assets/img/users1.svg?w=32&q=75"
                    decoding="async"
                    data-nimg="intrinsic"
                    className=""
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
              1-10 Employee
              <p />
            </li>
            <li className="mb-3">
              <p className="flex gap-3 items-center text-deep text-xss1 font-normal" />
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
                    srcSet="assets/img/dollar-sign3.svg?w=16&q=75 1x, assets/img/dollar-sign3.svg?w=32&q=75 2x"
                    src="assets/img/dollar-sign3.svg?w=32&q=75"
                    decoding="async"
                    data-nimg="intrinsic"
                    className=""
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
              10,000-50,000
              <p />
            </li>
            <li className="mb-0">
              <p className="flex gap-3 items-center text-deep text-xss1 font-normal" />
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
                    srcSet="assets/img/map-pin1.svg?w=16&q=75 1x, assets/img/map-pin1.svg?w=32&q=75 2x"
                    src="assets/img/map-pin1.svg?w=32&q=75"
                    decoding="async"
                    data-nimg="intrinsic"
                    className=""
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
              Dhaka
              <p />
            </li>
          </ul>
        </div>
        <div>
          <a
            className="block leading-4 text-deep transition-all font-medium text-xs group-hover:text-white text-center py-3 px-6 bg-light rounded-md group-hover:!bg-themePrimary"
            href="/company/6232421d2b674a4761d4a050"
          >
            See Details
          </a>
        </div>
      </div>
    );

  return renderBody();
};

export default CompanyCard;
