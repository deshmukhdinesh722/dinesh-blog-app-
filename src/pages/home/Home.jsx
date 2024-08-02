import { Button } from '@material-tailwind/react'
import React from 'react'
import HeroSection from '../../component/heroSection/HeroSection'
import BlogPostCard from '../../component/blogPostCard/BlogPostCard'
import Loader from '../../component/loader/Loader'

function Home() {

    return (
        <>
        <HeroSection/>
        <BlogPostCard/>

        </>
    )
}

export default Home
