#!/bin/bash -e

start24() { 
    status24
    if [ $? = 1 ];
    then
        setsid npm run start23 >> ./log23.log
        echo "starteddddd";
    else 
        echo "already running";
    fi
}

status24() { 
    isRunning23=$(pidof "practiceGit23");
    if [ "$isRunning23" = "" ];
    then 
        echo "not running babai";
        return 1
    else
        echo "running $isRunning23";
        return 0
    fi
}

stop24() { 
    status24
    echo $?
    if [ $? = 0 ];
    then
        npm run --silent stop23;
        echo "stopeed23";
    fi
}

case $1 in 
    "start22") start24;;
    "status22") status24;;
    "stop22") stop24;;
    *) echo "valid option ivvu ra rei"
esac