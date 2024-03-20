import _ from "lodash";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const SortBy = ({ totalCount }: { totalCount: any }) => {
  const router = useRouter() as any;
  const [sortBy, setSortBy] = React.useState("") as any;
  const { register, watch, setValue } = useForm({
    mode: "onChange",
  });

  // React.useEffect(() => {
  //   const CallRouter = async () => {
  //     if (router.query.sortby && (router.query.sortby !== "") !== sortBy) {
  //       await setValue("sortBy", router.query.sortby);
  //       await setSortBy(router.query.sortby);
  //     }

  //     if (!router.query.sortby && sortBy !== "") {
  //       await setSortBy("");
  //       await setValue("sortBy", "");
  //     }
  //   };
  //   CallRouter();
  // }, [router.query.sortby]);

  // React.useEffect(() => {
  //   if (watch("sortBy") !== "" || sortBy || router.query.sortby !== sortBy) {
  //     // filter empty string
  //     const value = {
  //       ...router.query,
  //       sortby: watch("sortBy"),
  //     };
  //     const filtered = _.pickBy(value, (v) => v !== "");
  //     router.push({
  //       pathname: router.pathname,
  //       query: filtered,
  //     });
  //   }
  // }, [sortBy]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const sort_by = { ...register("sortBy") };
  return (
    <div className="bg-white py-2 rounded-md md:flex flex-wrap justify-between items-center mb-6 md:py-2">
      <p className="text-xs font-bold text-black leading-4 px-6 mb-6 md:mb-0">
        We have found <span className="text-themePrimary">{totalCount}</span>{" "}
        Jobs
      </p>
      {/* <div className="px-2">
        <Form.Select
          aria-label="Default select example"
          name="sortBy"
          ref={sort_by.ref}
          onBlur={sort_by.onBlur}
          onChange={(e) => {
            sort_by.onChange(e);
            handleChange(e);
          }}
          value={sortBy}
          className="border-0 focus:shadow-none w-40 py-2 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none"
        >
          <option value="">Sort By</option>
          <option value="ascending">{_.capitalize("ascending")}</option>
          <option value="descending">{_.capitalize("descending")}</option>

          <option value="featured">{_.capitalize("featured")}</option>
        </Form.Select>
      </div> */}
    </div>
  );
};

export default SortBy;
