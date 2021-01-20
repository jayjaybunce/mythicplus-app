#!/bin/bash
declare -a simulators=("A46A56FF-48E8-4494-9FC7-3E9DF9BFEFFA" "146E4DA8-0090-4CC4-913F-D63B619B48C6" "3D3D37F3-DE24-4E56-8D63-BE085263E449")

for i in "${simulators[@]}"
do 
    xcrun instruments -w $i
    xcrun simctl install $i "~/.expo/ios-simulator-app-cache/Exponent-2.18.2.tar.app"
    xcrun simctl openurl $i exp://127.0.0.1:19000
done