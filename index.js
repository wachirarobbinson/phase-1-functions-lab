function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264; 
    return blocks * feetPerBlock;
}

function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        const farePrice = (distance - 400) * 0.02;
        return farePrice;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}