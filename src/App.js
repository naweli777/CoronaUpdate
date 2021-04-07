import React from "react";
// import ClassCompApi from "./HSBC Practics/ClassCompApi";
// import ButtonIncreDecre from "./HSBC Practics/ButtonIncreDecre";
// import EffectHookOne from "./HSBC Practics/EffectHookOne";
// import HookCounterFour from "./HSBC Practics/HookCounterFour";
// import HookCounterIncDec from "./HSBC Practics/HookCounterIncDec";
// import UseStateCount from "./HSBC Practics/UseStateCount";
// import HookCounterThree from "./HSBC Practics/HookCounterThree";



import Introduction from "./About/Introduction";
import MainImage from "./MainFace/MainImage";
import Bargraph from "./SkillChart/Bargraph";
import Sets from "./SetsCircle/Sets";
import Projects from "./Projects/Projects";


// import PracOne from './HSBC Practics/PracOne';
// import ClassComp from './HSBC Practics/ClassComp';
// import StateTry from "./HSBC Practics/StateTry";
// import Eventhan from "./HSBC Practics/Eventhan";
// import EventBind from "./HSBC Practics/EventBind";
// import ClickCounter from "./HSBC Practics/ClickCounter";


function App() {
  return (
    <>
      <MainImage />
      <Introduction />
      <Sets/>
      <Bargraph/>
      <Projects/>
      
      
      {/* {
        ["nimo"," verma", "harry","potter"].map((data,index)=><PracOne key ={index} name={data}/>)
      }

      <ClassComp>main bachha hu</ClassComp>  */}
     {/* <StateTry/> */}
      {/* <Eventhan/> */}
      {/* <EventBind/> */}
      {/* <ClickCounter/> */}

      
      {/* <UseStateCount/> */}
      {/* <HookCounterIncDec/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <EffectHookOne/> */}
      {/* <ButtonIncreDecre/> */}
      {/* <ClassCompApi/> */}



    </>
  );
}

export default App;
