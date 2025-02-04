/* eslint-disable */
import Questionnaire from "@/components/questionnaire";
import Image from "next/image";
import { useState } from "react";
import { Timezone } from "@/types/timezone";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleNewClick = () =>{

    setClicked(!clicked);

  };


  const [questionnaireData, setQuestionnaireData] = useState<{
    timezones: Timezone[];
    sleepTime: string;
  }>({
    timezones: [],
    sleepTime: "",
  });

  const handleSubmit = () => {
    console.log("submitted");
    setSubmitted(true);
  };

  const handleDataChange = (data: { timezones: any[]; sleepTime: string }) => {
    setQuestionnaireData(data);
  };

  return (
    <div className="main-container">
        {/* <div className="container">
          <div>
            
          </div>
          <div>
            
          </div>
          <div className="text-2xl pilltime">
            <Image src="/pilltime.svg" alt="pill time! written, logo of the website" width={400} height={400} />
          </div>


          {!submitted && <div className="welcome hover:text-red-200 text-2xl">
              <button onClick={handleNewClick}> New to PillTime? </button>
          </div>}

          <div>
            
          </div>

        </div> */}

        {!submitted && 
          <div className="questions">

            <div className="q1">
            </div>

            <div className="q2">
            </div>

          <div className="text-2xl pilltime q3">
            <Image src="/pilltime.svg" alt="pill time! written, logo of the website" width={400} height={400} />
          </div>


          {!submitted && <div className="welcome hover:text-red-200 text-2xl q4">
              <button onClick={handleNewClick}> New to PillTime? </button>
          </div>} 
          
            <div className="q5">
            
            </div>

            <div className="q1">
            </div>
            
            <div className="q2">
            </div>

            <div className="q3">

              <Questionnaire onDataChange={handleDataChange} onSubmit={handleSubmit}/>

            </div>


          <div className="q4">

            {clicked &&
          <div className="introduction">
              <div className="question-text">
                <span className="first-text text-2xl"> Welcome to Pilltime!  </span>
              </div>
              <div className="question-text">
                Pilltime is a service that helps frequent travelers manage their medication and the timing of it.
              </div>

              <div className="question-text">
                We ask you some questions to find out the optimal time to take your medication!
              </div>

              <div className="question-text">
                Ready? Let&apos;s get started!
              </div>
          </div>
          }

          </div>

          <div className="q5">
          </div>

        
          
          </div>}

        {submitted && 
        <div className="submitted">
          <div className="submitted-text">
            Thank you for submitting your information!
          </div>
          <div className="submitted-text">
            We will get back to you soon.
          </div>
        </div> }

        


        <div className="page-end">
          owned by PillTime! LLC
        </div>



    
      
    </div>
  );
}

