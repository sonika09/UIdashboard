import React from 'react'
import '../maincontainer.css'
import Sidebar from './Sidebar'
import Secondcol from './Secondcol'
function Maincontainer() {
    return (
        <div class="maincontainer">
            <div class="sidebar">
               <Sidebar/>
            </div>
             <div class="sec-col">
                  <Secondcol/>
             </div>

        </div>
    )
}

export default Maincontainer
