import Card from "../components/Card";
import "./style.css"


const Home = () => {
    return (
        <>
            <div className="banner">
                <section className="bg-blue-400 w-[95%] h-[280px] section">
                    <div className="content">
                        <h2>Welcome back Veronica !</h2>
                        <p>Do you want to add a new class?</p>
                        <div className="container_button">
                            <button className="w-[35%] h-[30px] button_join">Join Class</button>
                            <button className="w-[35%] h-[30px] button_class">Create Class</button>
                        </div>
                    </div>
                    <div className="content">
                    </div>
                </section>
            </div>
            <div className="container_card">
                <div className="w-[90%]">
                    <div className="card_text">
                        <h3>Active course</h3>
                        <h3>View All</h3>
                    </div>
                    <div className="container_course">
                        <div className="course w-[90%]" >
                            <Card CardTitle={"UI/UX Designer for beginner"} CardProgress={"85%"} />
                            <Card CardTitle={"Test course"} CardProgress={"50%"} />
                            <Card CardTitle={"Dragunov tips and tricks"} CardProgress={"75%"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;