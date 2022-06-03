import Header from "../components/Header";
import home from "../assets/img/home.png";

const Index = () => {
  return (
    <div>
      <Header />
      <body>
        <div className="container mx-auto px-6">
          <div className="absolute">
            <div className="flex">
              <div className="mt-[200px] ml-[100px]">
              <h2>Welcome To </h2><p></p>
              <h2>The world of Learning</h2>
              <div className="mt-[20px] text-[25px]">
                <strong>The knowledge you gain quickly and efficiently</strong>
              </div>
          </div>
                <img src={home} alt="" />
              </div>
          </div>
        <div className="container mx-auto">
            <div className="relative">
              <div className="absolute inset-[100px] mt-[380px]">
              <div className="box-border h-[600px] w-[1250px] p-4 border-4">
                
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
          </div>
        </div>
        <div className="">
            <div className="relative">
              <div className="absolute mt-[1150px]">
              <div className="box-border  w-[1519px] p-4 bg-[#A5CECD]">
                
              <h2>Welcome To </h2>
                <h2>The world of Learning</h2>
                
              </div>
              </div>
            </div>
          </div> 
      </body>
    </div>
  );
};

export default Index;
