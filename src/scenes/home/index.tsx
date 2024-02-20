import { TypeSelectedPage } from "@/shared/types";

type Props = {
  selectedPage: TypeSelectedPage;
};

const Home = ({ selectedPage }: Props) => {
  return (
    <section id="Home" className="z-10 mt-20 h-60 w-full">
      <div className="mx-auto h-full w-1/3">
        <div className="flex h-full flex-col justify-end gap-2">
          <div className="text-center font-Protest_Revolution text-5xl">
            <h1>I am RUDY</h1>
          </div>
          <div className="text-center">{selectedPage}2</div>
          <div className="text-center">{selectedPage}3</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
