const Hero = () => {
  return (
    <div className="h-screen w-screen relative">
      <div className="  h-4/5 border border-red-400 border-solid border-1 ">
        <div className=" container border border-red-400 border-solid border-1 h-full flex">
          <div className="name h-full  border border-x-red-50 border-solid border-1 w-full flex flex-col justify-center ">
            <h1 className="text-8xl">Ronald Salvador</h1>
            <p className="text-2xl">Software Engineer and Game Developer</p>
          </div>
          <div className="picture name h-full  border border-x-red-50 border-solid border-1 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
