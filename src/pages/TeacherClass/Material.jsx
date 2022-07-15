import React from 'react'
import MaterialComponent from '../../components/MaterialComponent';


const Material = ({ dataMaterial, loadingMaterial, classId, func }) => {


  if (loadingMaterial) return <p>Loading...</p>

  return (
    <div className="border border-solid rounded-[20px] px-12 py-10">
      <h2 className='mt-5 mb-10'>Materials</h2>
      {
        !!dataMaterial?.material?.findAllByClassId.length ?
          
          dataMaterial?.material?.findAllByClassId?.map((item) => (
            <MaterialComponent item={item} key={item.id} classId={classId} func={func} />
          ))

        :

        <p className="mt-10 text-slate-400">No Material in your class</p>
      }
    </div>
  )
}

export default Material