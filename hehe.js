const sandwich = {
    bread: 'wheat',
    meat: 'ham',
    cheese: 'cheddar',
    veggietable: 'lettuce',
    sauce: 'mayonnaise',

name : function(text) {
    return this.meat + " sandwich with " + this.sauce;
}
};

document.getElementById("food").innerHTML = sandwich.name();

function myfunction(para1, para2){
console.log(para1 + para2);
}
myfunction ("yee","haw");

function message() {
    alert ("You're amazing!");
}

function replace() {
    let text = document.getElementById("helloworld").innerHTML;
    document.getElementById("helloworld").innerHTML =
    text.replace("melancholic song by Louie Zong", "jazzy song by Kenjiro Tsuda");
}

