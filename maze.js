"use strict";
var loser = false;  // whether the user has hit a wall
window.onload = function() 
{
    $("start").onclick = startClick;
    $("maze").mouseout = cheater;
    $("end").onmouseover = overEnd;
    
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
    {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() 
{
    loser = true;
    $("status").update("You lose!");
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
    {
        boundaries[i].addClassName("youlose");
    }
    overEnd();
}

function startClick() 
{
    startcount = 0;
    loser = false;
    $('status').update("Find the end!");
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
    {
        boundaries[i].removeClassName("youlose");
    }
}

function overEnd() 
{
    if(loser) 
    {
        $('status').update("You're a loser!");
    } 
    else 
    {
        $('status').update("You're a winner...Congrats!!");
    }
}

function cheater()
{
    $('status').update("I know you're cheating");
}
