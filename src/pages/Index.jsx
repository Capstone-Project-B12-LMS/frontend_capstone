import Header from "../components/Header";
import home from "../assets/img/home.png";

const Index = () => {
  return (
    <div>
      <Header />
      <body>
        <div className="container mx-auto px-6">
          <div className="flex">
            <div className="flex-1">
              {" "}
              <h2>Welcome To </h2>
              <h2>The world of Learning</h2>
              <div className="mt-[20px] text-[25px]">
                <strong>The knowledge you gain quickly and efficiently</strong>
              </div>
              <div className="flex-1">
                <img src={home} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container mx-auto">
          <div className="static w-[1112px] h-[862-px] mt-[100]">
            <div className="static w-[687px] h-[491px] ml-[610px] mt-[12px]">
              <img src={home} alt="" />
              <div className="static">
                <h2>Welcome To </h2>
                <h2>The world of Learning</h2>
                <div className="mt-[20px] text-[25px]">
                  <strong>
                    The knowledge you gain quickly and efficiently
                  </strong>
                </div>
              </div>
            </div>

            <div className="relative w-[1112px] h-[862-px] mt-[120]">
              <div className="relative w-[687px] h-[491px] ml-[610px] mt-[172px]">
                <img src={home} alt="" />
              </div>
              <div className="absolute mt-[320px] ">
                <h2>Welcome To </h2>
                <h2>The world of Learning</h2>
                <div className="mt-[20px] text-[25px]">
                  <strong>
                    The knowledge you gain quickly and efficiently
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </body>
    </div>
  );
};

export default Index;
