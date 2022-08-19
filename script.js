// This is the solved function of the hackerrank problem 
function pageCount(n, p) {
    // Write your code here
    const frontCount = Math.floor(p/2)
    const backCount = Math.floor(n/2) - Math.floor(p/2)
    return Math.min(frontCount, backCount)

}
// Just copy and paste it in your hackerrank code editor HAPPY CODING :)
