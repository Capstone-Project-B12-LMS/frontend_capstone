import parse from 'html-react-parser';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


const Material = ({ assets }) => {

    const { title , content , videoUrl , fileUrl , point , deadline , createdBy } = assets

    return(
        <>
            { title && <h1 className="text-3xl font-bold text-black">{title}</h1> }
            
            {
                (point || deadline || createdBy) &&  

                <div className='mt-6'>
                    { !!point && <p className='text-xl leading-10'>Point : { point } </p> }
                    { deadline && <p className='text-xl leading-10'>Deadline : {deadline}</p> }
                    { createdBy && <p className='text-xl leading-10'>Created By : {createdBy}</p> }
                </div>
            }
            
            {
                videoUrl &&
                
                <div className="w-full mt-8 rounded-[15px] overflow-hidden">
                
                    <LiteYouTubeEmbed
                        id={videoUrl}
                        title='yt-embed'
                    />
                </div>
            }

            <div className="text-black text-xl font-normal mt-6 leading-10">{ parse(content) }</div>
            
            {
                fileUrl && 

                <div className='mt-10'>
                    <p className='text-2xl font-bold'>File : </p>
                    <a href={fileUrl} rel="noreferrer" target="_blank"className='block text-xl mt-5 leading-10 text-[#3B2AFD]'>{ fileUrl }</a>
                </div>
            }
        </>
    )
}

export default Material