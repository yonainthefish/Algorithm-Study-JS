function solution(x) {
    let positionNum = 0;
    const checkNum = x.toString().split("");
    for(num of checkNum){
        positionNum += +num 
    }
    return x % positionNum == 0 ? true : false;
}