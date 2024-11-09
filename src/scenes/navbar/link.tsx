import { TypeSelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  logo: JSX.Element;
  selectedPage: TypeSelectedPage;
  setSelectedPage: (value: TypeSelectedPage) => void;
  setIsMenuToggled: (value: Boolean) => void;
};

const Link = ({
  page,
  logo,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
}: Props) => {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as TypeSelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "border-gray-600 text-gray-400" : ""
      } mr-5 rounded-xl border-2 border-white py-1 pl-3 text-black filter transition duration-500 hover:border-gray-600 hover:text-gray-600`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        setIsMenuToggled(false);
      }}
    >
      <div className="flex">
        <div
          className={`mr-4 h-8 w-8   ${
            selectedPage === lowerCasePage ? "bg-gray-600 text-gray-400" : ""
          }
           rounded-full bg-slate-900 p-1 text-white`}
        >
          {logo}
        </div>
        {<a className="my-auto">{page}</a>}
      </div>
    </AnchorLink>
  );
};

export default Link;
