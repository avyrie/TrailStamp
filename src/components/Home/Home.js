import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import LeafStamp from "../images/leafstampc.png";

function Home() {
    return(
        <div>
            <header>
                <div className='banner-text'>
                    <h1>May the Forest Be With You</h1>
                    {/* <h3>“Great things are done when men and mountains meet.”</h3> */}
                    <h3>“Your focus determines your reality”</h3>
                    {/* – Qui-Gon Jinn */}
                </div>
                {/* <Link to="/"> */}
                    <img className="stamp" src={LeafStamp} alt="leaf print" />
                {/* </Link> */}
            </header>

            <div className="about">
                <h2>About</h2>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at dolor lobortis, iaculis diam hendrerit, gravida leo. Praesent nec euismod quam. Aliquam nec condimentum dolor. Aenean suscipit tellus eu metus sollicitudin hendrerit. Donec in ligula ac magna eleifend gravida non vel magna. Suspendisse quis consequat ipsum, et pellentesque quam. Morbi sodales ullamcorper libero a porta. Morbi id faucibus massa. Quisque lacinia eros et purus lacinia condimentum.

                Nullam vel neque interdum, cursus nisi vitae, aliquet tellus. Praesent facilisis aliquet euismod. Nunc velit orci, porttitor at tincidunt et, semper sit amet mi. Praesent tincidunt pellentesque ornare. Praesent viverra, leo nec elementum sodales, felis mi dignissim ipsum, eu interdum nulla quam non est. Fusce eu luctus massa. Phasellus pellentesque iaculis sollicitudin. Quisque sed diam at dui euismod tincidunt vitae et libero. Ut ut enim eget sapien aliquam mollis. In at elit at dui molestie ultrices nec vitae lectus. Aenean rhoncus velit at mi venenatis vulputate.</h4>
            </div>
        </div>
    )
}

export default Home;