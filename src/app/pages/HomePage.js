import HomeBackground from '../assets/imgs/pinkbackground.jpg';
import ApprovalStar from '../assets/imgs/goldstarnotaryapproval.png';

const HomePage = () => {
    return (
        <div>
            <section
                style={{ 
                    backgroundImage: `url(${HomeBackground})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat' 
                }}
            >
                <h1 className='main-title'>Nova Notary</h1>
                <h2 className='main-subtitle'>Connect with us to take care of your notary needs today!</h2>
            </section>

            <section>
                <img 
                    src={ApprovalStar}
                    alt='gold certification star indicating certified approval'
                    width='300px'
                    className='approval-star'  
                />
            </section>
        </div>
    );
}

export default HomePage;