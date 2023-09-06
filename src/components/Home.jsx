
import livingRoom from '../livingroom.png'
import restaurant from '../restaurant.png'
import AddFoodie from './AddFoodie'
import UserCards from './UserCards'



function Home() {
    return (
        <div>
        <div className="home">
            <div className="diningIn">
                <h1>Are you dining in?</h1>
                <img src={livingRoom} alt="a cozy living room" width="400px" height="450px" />
            </div>
            <AddFoodie/>
            <div className="goingOut">
                <img src={restaurant} alt="a dark and intimate restaurant" width="300" height="450px"/>
                <h1 className="out">...or going out?</h1>
            </div>
        </div>
        <br />
        <UserCards />
        </div>
    )
}

export default Home

