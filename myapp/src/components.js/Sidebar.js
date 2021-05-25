import React from 'react'
import '../maincontainer.css'

function Sidebardata(props) {
    return (
        <>
        <div className="sidenav">
       
        <div className="sidebaricon">{props.icon}</div>
        <div className="sidebarhead">{props.heading}</div>
        </div>
        {/* <i class="fa fa-caret-down" aria-hidden="true"></i> */}
</>
    )
}




function Sidebar() {
    return (
        <>
        
        <div className="sidebar-logo">
            <h1 className="sidebar-heading">
                <img className="logo-image" src="71-512.png" alt="graph"></img>
             MOTAN 
        </h1>
            <p className="logo-description">
                N E T W O R K
            </p>
         
        </div>
        <div class="sidebar-nav">
                 
             <h2>Network</h2>
            
            <Sidebardata icon={<i class="fa fa-tachometer"aria-hidden="true"></i>}  heading={"Dashboard"}/>
            <Sidebardata  icon={<i class="fa fa-user" aria-hidden="true"></i>} heading={"Administration"}/>
            <Sidebardata icon={<i class="fa fa-cog" aria-hidden="true"></i>}  heading={"Configuration"}/>
           
        
            <h2>Device</h2>
        
            <Sidebardata  icon={<i class="fa fa-wifi" aria-hidden="true"></i>} heading={"WNSCPT"}/>
            <Sidebardata icon={<i class="fa fa-tachometer"aria-hidden="true"></i>}  heading={"Dashboard"} />
            
    
              
            <h5>Network</h5>
            <h5>System</h5>
        
            <Sidebardata  icon={<i class="fa fa-circle" aria-hidden="true"></i>}heading= {"Reports"}/>
            <Sidebardata  icon={<i class="fa fa-cog" aria-hidden="true"></i>} heading={"Configure"}/>
            <Sidebardata  icon={<i class="fa fa-signal" aria-hidden="true"></i>} heading={"Diagnostics"}/>
            <Sidebardata icon={<i class="fa fa-wrench" aria-hidden="true"></i>} heading={"Maintainence"} />
            <Sidebardata icon={<i class="fa fa-question-circle" aria-hidden="true"></i>} heading={"Support"}/>
           
             
             
              </div>
        
        </>
    )
}

export default Sidebar
