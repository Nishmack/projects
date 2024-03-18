s="Eat Sleep Code Repeat";
var reverse = function (s) {
    const words = s.split("");
    const rev=words.reverse();
    const result = rev.join("")
    return result;

};