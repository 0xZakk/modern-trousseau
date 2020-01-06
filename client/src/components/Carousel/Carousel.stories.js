import React from 'react';
import { storiesOf } from '@storybook/react';

import Carousel from './Carousel';

storiesOf('Carousel', module)
    .add('Gown Display', () => <div className='carousel-container'>
                                    <div className='flex-container'>
                                        <div className='image-1'>
                                            <img src='https://user-images.githubusercontent.com/43559077/71793879-d5077d00-300c-11ea-8b12-264d5e00aeb4.png'/>
                                            {/* <p>image 1</p> */}
                                        </div>
                                        {/* <div className='image-2'>
                                            <img src=''/>
                                            <p>image 2</p>
                                        </div> */}
                                    </div>
                                    {/* <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow> */}
                                </div>)









    .add('Gown Display with Carousel Package', () => <div className='carousel-container'>
                                    <Carousel>
                                        <div className='image-1'>
                                            <img src=''/>
                                            <p>fsf</p>
                                        </div>
                                        <div className='image-2'>
                                            <img src=''/>
                                            <p>text</p>
                                        </div>
                                        {/* <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow> */}
                                    </Carousel>
                                    {/* <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow> */}
                                </div>)
                                
