import { Card, Loading } from "../../components";
import HeaderClass from "./headerClass";
import useGetClass from "../../graphql/GetClass";
import { useSelector } from "react-redux";

const Home = () => {
  const { dataLogin } = useSelector((state) => state.login);
  const { data, loading, error } = useGetClass();

  if (loading) return <Loading size="100" />;
  if (error) return "Data Error...";

  const dataEmail = dataLogin?.email;
  // console.log(dataEmail);

  const student = data.user.findByClassByUserId.filter(
    (e) => dataEmail !== e.createdBy
  );

  const teacher = data.user.findByClassByUserId.filter(
    (e) => dataEmail === e.createdBy
  );
  return (
    <div className="w-full mt-8">
      <HeaderClass />
      <div className="grid grid-cols-card-class auto-rows-card-class gap-12 my-8">
        {teacher.map((data) => (
          <Card
            key={data.name}
            title={data.name}
            code={data.code}
            thumbnail="https://i.ibb.co/k6wjmXK/thumbnail-class.png"
            url={`../class/t/${data.id}`}
          />
        ))}
        {student.map((data) => (
          <Card
            key={data.name}
            title={data.name}
            code={data.code}
            thumbnail="https://i.ibb.co/k6wjmXK/thumbnail-class.png"
            url={`../class/${data.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

/*

*/
