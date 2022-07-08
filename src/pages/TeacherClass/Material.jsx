import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom';
import { FIND_CLASS_MATERIAL } from '../../graphql/MaterialQuery'

const Material = () => {
  const param = useParams();
  const { data: dataMaterial , loading: loadingMaterial } = useQuery(FIND_CLASS_MATERIAL , { variables : { class_id : param.id }})
  if(loadingMaterial) return <p>Loading...</p>
  return (
    <div className='pl-5'>
       <h2>Materials</h2>
       {dataMaterial?.material?.findAllByClassId?.map((item)=>(
           <div className='py-2 w-full border-b-2 px-2'>
                <h4>{item.title}</h4>
           </div>
       ))}
    </div>
  )
}

export default Material