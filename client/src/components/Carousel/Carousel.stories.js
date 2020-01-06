import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from './Carousel';

storiesOf('Carousel', module)
    .add('Gown Display', () => <div>
                                    <p className='title'>Fall 2020 Collection</p>
                                    <div className='carousel-container'>
                                        <div className='image-1'>
                                            <img src="../../Images/Fall-2020-1.png"/>
                                            <p>Luca</p>
                                        </div>
                                        <div className='image-2'>
                                            <img src="../../Images/Fall-2020-2.png"/>
                                            <p>Vida</p>
                                        </div>
                                        <button> > </button>
                                    </div>
                                </div>)


// client/src/Images/Fall-2020-1.png






    .add('Gown Display with Carousel Package', () => <div className='carousel-container'>
                                    <Carousel>
                                        <div className='image-1'>
                                            <img src=''/>
                                            <p>fsf</p>
                                        </div>
                                        {/* <div className='image-2'>
                                            <img src=''/>
                                            <p>text</p>
                                        </div> */}
                                        {/* <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow> */}
                                    </Carousel>
                                    {/* <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow> */}
                                </div>)
                    

    .add('Gown Display from codepen', () => <div className='carousel-container'>
                                                <Carousel>
                                                    <div className='image-1'>
                                                        <img src=''/>
                                                        <p>fsf</p>
                                                    </div>
                                                    {/* <div className='image-2'>
                                                        <img src=''/>
                                                        <p>text</p>
                                                    </div> */}
                                                    {/* <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow> */}
                                                </Carousel>
                                                {/* <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow> */}
                                            </div>)
                                
