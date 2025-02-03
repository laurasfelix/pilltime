/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Timezone } from "@/types/timezone";

const Questionnaire = ({
    onDataChange,
    onSubmit,
  }: {
    onDataChange: (data: { timezones: Timezone[]; sleepTime: string }) => void;
    onSubmit: () => void;
  }) => {

    const [timezones, setTimezones] = useState<Timezone[]>([]);
    const [currTimezone, setCurrTimezone] = useState<Timezone>({name: "", percentage: 0});
    const [sleepTime, setSleepTime] = useState<string>("");

    const options =[
        {value: "night", label: "night (8-11 PM)"},
        {value: "late", label: "late night (12-4 AM)"},
        {value: "morning", label: "morning (5-10 AM)"},
        {value: "day", label: "day (11 AM-4 PM)"},
        {value: "evening", label: "evening (5-8 PM)"}
    ];

    const addTimezone = () => {
        if (currTimezone.name === "" || currTimezone.percentage === 0){
            console.log("invalid timezone");
            return;
        }
        setTimezones([...timezones, currTimezone]);
        setCurrTimezone({name: "", percentage: 0});
        console.log("resetted curr timezone");
    };

    const updateCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrTimezone({name: e.target.value, percentage: currTimezone.percentage});
    };

    const updateNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrTimezone({name: currTimezone.name, percentage: parseInt(e.target.value)});
    };

    useEffect(() => {
        onDataChange({ timezones, sleepTime });
      }, [timezones, sleepTime]);


    return (

        <div className="q-container">

            <div className="timezone">
                <div className='timezone-question'>
                    which timezones do you usually frequent?
                </div>
           

                <div className='timezone-table'>
                    <table>
                        <tbody>
                            {
                                timezones.map((timezone, index) => {
                                    return (
                                       
                                      
                                            <tr key={index}>
                                                <td className="invisible"> + </td>
                                                <td className='td-item td-body'> {timezone.name} </td>
                                                <td className='td-item td-body'> {timezone.percentage}% </td>
                                            </tr>
                                      
                                    );
                                })
                            }
                        
                            
                                <tr>
                                    <td> <button className='td-item' onClick={addTimezone}> + </button> </td>
                                    <td> <input className='td-item td-body' type="text" placeholder="Paris"  onChange={updateCity}  value={currTimezone.name} /> </td>
                                    <td> <input className='td-item td-body' type="number" placeholder="20%" onChange={updateNumber} value={currTimezone.percentage}  step="20" /> </td>
                                </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="sleep">
                <div className='sleep-question'> 
                    when do you usually go to sleep?
                </div>
                <div className='sleep-options'>
                    <select onChange={e => setSleepTime(e.target.value)}>
                        {options.map((option, index) => {
                            return (
                                <option key={index} value={option.value} > {option.label} </option>
                            );
                        })}
                    </select>

                </div>
            </div>

            <div className="submit">
                <button onClick={onSubmit}> submit </button>
            </div>

        </div>
    );


};

export default Questionnaire;