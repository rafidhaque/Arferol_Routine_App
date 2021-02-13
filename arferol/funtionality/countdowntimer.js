import React,{useRef, useState} from 'react';
import { diff } from 'react-native-reanimated';

const calculate_remaining_time =(time)=>{
    let result =[];  
    const givendate = new Date('14 February 2021 23:59:59');
    const now = Date.now();
    const difference = givendate-now;

    seconds = Math.floor(difference/1000);
    minutes = Math.floor(seconds/60);
    hours = Math.floor(minutes/60);
    days = Math.floor(hours/24);
    
    hours = hours-(days*24);
    minutes = minutes-(days*24*60)-(hours*60);
    seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

    return result[hours,minutes,seconds]
    

}