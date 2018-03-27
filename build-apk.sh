#! /bin/sh -f

tns build android --release --key-store-path my-release-key.jks --key-store-password soupdragon --key-store-alias robbo --key-store-alias-password soupdragon
adb install platforms/android/build/outputs/apk/Habbajet-release.apk