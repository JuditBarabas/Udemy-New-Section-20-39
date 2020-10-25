function isShortsWeather (temp) {
    if(temp >= 75) {
        return true;
    }
    return false;
}

console.log('Test');
console.log(isShortsWeather(70));
console.log(isShortsWeather(80));