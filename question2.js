function SpeedDet(speed) {
    const speedLimit = 70;
    const kmPerDemPoint = 5;
    const pointMax = 12;
    
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demPoints = ((speed - speedLimit) / kmPerDemPoint);
        
        if (demPoints >= pointMax) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demPoints}`);
        }
    }
}
//where you put in the speed//
SpeedDet(200);