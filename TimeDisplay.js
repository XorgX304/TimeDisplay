/**
 * Created by Scott Adkin 14th June 2018
 * Simple class to convert unix epoch times to strings
 */
class TimeDisplay{

    constructor(time){

        time = parseInt(time);
        
        if(typeof time !== "number"){
            throw new Error("Argument passed to TimeDisplay constructor was not a number!");
        }
              
        let temp = new Date();
        this.now = Math.floor(temp.getTime() / 1000)

        this.time = this.now - time;    
    }

    getUnitString(type, value){

        let strings = [];

  

        switch(type){
            case 0: {  strings = [" sec"," secs"]; } break;
            case 1: {  strings = [" min"," mins"]; } break;
            case 2: {  strings = [" hour"," hours"]; } break;
            case 3: {  strings = [" day"," days"]; } break;
            case 4: {  strings = [" month"," months"]; } break;
            case 5: {  strings = [" year"," years"]; } break;
        }


        if(value == 1){
            return strings[0];
        }

        return strings[1];
        
    }

    timeString(){

        const minute = 60;
        const hour = minute * 60;
        const day = hour * 24;
        const week = day * 7;
        const month = week * 4;
        const year = day * 365;

        const currentSeconds = Math.floor(this.time % 60);
        const currentMinutes = Math.floor((this.time / minute) % 60);
        const currentHours = Math.floor((this.time / hour) % 24);
        const currentDays = Math.floor((this.time / day) % 28);
        const currentMonths = Math.floor((this.time / month) % 12);
        const currentYears = Math.floor(this.time / year);

        let secondString = "";

        if(currentYears <= 0){
            if(currentMonths <= 0){
                if(currentDays <= 0){
                    if(currentHours <= 0){
                        if(currentMinutes <= 0){
                             return currentSeconds+this.getUnitString(0,currentSeconds);          
                        }else{
                            if(currentSeconds > 0){
                                secondString = this.getUnitString(0,currentSeconds);
                            }
                            return currentMinutes+this.getUnitString(1,currentMinutes)+" "+currentSeconds+secondString;   
                        }
                    }else{
                        if(currentMinutes > 0){
                            secondString = this.getUnitString(1,currentMinutes);
                        }
                        return currentHours+this.getUnitString(2,currentHours)+" "+currentMinutes+secondString; 
                    }
                }else{
                    if(currentHours > 0){
                        secondString = this.getUnitString(2,currentHours);
                    }
                    return currentDays+this.getUnitString(3,currentDays)+" "+currentHours+secondString; 
                }
            }else{
                if(currentDays > 0){
                    secondString = this.getUnitString(3,currentDays);
                }
                return currentMonths+this.getUnitString(4,currentMonths)+" "+currentDays+secondString; 
            }
        }else{
            if(currentMonths > 0){
                secondString = this.getUnitString(4,currentMonths);
            }
            return currentYears+this.getUnitString(5,currentYears)+" "+currentMonths+secondString; 
        }
    }
}