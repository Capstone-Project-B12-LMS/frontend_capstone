import { Card } from "../../components";
import HeaderClass from "./headerClass";
import useGetClass from "../../graphql/GetClass";
import { useSelector } from "react-redux";
import { Loading } from "../../components";


const Home = () => {
  const { dataLogin } = useSelector((state) => state.login);
  const { data, loading, } = useGetClass();

  const dataEmail = dataLogin?.email

  const student = data?.user?.findByClassByUserId?.filter(
    (e) => dataEmail !== e.createdBy
  );

  if (loading) return <Loading size={100} />

  return (
    <div className="w-full mt-8">
      <HeaderClass />
      <div className="grid grid-cols-card-class auto-rows-card-class gap-12 my-8">
        {student?.map((data) => (
          <Card
            key={data?.name}
            title={data?.name}
            code={data?.code}
            thumbnail="https://i.ibb.co/k6wjmXK/thumbnail-class.png"
            url={`../class/${data?.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

/*

*/
