import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Card, Button } from "../../components";
import Illustration from "../../assets/img/illustration_1.png";
import HeaderClass from "./headerClass";
import useGetClass from "../../graphql/GetClass";


const Home = ({ createClass, joinClass }) => {
  const [collectionClass, setCollectionClass] = useState(0);
  const { data, loading, error } = useGetClass();

  const student = data.class.findAll.filter((e) => e.users[0].email !== e.createdBy);

  if (loading) return "Loading...";
  if (error) return "Data Error...";
  console.log(data);

  return (
    <div className="w-full mt-8">
      <HeaderClass />
      <div className="grid grid-cols-card-class auto-rows-card-class gap-12 my-8">
        {student.map((data)=>(
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
