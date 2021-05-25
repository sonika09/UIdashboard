import React from 'react'
 


function Secondcont(props) {
    return (
        <div className="secondheader">
            <div className="header-1">{props.icon}</div>
            <div className="header-2">{props.heading}</div>
            <div className="header-3">{props.para}</div>
        </div>
    )

    }

function Secondcol() {
    return (
        <>
        <div className="second">
        <div className="first-row">
            <div className="firsthead">
            <Secondcont heading={"Mortan Central Manager"} icon={<i class="fa fa-align-center" aria-hidden="true"></i>}/>
            <Secondcont heading={"Search"} icon={<i class="fa fa-search" aria-hidden="true"></i>}/>
            </div>
        
            <div className="secondhead">
            <Secondcont heading={"task"} icon={<i class="fa fa-tasks" aria-hidden="true"></i>}/>
             
            <Secondcont heading={"Support@gmail.com"} icon={<i class="fa fa-user" aria-hidden="true"></i>}/>
         
            </div>
            <div class="bell">
            <i class="fa fa-bell" aria-hidden="true"></i>
        </div>
        
    
        </div>
        <div className="second-row">
        <Secondcont heading={"Dashboard"}  para={"WNS-CPT 3.17"}/>
        <Secondcont heading={"WNS-CPT 3.17"}  para={"(192.168.1.15)"}/>
        <Secondcont heading={"3 Second"}  para={"Update Interval"}/>
        
        
        </div>
        <div class="bottom">
        <img class="center-1 "src="center1.jpeg" alt="graph"></img>
        <img class="center-2 "src="center2.jpeg" alt="graph"></img>
        <img class="center-3 "src="center3.jpeg" alt="graph"></img>
        </div>
        <div class="graph">
        <img class="fourth-row "src="graph3.jpeg" alt="graph"></img>
        <img class="fifth-row "src="graph4.jpeg" alt="graph"></img>
        <img class="sixth-row "src="graph2.jpeg" alt="graph"></img>
          </div>
    </div>
    
        </>
    )
    }


export default Secondcol

