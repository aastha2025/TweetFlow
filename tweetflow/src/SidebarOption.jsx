import React  from "react";
import './SidebarOption.css';
/* On hover turn blue, and otherfeatures 
   pass components as props 
   -> icons on sidebar */

function SidebarOption({active, text, Icon}){// use es6 to destrtructure
    //props used as fun. way of frontend -> pass icons ,text, styling as arguments so can be accessed by using props.
   
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}> 
        <Icon />
           <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption;