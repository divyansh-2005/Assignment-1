export function isLeapYear(year){
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                // console.log("yes");
                return true
            } else{
                // console.log("no");
                return false
            }
        } else{
            // console.log("yes");
            return true
        }
        
    } else{
        // console.log("no");
        return false
    }
}   

//exported as a default object
export default{
    isLeapYear,
} 