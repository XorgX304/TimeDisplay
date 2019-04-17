/**
 * Created by Scott Adkin 14th June 2018
 * Simple class to convert unix epoch times to strings
 * Updated 17th April 2019: fixed 2 mistakes/typos 
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
            case "s": {  strings = [" sec"," secs"]; } break;
            case 1: {  strings = [" min"," mins"]; } break;
            case "m": {  strings = [" min"," mins"]; } break;
            case 2: {  strings = [" hour"," hours"]; } break;
            case "h": {  strings = [" hour"," hours"]; } break;
            case 3: {  strings = [" day"," days"]; } break;
            case "d": {  strings = [" day"," days"]; } break;
            case 4: {  strings = [" month"," months"]; } break;
            case "mo": {  strings = [" month"," months"]; } break;
            case 5: {  strings = [" year"," years"]; } break;
            case "y": {  strings = [" year"," years"]; } break;
        }


        if(value == 1){
            return strings[0];
        }

        return strings[1];
        
    }
    

    /**
     * 
     * @param {*} aType The main unit of time type. e.g Minutes(aType)
     * @param {*} aValue The value of above.
     * @param {*} bType  The second unit of time type. e.g Minutes(aType) and Seconds(bType), bType is ignored if the value is 0.
     * @param {*} bValue The value of above.
     */
    getDefaultString(aType, aValue, bType ,bValue){

        let altString = "";
        let string = "";

        if(bValue > 0){
            altString = this.getUnitString(bType,bValue);
        }else{
            return aValue+this.getUnitString(aType,aValue);
        }
        
        return aValue+this.getUnitString(aType,aValue)+" "+bValue+altString;   
        
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


        if(currentYears == 0){
            if(currentMonths == 0){
                if(currentDays == 0){
                    if(currentHours == 0){
                        if(currentMinutes == 0){
                             return currentSeconds+this.getUnitString(0,currentSeconds);          
                        }else{
                            return this.getDefaultString("m",currentMinutes,"s",currentSeconds);  
                        }
                    }else{
                        return this.getDefaultString("h",currentHours,"m",currentMinutes); 
                    }
                }else{
                    return this.getDefaultString("d",currentDays,"h",currentHours); 
                }
            }else{
                return this.getDefaultString("mo",currentMonths,"d",currentHours);
            }
        }else{
            return this.getDefaultString("d",currentYears,"h",currentMonths);
        }
    }
}