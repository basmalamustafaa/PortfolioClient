import React , { useEffect, useState } from 'react'
import styles from "../Contact/Contact.module.css"
export default function Contact() {
  
  
  const[name,setName]=useState(null);
  const[age,setage]=useState(null);
  const[email,setemail]=useState(null);
  const[pass,setpass]=useState(null);

  function show(){

    
  }
  const handleName = (fieldValue) => {
    if (fieldValue) {
      setName(fieldValue);
    } else {
      setName(null);
    }
  };
  const handleage = (fieldValue) => {
    if (fieldValue) {
      setage(fieldValue);
    } else {
      setage(null);
    }
  };
  const handleEmail = (fieldValue) => {
    if (fieldValue) {
      setemail(fieldValue);
    } else {
      setemail(null);
    }
  };
  const handlepass = (fieldValue) => {
    if (fieldValue) {
      setpass(fieldValue);
    } else {
      setpass(null);
    }
  };
  

  return (
    <div>
          <div className={styles.box2}>

        <p className=' text-uppercase fw-bolder fs-1 text-center' style={{color:'#2c3e50'}}>contact section </p>

            <div className={styles.boxx}>
            <div className={` ms-3 ${styles.line}`}></div>
            <i className='fa-solid fa-star mx-3' style={{color:'#2c3e50'}}></i>
            <div className={` me-3 ${styles.line2}`}></div>
            </div>
            </div>


            <div className='container w-50 pt-5 my-5 pb-1'>
              <from className="mb-3"> 
          

               <input type="text" className={`form-control positon-relative border-top-0 border-start-0 border-end-0 pb-3 mb-5 ${styles.formmm}`} 
               name="userName" id="userName"
                 placeholder="" required/>
                <label className={`${styles.labelll} `}  for="userName" >
                username:
              </label>

             { age ? (
                <label className={`${styles.labelll} `} >
                userAge:
              </label> ) : ('')}
     
               <input type="text" className={`form-control positon-relative border-top-0 border-start-0 border-end-0 pb-3 mb-5 ${styles.formmm}`} name="userAge" id="userAge"
                onChange={(e) => {
                  setage(e.target.value);
                  handleage(e.target.value);}}  placeholder="useAge"/>
            

             
             {email ? (
                <label className={`${styles.labelll}`}  style={{color:'#1abc9c'}} >
                userEmail:
              </label>
              ) : ('')}
               
               <input type="email" className={`form-control positon-relative border-top-0 border-start-0 border-end-0 pb-3 mb-5 ${styles.formmm}`} name="userEmail" id="userEmail"
                onChange={(e) => {
                  setemail(e.target.value);
                  handleEmail(e.target.value);}}  placeholder="userEmail"/>
           
            
             {pass ? (
                <label className={`${styles.labelll}`}  style={{color:'#1abc9c'}} >
                userPass:
              </label>
              ) : (
                ''
              )}
              
               <input type="password" className={`form-control positon-relative border-top-0 border-start-0 border-end-0 pb-3 mb-5 ${styles.formmm}`} name="userPassword" id="userPassword"
               onChange={(e) => {
                setpass(e.target.value);
                handlepass( e.target.value);}} placeholder="userPassword"/>
             
             
             <button className="btn  me-auto d-block mt-3 mb-5" type='submit' style={{backgroundColor:'#1abc9c',color:'white',cursor:'pointer'}}>Send Message</button>
            
             </from>
            </div>

            

</div>
 
  )
}
