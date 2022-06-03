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
              <div className="absolute inset-[100px] mt-[380px]">
              <div className="box-border h-[600px] w-[1250px] p-4 border-4">
              <div className="grid grid-cols-2">
                <div className="cols-span-2 box-border border-4">HAHHA</div>
                <div className="
                cols-span-2 box-border border-4 bg-[#A5CECD]">
                  <h2 className="text-center mt-4">Contact US</h2><br></br>
                  <div className="container mx-auto px-5">
                  <form>
                  <label>Your Name</label><br></br>
                  <input placeholder="Full Name"></input><br></br>
                  <label>Your Email</label><br></br>
                  <input placeholder="Email Address"></input><br></br>
                  <label>Your Message</label><br></br>
                  <textarea placeholder="Message"></textarea><br></br>
                  <button type="submit" className="w-[90px] h-[52px] rounded-[20px] text-xl font-medium mb-5">
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
