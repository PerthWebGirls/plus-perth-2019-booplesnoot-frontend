import React from 'react'

const CookingTime = ({cookingTimeMinutes, ...props}) => {

    let hrs = Math.floor(cookingTimeMinutes / 60);
    let mins = cookingTimeMinutes % 60;
    let formattedTimes = [];

    if (hrs > 0) {
        formattedTimes.push(
            `${hrs} ${(hrs === 1) ? ' hour' : ' hrs'}`
        );
    }
    if (mins > 0) {
        formattedTimes.push(
            `${mins} ${(mins === 1) ? ' min.' : ' mins.'}`
        );
    }
    return (
        <span>
            {formattedTimes.join(', ')}
        </span>
    );
}

export default CookingTime;