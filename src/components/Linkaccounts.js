
import "../../src/css/linkaccounts.css"
// import { useNavigate } from "react-router-dom";
function  LinkAccounts() {


    // const navigate = useNavigate();
    return( 


        <div class="e_login_icons">
        <a href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjU5MDkwMDM2LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D">
            <ion-icon  name="logo-facebook" class="e_login_icon"></ion-icon>
        </a>

        <a href="https://www.instagram.com/">
            <ion-icon  name="logo-instagram" class="e_login_icon"></ion-icon>
        </a>

        <a href="https://twitter.com/?logout">
            <ion-icon  name="logo-twitter" class="e_login_icon"></ion-icon>
        </a>

        <a href="https://accounts.google.com/signin/v2/identifier?hl=en&continue=http%3A%2F%2Fsupport.google.com%2Fmail%2Fanswer%2F8494%3Fhl%3Den%26co%3DGENIE.Platform%253DDesktop&ec=GAlAdQ&flowName=GlifWebSignIn&flowEntry=AddSession">
            <ion-icon name="logo-google" class="e_login_icon"></ion-icon>
        </a>
        <a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1659090331&rver=7.1.6819.0&wp=MBI_SSL&wreply=https%3A%2F%2Flw.skype.com%2Flogin%2Foauth%2Fproxy%3Fclient_id%3D360605%26redirect_uri%3Dhttps%253A%252F%252Fsecure.skype.com%252Fportal%252Flogin%253Freturn_url%253Dhttps%25253A%25252F%25252Fsecure.skype.com%25252Fportal%25252Foverview%26response_type%3Dpostgrant%26state%3D1b48c05883c80fd3f7599312&lc=1033&id=293290&mkt=en-US&psi=skype&lw=1&cobrandid=2befc4b5-19e3-46e8-8347-77317a16a5a5&client_flight=ReservedFlight33%2CReservedFlight67">
            <ion-icon  name="logo-skype" class="e_login_icon"></ion-icon>
        </a>


    </div>
     );
}

export default LinkAccounts;