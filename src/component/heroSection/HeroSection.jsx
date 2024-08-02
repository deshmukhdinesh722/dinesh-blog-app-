import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import img1 from '../../images/abc.png'

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }}>

            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center">
                                <img height={100} width={350} src={img1} alt="" />
                            </div>

                            {/* Text  */}
                            <p
                            style={{ color: mode === 'dark' ? 'white' : 'black' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                          <h1 className=' text-3xl font-bold'>Dinesh Blogs</h1>
                        </p>
                           <br/>
                        </div>

                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'black' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                            Here are Blogs of Dinesh Deshmukh
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection