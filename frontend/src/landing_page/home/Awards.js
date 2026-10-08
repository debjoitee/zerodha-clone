import React from 'react';

function Awards() {
    return ( 


        <div className='container mt-5'>
            <div className='row'>


                <div className ='col-6 p-5 mt-5'>
                    <img src= 'media\images\largestBroker.svg'/> 
                </div>


                <div className='col-6  p-5 mt-5'>

                    <h1> Largest Stock Broker in India </h1>

                    <p className='mb-3 mt-3'> <h5> 2+ Million Users contribute to over 15% of all trading volume in the country. </h5>    </p>



                    <div className='row '> 

                        <div className ='col-6'>
                            <ul> 
                                <li> Future & Options </li>
                                <li> Commodity Derivatives </li>
                                <li> Currency Derivatives </li>
                            </ul>
                        </div>

                        <div className ='col-6'>
                            <ul> 
                                <li> Direct mutual funds </li>
                                <li> Bonds & Government Securities </li>
                            </ul>

                        </div>

                    </div>
                    

                    <img src='Media\images\pressLogos.png' style={{ width: '90%' }} />


                </div>


            </div>

        </div>  
    
    );

}

export default Awards; 