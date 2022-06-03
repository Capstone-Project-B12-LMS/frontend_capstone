import Header from "../components/Header";
import home from "../assets/img/home.png";
import Footer from "../components/Footer";

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
              <div className="absolute inset-[100px] mt-[300px]">
              <div className="h-[600px] w-[1250px] p-32">
              <div className="grid grid-cols-3 w-[1000px] ">
                <div className="box-border border-4">HAHHA</div>
                <div className="col-span-2 box-border border-4 bg-[#A5CECD] text-[#FFFFFF]">
                  <h2 className="text-center mt-4">Contact US</h2><br></br>
                  <div className="container mx-auto px-5">
                  <form>
                  <label>Your Name</label><br></br>
                  <input placeholder="Full Name" className="rounded-md w-[620px] h-10 bg-[#A5CECD] border-2 border-[#FFFFF]"></input><br></br>
                  <label>Your Email</label><br></br>
                  <input placeholder="Email Address" className="rounded-md w-[620px] h-10 bg-[#A5CECD] border-2 border-[#FFFFF]"></input><br></br>
                  <label>Your Message</label><br></br>
                  <textarea placeholder="Message" className="rounded-md w-[620px] h-10 bg-[#A5CECD] border-2 border-[#FFFFF]"></textarea><br></br>
                  <button type="submit" className="w-[620px] h-[52px] rounded-[10px] text-xl font-medium mb-5">
                    Send</button><br></br>
                  </form>
                  </div>
                  </div>
                </div> 
              </div>
              </div>
            </div>
          </div>
        </div>
           <Footer />
      </body>
    </div>
  );
};

export default Index;
