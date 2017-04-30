import * as React from "react";

import {BioDataBlock} from "./components/BioDataBlock";
import {ProjectBlock} from "./components/ProjectBlock";
import {SummaryBlock} from "./components/SummaryBlock";

class CVPage extends React.Component<undefined, undefined> {
    render() {
        return (
        <div>
            <BioDataBlock fullname="Yumashish Subba"
                phone="0838886850"
                email="yumashish@gmail.com"
                address1="Grand Diamond Condomonium"
                address2="888 Petchaburi, Bangkok 10400"
                profilePic="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAMvAAAAJGI3NjgzY2M1LWNlM2YtNDMwZC05YzcyLTcyMmIxZjIxMGIxYQ.jpg"
                linkedin="https://www.linkedin.com/"
                github="https://www.github.com" />
            <ProjectBlock 
                title="CV Website"
                languages="Javascript, Typescript, Sass, React"
                github="https://github.com/thundercraker/cvsite"
                summary="A simple CV webpage built with React">
                This website and it's components are available for reuse and extension through the github collaborative 
                programming platform. It uses the React framework with typescript with webpack as it's build tool
            </ProjectBlock>
            <ProjectBlock
                title="Material List View"
                languages="Java"
                github="https://github.com/thundercraker/YumaMaterialListView"
                summary="A simple library to quickly create an Andriod Drawer">
                Android drawers have a lot of boilerplate code which I was convinved could be hidden away in a 
                library with only a comma seperated list of titles, their children and associated images needed to create 
                a drawer controlled by a stipulated menu button
            </ProjectBlock>
            <SummaryBlock place="Agoda Services Ltd"
                position="Fullstack Engineer"
                startDate={new Date("10-05-2016")}
                endDate={null}
                logo="https://cdn6.agoda.net/images/MVC/default/agoda-logo.png">
                <p>At Agoda, I work on the Login team, which is responsible for the eponymous functionality. As a site visited by millions
                daily, it is always a challenge to insure that our customers can get a seamless yet secure login experience. Our goals on 
                the team are to ensure that new features and flows are introduced to entice more new users to sign up, and concurrently, 
                to prempt vulnerabilities before they are exploited. Some of my recent work on this team includes (but is not limited to):</p>
                <ul>
                    <li>Login with Facebook</li>
                    <li>Being shown captcha at Login under various circumstances</li>
                </ul>
                <ProjectBlock
                    title="Reset Password X"
                    languages="C#, Javascript, CSS, Html"
                    github=""
                    summary="Disallow the reuse of a specified number of previous passwords">
                    I handled this project's backend API changes as well as the frontend changes to accomodate for 
                    the change in the logical flow of resetting passwords on our main website.. The challenges faced 
                    along the way were securely storing the user's password history and also providing various auditing 
                    information.'
                </ProjectBlock>
                <ProjectBlock 
                    title="Email Verification"
                    languages="C#"
                    github=""
                    summary="Allow Agoda users to verify their email accounts">
                    Historically, Agoda has never required their users to verify their accounts via email to ensure 
                    they own the email account that they used to register themselves. However, we have recently
                    intorduced exciting new features such as Wechat login and Facebook login that needed that extra 
                    bit of verification. I implemented the backend API changes to bring email verification to our 
                    website.
                </ProjectBlock>
                <ProjectBlock 
                    title="API Migration to Scala"
                    languages="Scala,AkkaHTTP"
                    github=""
                    summary="Migration of .net based API to our Scala stack">
                    At Agoda, new APIs are being developed in the Scala/Akka stack which has resulted in higher 
                    performance and seamless integration with our big data technology stack (Kafka, Storm etc). 
                    As a result, the decision was made to move the .net APIs used for member information to 
                    the Scala stack. I was part of this effort and created the foundation of the API project.
                </ProjectBlock>
            </SummaryBlock>
            <SummaryBlock place="Goga Japan"
                position="Software Developer Intern"
                startDate={new Date("10-05-2016")}
                endDate={new Date("10-01-2016")}
                logo="https://www.goga.co.jp/images/goga_logo.gif">
                <p>At Goga Japan, I was immersed in an international internship where I learned about the Google Maps platform 
                and applied that to a practical project. My final project at Goga was to create an Android application that could 
                showcase the complete capabilities of Google Maps for Android. Furthermore, I also integrated Facebook into the 
                application to show the ability of an application to act as the bridge between social services to two 
                disparate tech ecosystems.
                </p>
                <ProjectBlock 
                    title="GMaps Kakunin"
                    languages="Java"
                    github=""
                    summary="An application to showcase Google Maps for Android">
                    This application is available in the Android App Store: <a href="https://play.google.com/store/apps/details?id=com.yumashish.kakunin&hl=en">GMaps Kakunin by Yuma</a>
                </ProjectBlock>
            </SummaryBlock>
            <div className="CardBlock Section">
                <div className="SectionTitle">Education</div>
                <SummaryBlock place="Assumption University of Thailand"
                    position="Bachelors of Science in Computer Science"
                    startDate={new Date("2011-11")}
                    endDate={new Date("2015-06")}
                    logo="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/ABAC_Logo.png/220px-ABAC_Logo.png">
                    <p>Deans List 2012, Academic Excellence list 2013, 2014, 2015</p>
                    <ul>
                        <li>Officer of the Assumption University Debate Club</li>
                        <li>9th Best Speaker at the EU Thailand National Debate Championship 2015</li>
                        <li>Octofinalist at Phillipine Debate Open, among other such achievements</li>
                    </ul>
                    <ProjectBlock title="XBuilder: Programmable Legos"
                        languages="C#, PHP"
                        github=""
                        summary="A game where people can build things out of programmable blocks">
                        The concept of XBuilder is to be able to build spacecraft out of blocks (much like 
                        legos). These blocks could be programmed to do things. For example a simple program such 
                        as "START ROCKET R1" would fire a rocket block. For this project I created a simple 
                        programming scripting language named Yumascript. This project entered the SIPA Angel in 
                        the City startup competition and secured 1,200 USD of funding.
                    </ProjectBlock>
                </SummaryBlock>
            </div>
        </div>);
    }
}

export {CVPage}