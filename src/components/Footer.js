import React from "react";
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

const Footer = () =>{
    return(
        <footer className="w-full bg-[#def0ff] p-3 flex justify-between items-center">
            <span className="home-title mobile:text-sm">Developed with ❤️ by <a href="https://github.com/TuhinBanerjee31">Tuhin Banerjee</a></span>
            <div className="flex gap-x-4 mobile:gap-x-2">
                <a href="https://github.com/TuhinBanerjee31" className="transition ease-in-out delay-150 hover:-translate-y-1"><AiFillGithub style={{fontSize: '25px'}} /></a>
                <a href="https://twitter.com/TuhinBanerjee31" className="transition ease-in-out delay-150 hover:-translate-y-1"><AiFillTwitterCircle style={{color:'#1d9bf0' ,fontSize: '25px'}} /></a>
                <a href="https://www.linkedin.com/in/tuhin-banerjee/" className="transition ease-in-out delay-150 hover:-translate-y-1"><AiFillLinkedin style={{color:'#0077b5', fontSize: '25px'}} /></a>
            </div>
        </footer>
    );
}

export default Footer;