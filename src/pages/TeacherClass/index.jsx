import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Route, Routes, useParams } from "react-router-dom";

// Assets
import Banner_Illust from '../../assets/img/illustration-class.png'
import Kebab from "../../assets/icons/kebab-menu.svg"



// Graphql
import { GET_CLASS_BYID } from "../../graphql/ClassQuery";
import { FIND_CLASS_MATERIAL } from "../../graphql/MaterialQuery";
import useGetCounseling from "../../graphql/GetCounseling";

// Components
import { Tab, Loading } from "../../components";
import Counseling from "../../components/Counseling";
import ViewPopUp from "../../components/Counseling/ViewPopUp";
import Content from "./Content";
import Feedback from "./Feedback";
import Description from "./Description";


const TeacherClass = () => {

  const params = useParams();

  // Graphql
  const { data: dataCounseling, loading: loadingCounseling } =
    useGetCounseling(params.id);
    
  const { data, loading } = useQuery(GET_CLASS_BYID, {
  variables: { id: params.id },
  });
  
  const {
    data: dataMaterial,
    loading: loadingMaterial,
    refetch,
  } = useQuery(FIND_CLASS_MATERIAL, { variables: { class_id: params.id } });

  const materialSize =
    !loadingMaterial && dataMaterial.material.findAllByClassId.length
      ? dataMaterial.material.findAllByClassId.length
      : false;

  const Tabpath = [
    { text: "description", path: `.` },
    { text: `content${materialSize ? `(${materialSize})` : ""}`, path: "./content" },
    { text: "feedback", path: './feedback' }
  ]

  const [isViewClicked, setIsViewClicked] = useState(false);

  console.log(dataCounseling);

  return (
    <>
      {
        loading ?
          <Loading size="100" />
          :
          data?.class?.findById == null ? <h2>Class not found...</h2> :
            <div id="parent" className="my-6 mx-auto w-full">
              < Tab list={Tabpath} />

              <div className="flex justify-between w-full h-[320px] mt-6 px-10 bg-[#79C9DB] rounded-[20px]">
                <p className="text-[2.5rem] text-white font-bold mb-8 uppercase self-end max-w-[1000px]">{data.class.findById.name}</p>
                <img src={Banner_Illust} className="w-[445px] h-[307px] object-cover" alt="illustration" />
              </div>

              <div className="flex my-[2rem]">
                <div className="w-[25%]" >
                  <div className="h-[120px] border-[1px] rounded-[10px] p-[0.5rem] mx-[0.5rem] mb-[1rem]">
                    <div className="flex justify-between m-1">
                      <h4 className="text-[1.25rem]">Class code</h4>
                      <img src={Kebab} alt="Three dots" className="w-[1.5rem] h-[1.5rem]" />
                    </div>
                    {
                      loading ?
                        (
                          <div className="">
                            <h4 className="text-deep-azure text-[2rem]">Loading class code</h4>
                          </div>
                        )
                        :
                        (
                          <div className="">
                            <h4 className="text-deep-azure text-[2rem]">{data.class.findById.code}</h4>
                          </div>
                        )
                    }
                  </div>

                  <div className="border-[1px] rounded-[10px] p-[0.5rem] mx-[0.5rem]">
                    <div className="flex justify-between items-center mb-4">
                      <h4>Notification</h4>
                      <p
                        className="cursor-pointer text-[#415A80]"
                        onClick={() => setIsViewClicked(true)}
                      >
                        View all
                      </p>
                    </div>

                    {!loadingCounseling &&
                      dataCounseling.guidance.findByClassId.map((counsel) => (
                        <Counseling userName={counsel.user.fullName} />
                      ))}
                    {!loadingCounseling && isViewClicked && <ViewPopUp setIsViewClicked={setIsViewClicked} dataCounseling={dataCounseling.guidance.findByClassId} />}
                  </div>
                </div>
                <div className="w-[75%]">
                  <div>
                    <Routes>
                      <Route index element={<Description />} />
                      <Route path="content"
                        element={<Content materials={dataMaterial?.material.findAllByClassId} />}
                      />
                      <Route path="feedback" element={<Feedback />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
      }
    </>
  );
}

export default TeacherClass;