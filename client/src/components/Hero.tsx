import communityImage from "../../public/community_2.svg";

const Hero = () => (
  <section
    id="hero"
    className="container flex flex-col-reverse mx-auto p-6 lg:flex-row"
  >
    <div className="flex flex-col space-y-10 lg:w-1/2">
      <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
        Building Stronger Communities Together!
      </h1>
      <p className="text-lg text-center text-gray-400 lg:text-2xl lg:text-left">
        A platform where community members can report issues like potholes,
        streetlight outages, or vandalism to local governments.
      </p>
    </div>
    <div className="relative mx-auto lg:w-1/2">
      <img
        src={communityImage}
        alt="Community"
        className="w-full h-[300px] lg:h-[500px]"
      />
    </div>
  </section>
);

export default Hero;
