import { Loading } from '../../components';
import MaterialComponent from '../../components/MaterialComponent';


const Material = ({ dataMaterial, loadingMaterial, refetching , func }) => {


  if (loadingMaterial) return <Loading size="100"/>

  return (
    <div className="border border-solid rounded-[20px] px-12 py-10">
      <h2 className='mt-5 mb-10'>Materials</h2>
      {
        !!dataMaterial?.material?.findAllByClassId.length ?
          
          dataMaterial?.material?.findAllByClassId?.map((item) => (
            <MaterialComponent refetching={refetching} item={item} key={item.id} func={func} />
          ))

        :

        <p className="mt-10 text-slate-400">No Material in your class</p>
      }
    </div>
  )
}

export default Material