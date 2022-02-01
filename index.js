// Code your solution in this file!

function distanceFromHqInBlocks(location){
    const headQuarters = 42;
    if(location>=headQuarters){
        return location-headQuarters;
    }else{
        return headQuarters-location;
    }
}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location)*264;
}

function distanceTravelledInFeet(startingPoint,endingPoint){
    if(startingPoint>endingPoint){
        return (startingPoint-endingPoint)*264;
    }else{
        return (endingPoint-startingPoint)*264;
    }
}

function calculatesFarePrice(startingPoint,endingPoint){
    let distance = distanceTravelledInFeet(startingPoint,endingPoint);
    if(distance<=400){
        return 0;
    }else if(distance>400 && distance<=2000){
        return (distance-400)*0.02;
    }else if(distance>2000 && distance<=2500){
        return 25;
    }else if(distance>2500){
        return 'cannot travel that far';
    }
}