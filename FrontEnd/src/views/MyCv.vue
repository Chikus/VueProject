<template>
    <div class="hmain">
        <div class="htitle">
            <div class="foto"> </div>
            <div class="hname">
                <h2> Efrain Arrambide Barron</h2>
                <span> Computer Engineer</span>
            </div>
            <ul class="hinfo">
                <li>email: aztlan_abe@hotmail.com</li>
                <li>linkedIn:  https://www.linkedin.com/in/efrain-arrambide </li>
                <li>phone: +380636257244</li>
                <li>skype: chikus8</li>
            </ul>
                    
        </div>
        <div class="meabout">
            <div class="binfo1">
                <h2>Summary</h2>
                <div class="jti">
                    <p>
                        Web Developer specializing in front end and back end development. Experienced with all
                        stages of the development cycle for dynamic web projects. Well-versed in numerous prog
                        ramming languages including HTML5, JavaScript, CSS, MySQL, Sqlite, Mongodb, Vue.
                    </p>
                </div>
                <h2>Education</h2>
                <div class="jti">
                    <h4>
                        Master in Computer Sciense<br />Autonomous University of Guadalajara 2017-2019
                    </h4>
                    <ul class="pxinfo">
                        <li>Development a file system and text editor in an OS project in C++.  </li>
                        <li>
                            Creation of 8 layers CNN for classification of 10 objects with 15% error in Pytorch and Keras.
                        </li>
                    </ul>
                </div>
                <div class="jti">
                    <h4>
                        Specialization in Systems on Chip<br />ITESO 2016-2016
                    </h4>
                    <ul class="pxinfo">
                        <li>Digital Design for ICs </li>
                        <li>CMOS OTA Analog Design in Cadence Virtuoso, Allegro.</li>
                    </ul>
                </div>
                <div class="jti">
                    <h4>
                        Advence Program in Semiconductor Tecnology Design<br />CINVESTAV 2014-2014
                    </h4>
                    <ul class="pxinfo">
                        <li>Digital Design and Embedded Software Verilog and scripting languages.</li>
                        <li>Simulation on QuestaSim of single cycle, mult cycle and pipeline CPY of MIPS32 version described in System Verilog.</li>
                    </ul>
                </div>
            </div>
            <div class="binfo2">
                <h2>Experience </h2>
                <div class="jti">
                    <h4>
                        Pixela Labs - 06/2019 to 01/2020<br />Full Stack developer, New York
                    </h4>
                    <ul class="pxinfo">
                        <li>Create a frontend in Vue framework. </li>
                        <li>Development an authentication with encrypt and token. </li>
                        <li>Impemented a mongodb to store users information. </li>
                    </ul>
                </div>
                <div class="jti">
                    <h4>
                        SmartAvi - 06/2019 to 01/2020<br />Backend developer, Las Vegas
                    </h4>
                    <ul class="pxinfo">
                        <li>Work with Yii2 framework. </li>
                        <li>Enabling and hook up Active Directory (Windows Server) in the backend using python scripting and sqlite.</li>
                        <li>Implementing a data base to manage the access to the Active Directory in Sqlite. </li>
                    </ul>
                </div>
                <div class="jti">
                    <h4>
                        Intel - 01/2015 to 05/2020<br />Software Design Engineer, Guadalajara, Jalisco
                    </h4>
                    <ul class="pxinfo">
                        <li>Deployment and design of protocols for physical, MAC, routing still transports layers </li>
                        <li>
                            Implementing and support of transactors base on DPI calls, C, C++, Python, Simics programming and Verilog, System Verilog description languages.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
    .hmain {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin:auto;
        align-content: center;
        background-color:darkgray;
        opacity:.7;

    }
    .foto {
        background-image: url("./images/Yo.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        border-radius: 100%;
        min-width: 120px;
        min-height: 120px;
        margin: 2%;
    }
    .htitle {
        text-align: justify;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 2%;
        border-bottom: 2px solid;
    }
    .hinfo {
        font-size: 12px;
        font-weight: 500;
    }
    .meabout {
        display:flex;
        flex-flow:row;
        justify-content:space-between;
    }
    .binfo1 {
        width: 50%;
        margin: 2%;
    }
    .binfo2 {
        width: 50%;
        margin: auto;
        border-left: 2px solid;
    }
    .pxinfo {
        text-align:justify;
    }
    .jti {
        margin:5%;
        text-align:justify;
    }
</style>