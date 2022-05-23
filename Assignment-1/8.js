function changeFormat(time){
    if (time[1].slice(2) == 'PM' && time[0]!=12){
        time[0] = parseInt(time[0])+12
    }
    else if(time[1].slice(2) == 'AM' && time[0]==12){
        time[0] = parseInt(time[0])-12
    }
    return time
}

function timeDuration(from ,to){
    from = from.split(':');
    to = to.split(':');
    from = changeFormat(from);
    to = changeFormat(to);
    startMin = parseInt(from[0])*60 + parseInt(from[1].slice(0,2))
    endMin = parseInt(to[0])*60 + parseInt(to[1].slice(0,2))
    if (endMin-startMin < 0){
        return 24*60-(startMin-endMin)
    }
    return endMin-startMin
}

console.log(timeDuration('12:01AM', '12:00AM'));
