import React from 'react'
import MaterialComponent from '../../components/MaterialComponent';


const Material = ({dataMaterial, loadingMaterial, classId}) => {
  
  
  if(loadingMaterial) return <p>Loading...</p>
  console.log(dataMaterial)
  return (
    <div className=' border-2 py-4 rounded-[20px]'>
       <h2 className='pl-5 mt-5 mb-20'>Materials</h2>
       {dataMaterial?.material?.findAllByClassId?.map((item)=>(
           <MaterialComponent item={item} key={item.id} classId={classId}/>
       ))}
    </div>
  )
}

export default Material