import React,{useState} from 'react';

import FromData from './FromData';

const Tabs =()=> {

  const [toggleState, setToggleState] = useState(1);
  const [name, setUpdatName] = useState();
  const [email, setUpdateEmail] = useState();
  const[nameprint, setNamePrint]=useState();
  const[emailprint, setEmailPrint]=useState();
 

  const toggleTab =(index)=>{
    setToggleState(index);
  }

  const userName=(e)=>{
   setUpdatName(e.target.value);
  }

  const userEmail =(e)=>{
   setUpdateEmail(e.target.value);
  }

  const submitForm =(e)=>{
    e.preventDefault();
    setNamePrint(name)
    setEmailPrint(email);
      
  }


  return (
    <>
    <h1> Data transfer one component to another component</h1>
    <div className="container">

        <div className="bloc_tabs">
            <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(1)}>Form</div>
            <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(2)}>From Data</div>
        </div>

        <div className="content-tabs">
            <div className={toggleState === 1 ? "content active-content" : "content"}>
              <h3>Fill Form</h3>
              <form onSubmit={submitForm}>
                <ul className="from">
                  <li><input type="text" name={name} placeholder="Name" onChange={userName}/></li>
                  <li><input type="text" name={email} placeholder="Email" onChange={userEmail}/></li>
                  <button type="submit">Submit</button>
                </ul>
              </form>
              
            </div>

            <div className={toggleState === 2 ? "content active-content" : "content"}>
              <FromData nameprint={nameprint} emailprint={emailprint}/>
            </div>

        </div>

    </div>
    </>
  );
}

export default Tabs;
