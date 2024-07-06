import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';

export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? -40 : direction === 'down' ? 50 : 0,
            x: direction === 'left' ? -40 : direction === 'right' ? 50 : 0,
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 1,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}
export const scaleBtn = (delay) => {
    return {
        hidden: {
            scale: 0.8,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };
};
