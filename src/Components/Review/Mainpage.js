import User from './User'
import './Review.css'
const Mainpage = () => {
    return (
            <main>
              <section className='container'>
                <div className='title'>
                  <h2>our reviews</h2>
                  <div className='underline'></div>
                </div>
               <User/>
              </section>
            </main> 
        
        );
}
 
export default Mainpage;