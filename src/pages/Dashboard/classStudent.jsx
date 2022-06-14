import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Card , Button } from "../../components";
import Illustration from '../../assets/img/illustration_1.png';
import HeaderClass from "./headerClass";



const Home = ({ createClass,joinClass }) => {

    const [collectionClass,setCollectionClass] = useState(0);

    return (

                    <div className="w-full mt-8">
                       <HeaderClass />
                        <div className="grid grid-cols-card-class auto-rows-card-class gap-12 my-8">
                            <Card title={"Tutorial React JS 18 for Beginner"} progress={"75%"} thumbnail="https://i.ibb.co/w7vmxmH/image-2.png" url="/class"/>
                          
                        </div>
                    </div>

    );
}

export default Home;


/*

*/