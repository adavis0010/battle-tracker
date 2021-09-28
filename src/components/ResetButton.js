import React from 'react';

function ResetButton(){
    const refreshPage = ()=>{
        window.location.reload();
     }
   
    return(
        <div className='reset'>
            <button onClick={refreshPage} className='reset-button'>
                Reset
            </button>
        </div>
    )
};

export default ResetButton;