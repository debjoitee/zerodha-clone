import React from 'react';

function Pricing() {
    return ( 

        <div className='container mb-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p> 

                    <a href=''className='mx-0' style={{ textDecoration: 'none' }}> Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i>  </a>

                </div>

                <div className='col-2'></div>
                
                <div className='col-6'>
                    <div className='row text-center'>

                        

                        <div className='col p-6 border'>
                            <img src='Media\images\pricing-eq.svg' style={{ width: '80%' }} />
                            <p className='mx-4 text-muted' >Free account opening </p>
                        </div>

                        <div className='col p-6 border'>
                            <img src='Media\images\pricing-eq.svg' style={{ width: '80%' }} />
                            <p className='mx-4 text-muted' >Free equity delivery and direct mutual funds </p>
                        </div>

                        <div className='col p-6 border'>
                            <img src='Media\images\pricing-eq ₹20 .svg' style={{ width: '80%' }} />
                            <p className='className= mx-4 text-muted mb-0' >Intraday and F&O </p>
                        </div>

                    </div>
                </div>
            </div>    
        </div>


    );
}

export default Pricing;