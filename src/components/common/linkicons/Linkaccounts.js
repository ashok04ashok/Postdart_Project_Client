import React from 'react'


import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaSkype } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';


    //face- "https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjU5MDkwMDM2LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D"
    //insta- "https://www.instagram.com/"
    //gmail- "https://accounts.google.com/signin/v2/identifier?hl=en&continue=http%3A%2F%2Fsupport.google.com%2Fmail%2Fanswer%2F8494%3Fhl%3Den%26co%3DGENIE.Platform%253DDesktop&ec=GAlAdQ&flowName=GlifWebSignIn&flowEntry=AddSession"
    //twiter- https://twitter.com/?logout"
    //skype- "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1659090331&rver=7.1.6819.0&wp=MBI_SSL&wreply=https%3A%2F%2Flw.skype.com%2Flogin%2Foauth%2Fproxy%3Fclient_id%3D360605%26redirect_uri%3Dhttps%253A%252F%252Fsecure.skype.com%252Fportal%252Flogin%253Freturn_url%253Dhttps%25253A%25252F%25252Fsecure.skype.com%25252Fportal%25252Foverview%26response_type%3Dpostgrant%26state%3D1b48c05883c80fd3f7599312&lc=1033&id=293290&mkt=en-US&psi=skype&lw=1&cobrandid=2befc4b5-19e3-46e8-8347-77317a16a5a5&client_flight=ReservedFlight33%2CReservedFlight67"

    export default function Linkaccounts() {

    return (
        <div className="e_login_icons">
            <span className="login_icon"><FaFacebook /></span>
            <span  className="login_icon"><FaInstagram /></span>
            <span  className="login_icon"><FaTwitter /></span>
            <span  className="login_icon"><BsGoogle /></span>
            <span  className="login_icon"><FaSkype /></span>
        </div>
    );
}
 