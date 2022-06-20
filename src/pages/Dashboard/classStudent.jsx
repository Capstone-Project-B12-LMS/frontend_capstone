import { Card } from "../../components";
import HeaderClass from "./headerClass";
import useGetClass from "../../graphql/GetClass";

const Home = () => {
  const { data, loading, error } = useGetClass();
  if (loading) return "Loading...";
  if (error) return "Data Error...";

  const loadingData = data;
  const student = data.user.findByClassByUserId.filter(
    (e) => e.users[0].email !== e.createdBy
  );
  console.log(loadingData);

  return (
    <div className="w-full mt-8">
      <HeaderClass />
      <div className="grid grid-cols-card-class auto-rows-card-class gap-12 my-8">
        {student.map((data) => (
          <Card
            title={data.name}
            progress={data.id}
            thumbnail="https://i.ibb.co/w7vmxmH/image-2.png"
            url="/class"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

/*

*/
