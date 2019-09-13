import {} from 'mathjs'
export function getRandomNumber(props){
    return( parseInt(Math.random(),props)
   );}

export function getNextRoundRobin(total,current){
    return total-current>=2?current+1:0;

}
