import Star from "../Star/Star";

function UserReview() {
    return ( 
        <section className="userReview d-flex">
            <img style={{width: "40px", height: "40px"}} className="userReview__img rounded-circle" src = "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g" alt = ""/>
            <div className="userReview__content ms-2">
                <Star value = {4} size = "20"/>
                <p className="fw-bold">
                    Join Hiddlesion <span className="ms-2 fw-normal color-bc">October 13, 2021</span>
                </p>
                <p className="text-secondary">I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.</p>
            </div>
        </section>
     );
}

export default UserReview;