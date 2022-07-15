import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Route, Routes, useParams } from "react-router-dom";

// Assets

import Banner_Illust from '../../assets/img/illustration-class.png'

// Graphql

import { GET_CLASS_BYID } from "../../graphql/ClassQuery";
import { FIND_CLASS_MATERIAL } from "../../graphql/MaterialQuery";
import { useGetCounseling } from "../../graphql/GetCounseling";

// Components

import { Tab, Loading, NoMatch } from "../../components";
import Counseling from "../../components/Counseling";
import ViewPopUp from "../../components/Counseling/ViewPopUp";
import Content from "./Content";
import Feedback from "./Feedback";
import Description from "./Description";
import Setting from "./Setting";
import { useEffect } from "react";



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
    { text: "feedback", path: './feedback' },
    { text: "settings", path: './setting' }
  ]


  // State Material

  const [material, setMaterial] = useState({
    title: "",
    description: "",
    linkVideo: null,
    linkPowerPoint: null
  })
  const [updateMode, setUpdateMode] = useState(false);
  const [isViewClicked, setIsViewClicked] = useState(false);
  const [materialId, setMaterialId] = useState(null);
  const targetMaterial = dataMaterial?.material.findAllByClassId.filter((iniUpdate) => iniUpdate.id === materialId)


  useEffect(() => {
    if (!!materialId) {
        const filterMaterial = dataMaterial?.material.findAllByClassId.filter((iniUpdate) => iniUpdate.id === materialId)
      setMaterial({
        title: filterMaterial[0].title,
        description: filterMaterial[0].content,
        linkVideo: filterMaterial[0].videoUrl ? `https://youtu.be/${filterMaterial[0].videoUrl}` : null,
        linkPowerPoint: filterMaterial[0].videoUrl ? filterMaterial[0].fileUrl : null,
      })
      setUpdateMode(true)
    }
  }, [materialId])

  

  return (
    <>
      {
        loading ?
          <Loading size="100" /> : data?.class?.findById == null ? 
          
          <NoMatch 
              text="Class Not Found"
              description="Make sure you visit the right class or you can create class first"
          />
          :
          <div id="parent" className="my-6 mx-auto w-full">
            < Tab list={Tabpath} />

            <div className="flex justify-between w-full h-[320px] mt-6 px-10 bg-[#79C9DB] rounded-[20px]">
              <p className="text-[2.5rem] text-white font-bold mb-8 uppercase self-end max-w-[1000px]">{data.class.findById.name}</p>
              <img src={Banner_Illust} className="w-[445px] h-[307px] object-cover" alt="illustration" />
            </div>

            <div className="flex my-[2rem]">
              <div className="w-[25%]" >
                <div className="border-[1px] rounded-[10px] p-6 mb-[1rem]">
                  <div className="flex justify-between m-1">
                    <h4 className="text-[1.25rem]">Class code</h4>
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

                {
                  !!dataCounseling?.guidance?.findByClassId?.length ?

                  <div className="border-[1px] rounded-[10px] p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4>Notification</h4>
                      <p className="cursor-pointer text-[#415A80]" onClick={() => setIsViewClicked(true)}>
                        View all
                      </p>
                    </div>  
                    {
                      !loadingCounseling &&
                        dataCounseling.guidance.findByClassId.map(counsel => (
                          <Counseling
                            data={counsel}
                            key={counsel.id}
                          />
                      ))
                    }
                    {
                      !loadingCounseling && isViewClicked && 
                        <ViewPopUp setIsViewClicked={setIsViewClicked} dataCounseling={dataCounseling.guidance.findByClassId}/>
                    }
                  </div>

                  :

                   false
                }
    
              </div>
              <div className="w-[75%]">
                <div>
                  <Routes>
                    <Route index element={<Description
                      updateMode={updateMode}
                      setUpdateMode={setUpdateMode}
                      material={material}
                      setMaterial={setMaterial}
                      materialId={materialId}
                      setMaterialId={setMaterialId}
                      targetMaterial={targetMaterial} />}
                    />
                    <Route path="content"
                      element={<Content materials={dataMaterial?.material.findAllByClassId} />}
                    />
                    <Route path="feedback" element={<Feedback id_class={data?.class.findById.id} />} />
                    <Route path="setting/*" element={<Setting dataClass={data} func={setMaterialId} />} />
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