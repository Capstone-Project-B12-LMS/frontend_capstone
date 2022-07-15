import parse from 'html-react-parser';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import ReactGoogleSlides from "react-google-slides";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


const Material = ({ assets }) => {

    const { title, content, videoUrl, fileUrl, deadline } = assets
    const yt  = !!videoUrl && videoUrl.includes("https://") ? videoUrl.split("").slice(-11).join("") : videoUrl

    return (
        <>
            { title && <h1 className="text-3xl font-bold text-black">{title}</h1> }
            
            {
                deadline &&  

                <div className='mt-6'>
                    <p className='text-xl leading-10'>Deadline : {deadline}</p>
                </div>
            }

            {
                fileUrl && fileUrl.includes("https://docs.google.com") ?

                <div className='mt-10 w-full h-[500px] bg-[#dfe4ea]'>
                    <ReactGoogleSlides
                        width={"100%"}
                        height={"100%"}
                        slidesLink={fileUrl}
                        showControls
                    />
                </div>

                : false
            }
            
            {
                yt &&

                <div className="w-full mt-8 rounded-[15px] overflow-hidden">

                    <LiteYouTubeEmbed
                        id={yt}
                        title='yt-embed'
                    />
                </div>
            }

            <div className="text-black text-xl font-normal mt-6 leading-10">{ parse(content) }</div>
        </>
    )
}

export default Material
