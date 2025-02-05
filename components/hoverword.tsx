import React from "react";
const Hoverword = ({ word, color}: {word:string, color:string}) => {

    const wordList = word.split(" ");


    return (
        <div className="hoverphrase">

            {wordList.map((word, idx)=> {

                return (
                <div key={idx} className="hoverword">
                {word.split("").map((letter, index)=> {
                    return (
                        <div key={index} className={`hoverletter ${color}`}>
                            {letter}
                        </div>
                    );
                })}
                </div>
        
            );})}
           

        </div>
    );

};

export default Hoverword;