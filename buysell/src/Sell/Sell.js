import React from 'react';
import Accessories from './accessories.jpeg';
import Mobile from './mobile.jpg'
import Men from './men.jpg';
import Women from './women.jpg';
import Kids from './kids.jpg';
import TV from './tv.jpg';
import AC from './AC.jpg';
import Appliance from './appliance.jpg';
import Shoes from './shoes.jpg';
import Watches from './watches.jpg';

const Sell = () => {
   return(
       <div>
           <h1 className='tc i' style={{ color: '#1c2841'}}>Happy Selling!</h1>
           <h3 className='tc' style={{ color: '#1c2841'}}>Select the category you want to sell in - </h3>
           <div className='center'>
                <div className='ml3 bg-white dib br3 pa3 mar5 grow bw2 shadow-5 pointer'>
                    <img className='mt2' alt='mobile' src={Mobile} height='200px' width='200px' />
                    <div className='tc'>
                        <h2>Mobiles</h2>
                    </div>    
                </div>
                <div className='ml3 bg-white dib br3 pa3 mar5 grow bw2 shadow-5 pointer'>
                    <img className='mt2' alt='accessories' src={Accessories} height='200px' width='200px' />
                    <div className='tc'>
                        <h2>Accessories</h2>
                    </div>    
                </div>
                <div className='ml3 bg-white dib br3 pa3 mar5 grow bw2 shadow-5 pointer'>
                    <img className='mt2' alt='TV' src={TV} height='200px' width='200px' />
                    <div className='tc'>
                        <h2>TV</h2>
                    </div>    
                </div>
                <div className='ml3 bg-white dib br3 pa3 mar5 grow bw2 shadow-5 pointer'>
                    <img className='mt2' alt='AC' src={AC} height='200px' width='200px' />
                    <div className='tc'>
                        <h2>AC</h2>
                    </div>    
                </div>
                <div className='ml3 bg-white dib br3 pa3 mar5 grow bw2 shadow-5 pointer'>
                    <img className='mt2' alt='appliance' src={Appliance} height='200px' width='200px' />
                    <div className='tc'>
                        <h2>Kitchen Appliance</h2>
                    </div>    
                </div>
            </div>
            <div className='center pa3'>
                <div className='ml3 bg-white dib br3 pa3 mar5 grow bw2 shadow-5 pointer'>
                    <img className='mt2' alt='men-fashion' src={Men} height='200px' width='200px' />
                    <div className='tc'>
                        <h2>Men</h2>
                    </div>    
                </div>
                <div className='ml3 bg-white dib br3 pa3 mar5 grow bw2 shadow-5 pointer'>
                    <img className='mt2' alt='women-fashion' src={Women} height='200px' width='200px' />
                    <div className='tc'>
                        <h2>Women</h2>
                    </div>    
                </div>
                <div className='ml3 bg-white dib br3 pa3 mar5 grow bw2 shadow-5 pointer'>
                    <img className='mt2' alt='kids-fashion' src={Kids} height='200px' width='200px' />
                    <div className='tc'>
                        <h2>Kids</h2>
                    </div>    
                </div>
                <div className='ml3 bg-white dib br3 pa3 mar5 grow bw2 shadow-5 pointer'>
                    <img className='mt2' alt='shoes' src={Shoes} height='200px' width='200px' />
                    <div className='tc'>
                        <h2>Shoes</h2>
                    </div>    
                </div>
                <div className='ml3 bg-white dib br3 pa3 mar5 grow bw2 shadow-5 pointer'>
                    <img className='mt2' alt='watches' src={Watches} height='200px' width='200px' />
                    <div className='tc'>
                        <h2>Watches</h2>
                    </div>    
                </div>
            </div>
       </div>
    );
}
export default Sell;