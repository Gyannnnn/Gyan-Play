export const API_KEY = 'AIzaSyBCqueFuzCscUq9ccWsu-YsiiMUN57b84I';

export const valuechanger=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+'M'
    }
    else if(1000000>value>=1000){
        return Math.floor(value/1000)+'K'
    }
    else{
        return value
    }
    

}
