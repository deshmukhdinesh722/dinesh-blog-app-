import { Fragment, useContext, useState } from "react";
import {
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import myContext from "../../context/data/myContext";
import {FacebookShareButton,EmailShareButton,WhatsappShareButton, WhatsappIcon, FacebookIcon, InstapaperIcon, LinkedinIcon, EmailIcon} from 'react-share'
import { AiOutlineShareAlt, AiFillLinkedin, AiFillInstagram,AiOutlineWhatsApp ,AiFillGithub, AiFillFacebook, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';

export default function ShareDialogBox() {

    const currentPageUrl=window.location.href;

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const context = useContext(myContext);
    const { mode, } = context;
    return ( 
        <Fragment>
            <div className="ml-auto">
                <AiOutlineShareAlt onClick={handleOpen} style={{ color: mode === 'dark' ? 'white' : '#4A270C' }} size={20} />
            </div>
            {/* Dialog  */}
            <Dialog className=" relative right-[1em] w-[25em]  md:right-0 md:w-0 lg:right-0 lg:w-0" open={open} handler={handleOpen} style={{ background: mode === 'light' ? '#2f3542' : '#2f3542', color: mode === 'dark' ? 'white' : 'black' }}>
                {/* DialogBody  */}
                <DialogBody >
                    <div className="flex justify-center flex-wrap  sm:mx-auto sm:mb-2 -mx-2  mt-4 mb-2 ">
                        {/* main  */}
                        <div className="">
                            <div className="flex gap-3">
                               

                                {/* Instagram Icon  */}
                                <div className="">
                                    <a href="">
                                        <EmailShareButton url={currentPageUrl}>
                                              <EmailIcon size={35} style={{
                                            color: mode === 'dark'
                                                ? 'white'
                                                : 'white'
                                        }} />
                                        </EmailShareButton>
                                      
                                    </a>
                                </div>

                                {/* whatsupp Icon  */}
                                <div className="">
                                    <a href="">
                                        <WhatsappShareButton 
                                        url={currentPageUrl}
                                        quote="Share this post"
                                        >
                                             <AiOutlineWhatsApp size={35}
                                            style={{
                                                color: mode === 'dark'
                                                    ? 'white'
                                                    : 'white'
                                            }} />
                                            </WhatsappShareButton>
                                       
                                    </a>
                                </div>

                                {/* Facebook Icon  */}
                                <div className="">
                                    <a href="">
                                        <FacebookShareButton url={currentPageUrl}>
                                            <AiOutlineFacebook size={35}
                                            style={{
                                                color: mode === 'dark'
                                                    ? 'white'
                                                    : 'white'
                                            }} />
                                            </FacebookShareButton>
                                        
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className=" text-center">
                        <h1 className=" text-gray-600">Dinesh Blogs</h1>
                    </div>
                </DialogBody>
            </Dialog>
        </Fragment>
    );
}