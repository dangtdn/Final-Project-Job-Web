import { Axios, authAxios } from "../../../lib/utils/axiosKits";
import useSWR from "swr";

const fetcher = (url: string) => authAxios(url).then((res) => res.data.data);
const dashboardStatic = "/statistics";

const UserInfoBox = (): any => {
  // Use SWR
  const { data, error } = useSWR(dashboardStatic, fetcher);

  if (error) return "An error has occurred.";
  if (!data)
    return (
      <>
        <section className="mb-8">
          <div className="mx-auto">
            <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="shadow py-4 px-3 bg-[#FB8B2F] text-white rounded-lg text-center">
                <p className="font-normal text-lg mb-3">Total Jobs</p>
                <h2 className="text-5xl font-semibold">00</h2>
              </div>

              {/* <div className="shadow py-4 px-3 bg-[#1CAF57] text-white rounded-lg text-center">
              <p className="font-normal text-lg mb-3">Total Resumes</p>
              <h2 className="text-5xl font-semibold">00</h2>
            </div> */}
              <div className="shadow py-4 px-3 bg-[#3CC6FC] text-white rounded-lg text-center">
                <p className="font-normal text-lg mb-3">Total Employe</p>
                <h2 className="text-5xl font-semibold">00</h2>
              </div>
              <div className="shadow py-4 px-3 bg-[#4F6BF1] text-white rounded-lg text-center">
                <p className="font-normal text-lg mb-3">Total Companies</p>
                <h2 className="text-5xl font-semibold">00</h2>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  return (
    <>
      <section className="mb-8">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2   gap-4">
            {data?.map((item: any, index: number) => (
              <div
                key={index}
                className={`shadow py-4 px-3 ${
                  item.title === "Applied Jobs" || item.title === "Total Jobs"
                    ? "bg-[#FB8B2F]"
                    : item.title === "Favorite Jobs" ||
                      item.title === "Total Resumes" ||
                      item.title === "Featured Jobs"
                    ? "bg-[#1CAF57]"
                    : item.title === "Job Alerts" ||
                      item.title === "Total Employee" ||
                      item.title === "Published Jobs"
                    ? "bg-[#3CC6FC]"
                    : item.title === "Resumes Views" ||
                      item.title === "Total Companies"
                    ? "bg-[#4F6BF1]"
                    : "bg-[#4F6BF1]"
                } text-white rounded-lg text-center`}
              >
                <p className="font-normal text-lg mb-3">{item.title}</p>
                <h2 className="text-5xl font-semibold">{item.count}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInfoBox;
