import { Card } from "../../components";

import HeaderClass from "./headerClass";
import useGetClass from "../../graphql/GetClass";

const Home = () => {
  const { data, loading, error } = useGetClass();

  if (loading) return "Loading...";
  if (error) return "Data Erorr...";

  // Url belum di atur ke path yang baru , classStudent & teacher udah
  // Teacher : class/t/:name
  // Student : class/:name

  return (
    <div className="w-full mt-8">
      <HeaderClass />

      <div className="grid grid-cols-card-class auto-rows-card-class gap-12 my-8">
        {data.user.findByClassByUserId.map((materi) => (
          <Card
            key={materi.id}
            title={materi.name}
            progress={materi.code}
            thumbnail="https://i.ibb.co/k6wjmXK/thumbnail-class.png"
            url={`../class/${materi.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;