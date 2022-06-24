import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { GET_ACTIVE_CLASS } from "../../graphql/ClassQuery";
import { useQuery } from "@apollo/client";

import { areActiveClassUser } from '../../utils/dashboard';

import { Card, } from "../../components";
import Illustration from '../../assets/img/illustration_1.png';



const Home = ({ createClass, joinClass }) => {

    const { dataLogin } = useSelector((state) => state.login);
    const { loading, data } = useQuery(GET_ACTIVE_CLASS, { variables: { id: dataLogin?.id, status: "ACTIVE" } });

    return (
        <>
            {
                loading ? <h2>Sabar guys loading dulu ya....</h2> :

                    <>
                        {/* Banner Dashboard */}

                        {
                            data?.class?.findAllWithPageable?.data.length > 0 ?

                                <>
                                    <div className="w-full h-[320px] mt-6 pl-24 bg-banner-dashboard bg-cover rounded-[30px] flex flex-col justify-center overflow-hidden">
                                        <h1 className="text-[40px] text-white">Welcome back <span className="capitalize">{dataLogin?.fullName}</span> !</h1>
                                        <p className="text-2xl font-light text-white mt-4">Do you want to add a new class ?</p>
                                        <div className="mt-8">
                                            <button
                                                className="text-normal font-medium px-6 py-2 rounded-[20px] mr-4 border hover:bg-transparent hover:text-[#415A80] hover:border-[#415A80]"
                                                onClick={joinClass}
                                            >Join Class
                                            </button>
                                            <button
                                                className="text-normal font-medium px-6 py-2 rounded-[20px] border border-[#415A80] text-[#415A80] bg-transparent hover:bg-[#415A80] hover:text-white"
                                                onClick={createClass}
                                            >Create Class</button>
                                        </div>
                                    </div>

                                    {/* Recent Class List */}

                                    <div className="w-full mt-8">
                                        <div className="flex justify-between">
                                            <h2 className="text-2xl text-black font-medium">Active Class</h2>
                                            <Link to='/dashboard/class' className="bg-transparent text-black text-base font-medium capitalize">view all</Link>
                                        </div>
                                        <div className="grid grid-cols-card-class auto-rows-card-class gap-12 my-8">
                                            {
                                                data?.class?.findAllWithPageable?.data.map(room => {
                                                    const { owner, status, users } = room;
                                                    return areActiveClassUser({ id: dataLogin?.id, email: dataLogin?.email }, owner, status, users,) ?
                                                        <Card key={room.id} title={room.name} url={`../class/${room.id}`} /> : false
                                                }
                                                )
                                            }
                                        </div>
                                    </div>
                                </>

                                :

                                <div className="flex flex-col items-center my-18 mx-auto">
                                    <img src={Illustration} alt="illustartion" className="w-[400px] h-[400px]" />
                                    <p className="text-black font-normal text-2xl">Anda belum memiliki kelas</p>
                                    <div className="mt-8">
                                        <div>
                                            <button
                                                className="text-normal font-medium px-6 py-2 rounded-[20px] mr-4 border hover:bg-transparent hover:text-[#415A80] hover:border-[#415A80]"
                                                onClick={joinClass}
                                            >Join Class
                                            </button>
                                            <button
                                                className="text-normal font-medium px-6 py-2 rounded-[20px] border border-[#415A80] text-[#415A80] bg-transparent hover:bg-[#415A80] hover:text-white"
                                                onClick={createClass}
                                            >Create Class</button>
                                        </div>

                                    </div>
                                </div>

                        }


                    </>

            }
        </>
    );
}

export default Home;


/*

*/