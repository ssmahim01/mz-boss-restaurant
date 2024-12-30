import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="Our Menu"
      strength={-200}
    >
      <div
        className="hero lg:h-[550px] md:h-96 h-[360px]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold uppercase">{title}</h1>
            <p className="mb-5 text-lg font-semibold">
            Would you like to try a dish?
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
