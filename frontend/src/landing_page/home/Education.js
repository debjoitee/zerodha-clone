import React from 'react';

function Education() {
    return ( 

        <div className='container mt-5 mb-5'>
            <div className='row'>


                <div className ='col-6 p-5 mt-5 mb-5'>
                    <img src= 'Media/images/education.svg'/> 
                </div>


                <div className='col-6  p-5 mt-5'>

                    <h1  className=' text-muted mb-4 '> Free and open market education </h1>

                    <p className='mb-3 mt-3 text-muted'> <h5> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading. </h5>    </p>


                    <a href=''className='mx-0' style={{ textDecoration: 'none' }}> Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>  </a>


                    <p className='mb-3 mt-3 text-muted '> <h5> Trading Q&A, the most active trading and investment community in India for all your market related queries. </h5>    </p>


                    <a href=''className='mx-0' style={{ textDecoration: 'none' }}> TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>  </a>


                </div>


            </div>

        </div>

    
    );
}

export default Education;