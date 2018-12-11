export const TimeCalculate = (str) => {
    let nowTime = new Date().getTime();
    let lastTime = new Date(str).getTime();
    let delay = nowTime - lastTime;
    if(delay > 365 * 24 *60 * 60 * 1000){
        return Math.floor(delay / (365 * 24 * 60 * 60 * 1000)) + '年前';
    }
    else if(delay > 30 * 24 *60 * 60 * 1000){
        return Math.floor(delay / (30 * 24 * 60 * 60 * 1000)) + '月前';
    }
    else if(delay > 24 * 60 * 60 * 1000){
        return Math.floor(delay / (24 * 60 * 60 * 1000)) + '天前';
    }
    else if(delay > 60 * 60 * 1000){
        return Math.floor(delay /  (60 * 60 * 1000)) + '小时前';
    }
    else if(delay >  60 * 1000){
        return Math.floor(delay /  (60 * 1000)) + '分钟前';
    }
    else if(delay > 1000){
        return Math.floor(delay / 1000) + '秒前';
    }
    else {
        return '刚刚';
    }
};