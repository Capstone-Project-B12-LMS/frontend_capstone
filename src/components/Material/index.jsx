import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


const Material = ({ assets }) => {

    const {title , content} = assets

    return(
        <>
            {
                title && <h1 className="text-3xl font-bold text-black">{title}</h1>
            }
            {
                content &&
                
                <div className="w-full mt-8 rounded-[15px] overflow-hidden">
                
                    <LiteYouTubeEmbed
                        id={content}
                        title='yt-embed'
                    />
                </div>
            }
            { 
                <p className="text-black text-xl font-normal mt-6 leading-9">In this course, you will learn about the process of designing the appearance of an application starting from an introduction to design, how to design and execution in making designs. This course will also give you the opportunity to learn more about application and website design to improve your skills in making a design look more effective and efficient</p>
            }
        </>
    )
}

export default Material