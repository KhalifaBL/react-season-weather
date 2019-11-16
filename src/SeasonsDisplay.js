import React from 'react';
import './SeasonsDisplay.css';
import { stringLiteral } from '@babel/types';

const seasonConfig = {
    summer: {
        text: "Ughhh, Let's go to the beach",
        iconName: 'sun'
    },
    winter: {
        text: "Burrrr, Let's Netflix and Chill",
        iconName: 'snowflake'

    }
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
}
const SeasonsDisplay = props => {
    console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={season}>
            <div className="icon-container"><i className={`${iconName} big-icon-size icon`} /></div>
            <h1 className={`${season}-title`}>{season.charAt(0).toUpperCase() + season.slice(1)} Time </h1>
            <h2 className="description">{text}</h2>

        </div>
    );


}
export default SeasonsDisplay;