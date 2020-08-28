import React from 'react';
import './Content.css';
import { Link } from 'react-router-dom';

const Content = () => {
   return(
        <div>
            <div className="flex justify-around">
                <div style={{background: 'white'}} className="container pointer f1 w-50 pv5 mr2 br3 b b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
                    <Link to='/buy' >
                        <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0FSNMT-WOcEryfvFdF9KfeJ7J4pCUGZu63g&usqp=CAU' style={{width: '100%'}} />
                        <code style={{color: '#1c2841'}} className='bodoni f1 i centered'>BUY</code>
                    </Link>
                </div>
                    
                <div style={{background: 'white'}} className="container pointer f1 w-25 pv4 mr2  br3 b b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
                    <Link to='/sell'>
                        <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQj6p-AOMCOsdyrgC4pCHPi1RAr-GK3ZfyShA&usqp=CAU' style={{width: '100%'}} />
                        <code style={{color: '#1c2841'}} className='bodoni f1 i centered'>SELL</code>
                    </Link>    
                </div>
            </div>
            <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
                <small className="mt3 f6 db tc">© 2020 <b className="ttu">Harshit Chopra</b>., All Rights Reserved</small>
            </footer>
        </div>    
    );
}
export default Content;