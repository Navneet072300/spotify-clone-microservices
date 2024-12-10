import Title from "./Title";
import { TbTruckReturn } from "react-icons/tb";
import about from "../assets/book_1.png";

const About = () => {
  return (
    <section className="max-padd-container py-12 xl:py-24">
      <div className="flexCenter flex-col gap-16 xl:gap-8 xl:flex-row">
        <div className="flex-1">
          <Title
            title1={"Unveiling Our"}
            title2={"Store's key features!"}
            titleStyles={"pb-10"}
            paraStyles={"!block"}
          />
          <div className="flex flex-col items-center gap-y-4">
            <div className="flexCenter gap-x-4">
              <div className=" h-16 min-w-16 bg-secondaryOne flexCenter rounded-md">
                <TbTruckReturn className="text-2xl" />
              </div>
              <div>
                <h4 className="medium-18">Easy Returns Process</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat possimus consectetur fuga quis delectus?
                </p>
              </div>
            </div>
            <div className="flexCenter gap-x-4">
              <div className=" h-16 min-w-16 bg-secondaryOne flexCenter rounded-md">
                <TbTruckReturn className="text-2xl" />
              </div>
              <div>
                <h4 className="medium-18">Secure Payment Options</h4>
                <p className="text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat possimus consectetur fuga quis delectus?
                </p>
              </div>
            </div>
            <div className="flexCenter gap-x-4">
              <div className=" h-16 min-w-16 bg-secondaryOne flexCenter rounded-md">
                <TbTruckReturn className="text-2xl" />
              </div>
              <div>
                <h4 className="medium-18">Live Customer Support</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat possimus consectetur fuga quis delectus?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flexCenter">
          <div className="bg-secondaryOne flexCenter p-24 max-w-[33rem] max-h-[33rem] rounded-3xl">
            <img
              src={about}
              alt="aboutImg"
              height={244}
              width={244}
              className="shadow-2xl shadow-slate-900/50 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;