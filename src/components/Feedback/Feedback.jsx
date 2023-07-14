import React, { Component } from "react";
// import PropTypes from "prop-types";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    // static defaultProps = {};

    // static propTypes = {};
    

    onLeaveFeedback=(state)=>{
        this.setState((prevValue) =>
        {
            return { [state] : prevValue[state] + 1 };
        })
    }  
    countTotal({good,neutral,bad}) {
        let total;
        total = good + neutral + bad;
        return total;
    }
    countPositiveFeedbackPercentage({ good, neutral, bad }, total) {
        let positivePercentage = total !== 0 ? Math.round(good / total * 100) : 0;
        return positivePercentage;
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total= this.countTotal(this.state);
        const positivePercentage=this.countPositiveFeedbackPercentage(this.state, total);
        // const options = Object.keys(this.state);
        return (
        <div>
            <h2>Please leave feedback</h2>
            <button type="button" onClick={this.handleButtonGood}>Good</button>
            <button type="button" onClick={this.handleButtonNeutral}>Neutral</button>
            <button type="button" onClick={this.handleButtonBad}>Bad</button>
                
            <h3>Statistics</h3>    
                <p>Good:{good}</p>
                <p>Neutral:{neutral}</p>
                <p>Bad:{bad}</p>
                <p>Total:{total}</p>
                <p>Positive:{ positivePercentage} %</p>
        </div>
        );
    }
}