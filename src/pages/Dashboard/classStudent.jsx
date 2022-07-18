import { Card } from "../../components";
import HeaderClass from "./headerClass";
import useGetClass from "../../graphql/GetClass";
import { useSelector } from "react-redux";
import { Loading } from "../../components";
import useGetClassInActive from "../../graphql/GetClassInActive";


const Home = () => {
  const { dataLogin } = useSelector((state) => state.login);
  const { data, loading, } = useGetClass();
  const {data:dataInactive,loading:loadingInactive} = useGetClassInActive();

  const dataEmail = dataLogin?.email
  const student = data?.user?.findByClassByUserId?.filter((e) => dataEmail !== e.createdBy);
  const studentInActive = dataInactive?.user?.findByClassByUserId?.filter((e) => dataEmail !== e.createdBy);

  if (loading) return <Loading size={100} />
  if (loadingInactive) return <Loading size={100} />


  return (
    <div className="w-full mt-8">
      <HeaderClass />
      {
        !student?.length && !studentInActive?.length ?

          <p className="text-slate-300 text-3xl text-center mt-60 leading-[4rem]">Sorry we can't display any class <br/> Please join the class first</p>
          
          :

          <div className="grid grid-cols-card-class auto-rows-card-class gap-12 my-8">
            {student?.map((data) => (
              <Card
                key={data?.name}
                title={data?.name}
                code={data?.code}
                status="ACTIVE"
                thumbnail="https://i.ibb.co/k6wjmXK/thumbnail-class.png"
                url={`../class/${data?.id}`}
              />
            ))}
            {studentInActive?.map((data) => (
              <Card
                key={data?.name}
                title={data?.name}
                code={data?.code}
                status="INACTIVE"
                thumbnail="https://i.ibb.co/k6wjmXK/thumbnail-class.png"
                url={`../class/${data?.id}`}
              />
            ))}
          </div>
      }
    </div>
  );
};

export default Home;

/*

*/
