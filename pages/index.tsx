/* eslint-disable */
import Questionnaire from "@/components/questionnaire";
import Image from "next/image";
import { useState } from "react";
import { Timezone } from "@/types/timezone";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);


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
    <div className="container">
      <div className="text-2xl pilltime">
        <Image src="/pilltime.svg" alt="pill time! written, logo of the website" width={400} height={400} />
      </div>

      <div className="welcome hover:text-red-200 text-2xl">
          Welcome to PillTime!
      </div>

      <div className="under-welcome">
        Don&apos;t be scared to take your medicine anymore.

      </div>
      </div>

        {!submitted && <div className="questions">
          
          <div className="first-half">
          <div className="introduction">
            <div className="question-text">
              <span className="first-text text-2xl"> New to Pilltime?  </span>
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

          <div>

          <Questionnaire onDataChange={handleDataChange} onSubmit={handleSubmit}/>

          </div>

          </div>

          <div>

        

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

