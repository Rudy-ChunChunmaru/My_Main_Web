import { TypeSelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  HomeIcon,
  UserCircleIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

type Props = {
  page: string;
  selectedPage: TypeSelectedPage;
  setSelectedPage: (value: TypeSelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as TypeSelectedPage;

  return (
    <AnchorLink
      className={`  ${selectedPage === lowerCasePage ? "text-gray-400" : ""}
      text-black  transition duration-500 hover:text-gray-600`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      <div className="flex">
        {page == "Home" && (
          <HomeIcon
            className={`mr-5 mt-1 h-6 w-6  ${
              selectedPage === lowerCasePage ? "text-gray-400" : ""
            }
          text-black  transition duration-500 hover:text-gray-600`}
          />
        )}
        {page == "Profile" && (
          <UserCircleIcon
            className={`mr-5 mt-1 h-6 w-6  ${
              selectedPage === lowerCasePage ? "text-gray-400" : ""
            }
          text-black  transition duration-500 hover:text-gray-600`}
          />
        )}
        {page == "Portofolio" && (
          <DocumentTextIcon
            className={`mr-5 mt-1 h-6 w-6  ${
              selectedPage === lowerCasePage ? "text-gray-400" : ""
            }
          text-black  transition duration-500 hover:text-gray-600`}
          />
        )}
        {page == "Media" && (
          <UserIcon
            className={`mr-5 mt-1 h-6 w-6  ${
              selectedPage === lowerCasePage ? "text-gray-400" : ""
            }
          text-black  transition duration-500 hover:text-gray-600`}
          />
        )}
        {<a>{page}</a>}
      </div>
    </AnchorLink>
  );
};

export default Link;
