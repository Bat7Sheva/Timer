import './Timer.css';
import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 250,
    strokeWidth: 10
};

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;


export default function Timer() {
    const wedding = "12/08/2022"
    const myDate = new Date(wedding); // Your timezone!
    const weddingDate = myDate.getTime() / 1000.0;
    const stratTime = Date.now() / 1000.0; // use UNIX timestamp in seconds
    const endTime = weddingDate; // use UNIX timestamp in seconds

    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <div className="App">
            <CountdownCircleTimer
                {...timerProps}
                colors="#E94767"
                duration={daysDuration}
                initialRemainingTime={remainingTime}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderTime("ימים", getTimeDays(daysDuration - elapsedTime))}
                    </span>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors="#4D6EB4"
                duration={daySeconds}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                })}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderTime("שעות", getTimeHours(daySeconds - elapsedTime))}
                    </span>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors="#E1B64A"
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                })}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderTime("דקות", getTimeMinutes(hourSeconds - elapsedTime))}
                    </span>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors="#69B54B"
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > 0
                })}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderTime("שניות", getTimeSeconds(elapsedTime))}
                    </span>
                )}
            </CountdownCircleTimer>
        </div>
    );
}