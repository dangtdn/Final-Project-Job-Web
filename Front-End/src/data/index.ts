import { categories } from "../utils/dummy-content/mongodb-collections/categories";
import { bookmarks } from "../utils/dummy-content/mongodb-collections/bookmarks";
import { companies } from "../utils/dummy-content/mongodb-collections/companies";
import { emails } from "../utils/dummy-content/mongodb-collections/emails";
import { filters } from "../utils/dummy-content/mongodb-collections/filters";
import { jobAlerts } from "../utils/dummy-content/mongodb-collections/jobalerts";
import { jobApplies } from "../utils/dummy-content/mongodb-collections/jobapplies";
import { jobFilters } from "../utils/dummy-content/mongodb-collections/jobfilters";
import { jobs } from "../utils/dummy-content/mongodb-collections/jobs";
import { messages } from "../utils/dummy-content/mongodb-collections/messages";
import { notifications } from "../utils/dummy-content/mongodb-collections/notifications";
import { packages } from "../utils/dummy-content/mongodb-collections/packages";
import { resumes } from "../utils/dummy-content/mongodb-collections/resumes";
import { reviews } from "../utils/dummy-content/mongodb-collections/reviews";
import { untitled } from "../utils/dummy-content/mongodb-collections/Untitled";

const getData = () => ({
  categories,
  bookmarks,
  companies,
  emails,
  filters,
  jobAlerts,
  jobApplies,
  jobFilters,
  jobs,
  messages,
  notifications,
  packages,
  resumes,
  reviews,
  untitled,
});

export default getData;
