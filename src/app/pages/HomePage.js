import HomeBackground from '../assets/imgs/mainbackground2.jpg';

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
                <h2 className='main-subtitle'>Need to notarize a document? Connect with us to take care of your notary needs today!</h2>
            </section>
        </div>
    );
}

export default HomePage;