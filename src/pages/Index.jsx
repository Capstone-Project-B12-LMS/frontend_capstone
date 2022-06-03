import Header from "../components/Header";
import home from "../assets/img/home.png";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div>
      <body className="bg-[url('/src/assets/img/Vector.png')] bg-no-repeat bg-[length:600px_584px]">
        <Header />
        <div className="container mx-auto px-6">
          <div className="relative">
            <div className="flex">
              <div className="mt-[200px] ml-[100px]">
                <h2>Welcome To </h2>
                <p></p>
                <h2>The world of Learning</h2>
                <div className="mt-[20px] text-[25px]">
                  <strong>
                    The knowledge you gain quickly and efficiently
                  </strong>
                </div>
              </div>
              <img src={home} alt="" />
            </div>
          </div>
          <div className="container mx-auto mt-12">
            <div className="">
              <div className="">
                <div className="grid justify-items-center">
                  <div className=" grid grid-cols-3 w-[1100px] h-[654px]">
                    <div className="box-border border-2 bg-[#C0DEDD] rounded-l-xl"></div>
                    <div className="col-span-2 box-border border-2 rounded-r-xl ">
                      <h2 className="text-center mt-4">Contact US</h2>
                      <br></br>
                      <div className="grid place-items-center mx-auto px-5 ">
                        <form>
                          <label for="email-address-icon">Your Name</label>
                          <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-person"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                              </svg>
                            </div>
                            <input
                              type="text"
                              id="email-address-icon"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Full Name"
                            />
                          </div>
                          <br></br>
                          <label for="email-address-icon">Your Email</label>
                          <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-envelope"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                              </svg>
                            </div>
                            <input
                              type="text"
                              id="email-address-icon"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <br></br>
                          <label for="email-address-icon">Your Message</label>
                          <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-text-paragraph"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                                />
                              </svg>
                            </div>
                            <textarea
                              type="text"
                              id="email-address-icon"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Message"
                              rows="8"
                              cols="80"
                            />
                          </div>
                          <br></br>
                          <button
                            type="submit"
                            className="w-[660px] h-[52px] rounded-[10px] text-xl font-medium mb-5"
                          >
                            Submit
                          </button>
                          <br></br>
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
