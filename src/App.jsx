// import './App.css'
// import './style.css'
// import CommonComponentsMain from './components/Block'
// import { CommonOne, CommonTwo, CommonThree } from './components/Block'
// import BasicComponent from './components/BasicComponent'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Buttons from './components/Buttons'
// import Login from './components/LoginPage'  //having issues with login form kindly settle it down in free time
// import LoginPage2 from './components/LoginPage2'
// import Form from './components/Form'
// import { Routes, Route } from 'react-router-dom'
// import Home from './pages-BrowserRoute/Home'
// import Blogs from './pages-BrowserRoute/Blogs'
// import Contact from './pages-BrowserRoute/Contact'
// import Nopage from './pages-BrowserRoute/NoPage'
// import { useState, useEffect } from 'react'
// import Props from './components/Props'
// import State from './components/State'
// import Hooks from './components/Hooks'
// import UseEffectHook from './components/UseEffectHook'
// import UseRefHook from './components/UseRefHook'
// import GetHttpRequest from './components/FetchAPI/GetHttpRequest'
// import GetRequestAPI from './components/FetchAPI/GetRequestAPI'
// import GetAPI from './components/FetchAPI/GetAPI'
// import GetAPI_UseState from './components/FetchAPI/GetAPI_UseState'
// import PostAPI from './components/FetchAPI/PostAPI'
// import UseState from './React_Hooks/UseState'
// import UseEffect from './React_Hooks/UseEffect'
// import UseContext from './React_Hooks/UseContext'
// import UseRef from './React_Hooks/UseRef'
// import UseReducer from './React_Hooks/UseReducer'
// import UseMemo from './React_Hooks/UseMemo'
// import UseCallback from './React_Hooks/UseCallback'
// import UseImperativeHandle from './React_Hooks/UseImperativeHandle'
// import UseLayoutEffect from './React_Hooks/UseLayoutEffect'
// import ReactjsFetchPostAPI from './components/FetchAPI/ReactjsFetchPostAPI';
// import ListGroup from "./components/ListGroup"
// import Fragments from './components/Fragments'
// import ListRendering from './components/ListRendering'
// import ConditionalRendering from './components/ConditionalRendering'
// import HandlingEvents from './components/HandlingEvents'
// import UseState from "./React_Hooks/UseState"
// import ArrayOfObjects from "./components/ArrayOfObjects"
// import StyledComponents from "./components/StyledComponents"
// import JSXAttribute from "./components/JSXAttribute"
// import CSS_StylingandCSS_ImportingFiles from "./components/CSS_StylingandCSS_ImportingFiles"
// import InternalandInlineStylingCSS from "./components/InternalandInlineStylingCSS"
// import SimpleGreetingWebsite from "./MiniProject/SimpleGreetingWebsite"
// import FunctionalComponent from "./components/FunctionalComponent"
// import Heading from "./components/Heading"
// import Para from "./components/Para"
// import ListOfItems from "./components/ListOfItems"
// import youtuber, { favprog, favicon, myName, myNames } from "./components/ModulesImportExport"
//another way of importing all methods togther as shown below. Which is not recommended
// import * as aamir from './components/ModulesImportExport'
// import add, {subtract, multiply, division, modulus} from "./components/ReactJSChallenge/SimpleCalcApp"
// import Card from "./components/ComponentAttributes/Cards"
// import Sdata from "./components/Sdata"
// import Images from './Images'
// import Netflix from "./Netflix";
// import AmazonPrime from "./AmazonPrime";
import SlotMachine from "./MiniProject/SlotMachine";


//useNavigation Hook (we use this hook to navigate from one page to another using Hook)
//On a click of button, image, link, text we want to navigate to the next page
// function ncard(val) {
//   console.log(val);
//   return(
//     <Card 
//           imgsrc={val.imgscr}
//           title={val.title}
//           sname={val.sname}
//           link={val.links}
//         />
//   );
// }

// const favSeries = "Amazon";

// const FavS = () => {

//   if(favSeries === "Netflix") {
//     return <Netflix />
//   } else {
//     return <AmazonPrime />
//   }
// }

function App() {  

  return (
    <>
      <div>
        {/* <h1>App Component</h1> */}
      {/* <div> */}
        {/* {isLoading && <Spinner />} */}
        {/* {error && <div className="error">Error: {error}</div>} */}
      {/* </div> */}

        {/* <div> */}

          {/* <Props name="Muhammad"/>
          <Props name="Abdul"/>
          <Props name="Aamir"/> */}

          {/* <State /> */}
          {/* <Hooks /> */}
          {/* <UseEffectHook /> */}
          {/* <UseRefHook /> */}
          {/* <GetHttpRequest /> */}

          {/* <h1>App Component</h1> */}
          {/* <div>Home Page</div> */}
          {/* <Routes> */}
            {/* <Route path='/' element={<Home />}/> */}
            {/* <Route path='/blogs' element={<Blogs />}/> */}
            {/* <Route path='/contact' element={<Contact />}/> */}
            {/* <Route path='/nopage' element={<Nopage />}/> */}
          {/* </Routes> */}

          {/* <BrowserRoute_Routes_Route route /> */}
          {/* <Form />  */}

          {/* <LoginPage2 />

        {/* <p>Welcome to the coders world</p>
        <CommonComponentsMain />
        <CommonOne />
        <CommonTwo />
        <CommonThree /> */}
        {/* <BasicComponent /> */}
        {/* <Navbar /> */}
        {/* <Home /> */}
        {/* <Buttons /> */}
        {/* <Login />  Having issues with the login form, kindly fix the bug */}
        {/* </div> */}

        {/* <GetHttpRequest /> */}
        {/* <GetRequestAPI /> */}

        {/* <GetAPI /> */}
        {/* <GetAPI_UseState /> */}

        {/* <PostAPI /> */}

        {/* <UseState /> */}
        {/* <UseEffect /> */}
        {/* <UseContext /> */}
        {/* <UseRef /> */}
        {/* <UseReducer /> */}
        {/* <UseMemo /> */}
        {/* <UseCallback /> */}
        {/* <UseImperativeHandle /> */}
        {/* <UseLayoutEffect /> */}

        {/* <ReactjsFetchPostAPI /> */}

        {/* <ListGroup /> */}
        {/* <Fragments /> */}
        {/* <ListRendering /> */}
        {/* <ConditionalRendering /> */}
        {/* <HandlingEvents /> */}
        {/* <UseState/> */}
        {/* <ArrayOfObjects /> */}
        {/* <StyledComponents /> */}
        {/* <JSXAttribute /> */}
        {/* <CSS_StylingandCSS_ImportingFiles /> */}
        {/* <InternalandInlineStylingCSS /> */}
        {/* <SimpleGreetingWebsite /> */}
        {/* <FunctionalComponent /> */}
        {/* <Heading /> */}
        {/* <Para /> */}
        {/* <ListOfItems /> */}

        {/* <li>{youtuber}</li> //for default value if there is only single element we can write anything like: {youtuber or myfav or anything} */}
        {/* <ol>
          <li> Aamir </li>
          <li>{youtuber}</li>
          <li>{favprog}</li>
          <li>{favicon}</li>
          <li>{myName()}</li>
          <li>{myNames()}</li>
        </ol> */}
        {/* <ol>
          <li> Aamir </li>
          <li>{aamir.default}</li>
          <li>{aamir.favprog}</li>
          <li>{aamir.favicon}</li>
          <li>{aamir.myName()}</li>
          <li>{aamir.myNames()}</li>
        </ol> */}

        {/* <ol>
          <li>{add(10, 5)}</li>
          <li>{subtract(10, 5)}</li>
          <li>{multiply(10, 5)}</li>
          <li>{division(10, 3)}</li>
          <li>{modulus(10, 5)}</li>
        </ol> */}

        {/* <h1 className="heading_style">List of top 5 Netflix Series in 2024</h1> */}

        {/* <Card 
          imgsrc={Sdata[0].imgscr}
          title={Sdata[0].title}
          sname={Sdata[0].sname}
          link={Sdata[0].links}
        />

        <Card 
            imgsrc={Sdata[1].imgscr}
            title={Sdata[1].title}
            sname={Sdata[1].sname}
            link={Sdata[1].links}
        />

        <Card 
            imgsrc={Sdata[2].imgscr}
            title={Sdata[2].title}
            sname={Sdata[2].sname}
            link={Sdata[2].links}
        />

        <Card 
            imgsrc={Sdata[3].imgscr}
            title={Sdata[3].title}
            sname={Sdata[3].sname}
            link={Sdata[3].links}
        />

        <Card 
            imgsrc={Sdata[4].imgscr}
            title={Sdata[4].title}
            sname={Sdata[4].sname}
            link={Sdata[4].links}
        /> */}

        {/* <Sdata /> */}


        {/* <h1 className="heading_style">List of top 5 Netflix Series in 2024</h1> */}
{/* Map function in React JS */}
      {/* {Sdata.map(function ncard(val) {
        return(
          <Card 
            imgsrc={val.imgscr}
            title={val.title}
            sname={val.sname}
            link={val.links}
          />
        );
      })}; */}

{/* <h1 className="heading_style">List of top 5 Netflix Series in 2024</h1> */}

{/* Fat Arrow function in React JS */}
{/* {Sdata.map((val, index) => {
  console.log(index);
        return(
          <Card 
            key={val.id}
            imgsrc={val.imgscr}
            title={val.title}
            sname={val.sname}
            link={val.links}
          />
        );
      })}; */}

      {/* Normal Function 
      function myName(a, b) {
        return a+b;
      }

      Fat Arrow Function
      const myName = (a, b) => {
        return a+b;
      }

      const myName = (a, b) => a+b; */}
      {/* <Images /> */}
      {/* <FavS /> */}
      {/* { favSeries === "Netflix" ? <Netflix /> : <AmazonPrime /> } */}

      <h1 className="heading_style"> 
        🎰 Welcome to {" "}
        <span style={{fontWeight : "bold"}}>Slot Machine Game</span> 🎰 </h1>
      <SlotMachine />
      </div>
    </>
  )
}

export default App;