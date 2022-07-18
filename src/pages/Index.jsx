import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { Cookies } from "react-cookie";
import Login from "./Login";
import Register from "./Register";

import { Footer, Faq } from "../components";

import home from "../assets/img/home.png";
import faq from "../assets/img/FAQ.png";
import picture_contactus from "../assets/img/bg-contact-us.png";
import logo from "../assets/icons/brand-logo.svg";
import swal from "sweetalert";
import ractangel from "../assets/img/Rectangle.png";

const Index = () => {
  const cookies = new Cookies();
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const navigate = useNavigate();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8nwcki9",
        "template_lmwdt0h",
        e.target,
        "rAAkn0OTCciFiL6cn"
      )
      .then((res) => {
        swal({
          title: "Pesan anda sudah terkirim !",
          text: "Terimakasih!",
          icon: "success",
          button: "Oke",
        });
        e.target.reset();
      })
      .catch((err) => {
        swal({
          title: "Terjadi error",
          text: err,
          icon: "error",
          button: "Oke"
        })
      });
  }

  const accordionData = [
    {
      title: "What is the Study Learning Management System ? ",
      content: `Is an online learning room where users can create classes or join to start online classes. 
      Here users can see what class they are taking and see the course or assignments given by the teacher`,
    },
    {
      title: "Why can't i access the class via the link ?",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title:
        "Why do i have to wait a long time in requesting counseling guidance ?",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
  ];

  return (
    <div>
      <div className="bg-[url('/src/assets/img/Vector.png')] bg-no-repeat bg-[length:600px_584px]">
        {/* Header Area */}

        <header>
          <div>
            <div className="relative">
              <div className="flex w-full bg-transparent grid grid-cols-3 ">
                <div>
                  <div className="">
                    <img
                      src={logo}
                      alt="brand-logo"
                      className="w-[300px] h-[60px] ml-[80px] mt-[15px]"
                    />
                  </div>
                </div>
                <div></div>
                <div>
                  {openLoginModal && openLoginModal && (
                    <Login
                      setOpenRegisterModal={setOpenRegisterModal}
                      openLoginModal={openLoginModal}
                      setOpenLoginModal={() => setOpenLoginModal(false)}
                    />
                  )}
                  {!cookies.get("token") && (
                    <>
                      <button
                        onClick={() => navigate("/login")}
                        className="w-full h-[52px] w-[113px] ml-[100px] mt-[20px] rounded-[10px] text-xl leading-[30px] font-medium mb-5 "
                      >
                        Login
                      </button>

                      <button
                        onClick={() => navigate("/register")}
                        className="w-full h-[52px] w-[117px] ml-[30px] mt-[20px] rounded-[10px] text-xl leading-[30px] font-medium mb-5 bg-transparent outline outline-2 outline-[#415A80] text-[#415A80]  "
                      >
                        Sign up
                      </button>
                    </>
                  )}
                  {openRegisterModal && openRegisterModal && (
                    <Register
                      setOpenLoginModal={setOpenLoginModal}
                      openRegisterModal={openRegisterModal}
                      setOpenRegisterModal={() => setOpenRegisterModal(false)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* End Header Area */}

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
                    <div className=" bg-[#384EA1] rounded-l-xl shadow-[0px_2px_0px_rgba(0,0,0,1)]">
                      <img
                        src={picture_contactus}
                        alt=""
                        className="mt-[50%]"
                      />
                    </div>
                    <div className="col-span-2  rounded-r-xl shadow-[1px_2px_2px_rgba(0,0,0,1)]">
                      <h2 className="text-center mt-4">Contact Us</h2>
                      <br></br>
                      <div className="grid place-items-center mx-auto px-5 ">
                        <form onSubmit={sendEmail}>
                          <label>Your Name</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-person"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                              </svg>
                            </div>
                            <input
                              type="text"
                              id="name-address-icon"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                              placeholder="Full Name"
                              name="name"
                              required
                            />
                          </div>
                          <br></br>
                          <label>Your Email</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-envelope"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                              </svg>
                            </div>
                            <input
                              type="email"
                              id="email-address-icon"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                              placeholder="example@gmail.com"
                              name="email"
                              required
                            />
                          </div>
                          <br></br>
                          <label>Your Message</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-text-paragraph"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                                />
                              </svg>
                            </div>
                            <textarea
                              type="text"
                              id="message-address-icon"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                              placeholder="Message"
                              rows="8"
                              cols="80"
                              name="message"
                              required
                            />
                          </div>
                          <br></br>
                          <button
                            type="submit"
                            className="w-[660px] h-[52px] rounded-[10px] text-xl font-medium mb-5  hover:bg-[#839dc3]"
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
          <div className="relative">
            <div className="flex">
              <div className="mt-[10px] ml-[20px]">
                <img src={faq} alt="" />
              </div>
              <div
                id="accordion-collapse"
                className="mt-[150px] w-[580px]"
                data-accordion="collapse"
              >
                <h2 className="ml-4">FAQ</h2>
                <img src={ractangel} alt="" className="mb-6 ml-4" />
                {accordionData.map(({ title, content }) => (
                  <Faq title={title} content={content} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
