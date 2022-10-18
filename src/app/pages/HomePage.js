import HomeBackground from '../assets/imgs/pinkbackground.jpg';

const HomePage = () => {
    return (
        <div
            style={{ 
                backgroundImage: `url(${HomeBackground})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat' 
            }}
        >
            <section>
                <h1 className='main-title'>Nova Notary</h1>
                <h2 className='main-subtitle'>Connect with us to take care of your notary needs today!</h2>
            </section>
        </div>
    );
}

export default HomePage;