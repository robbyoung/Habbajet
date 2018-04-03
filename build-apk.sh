#! /bin/sh -f

echo 'Removing platforms...'
rm -rf platforms

echo 'Changing package name for release...'
sed -i 's/HabbajetDev/Habbajet/' package.json
sed -i 's/HabbajetDev/Habbajet/' app/App_Resources/Android/app.gradle

echo 'Copying release icons over...'
cp Piskel/Icons/ReleaseIcon.png app/App_Resources/Android/drawable-ldpi/icon.png
cp Piskel/Icons/ReleaseIcon.png app/App_Resources/Android/drawable-mdpi/icon.png
cp Piskel/Icons/ReleaseIcon.png app/App_Resources/Android/drawable-hdpi/icon.png
cp Piskel/Icons/ReleaseIcon.png app/App_Resources/Android/drawable-xhdpi/icon.png
cp Piskel/Icons/ReleaseIcon.png app/App_Resources/Android/drawable-xxhdpi/icon.png
cp Piskel/Icons/ReleaseIcon.png app/App_Resources/Android/drawable-xxxhdpi/icon.png

echo 'Building for Android...'
tns build android --release --key-store-path my-release-key.jks --key-store-password soupdragon --key-store-alias robbo --key-store-alias-password soupdragon

read -p "Install apk on device? " yn
case $yn in
    [Yy]* ) adb install platforms/android/build/outputs/apk/Habbajet-release.apk; break;;
    * ) echo 'Skipping install...';;
esac

echo 'Changing package name back...'
sed -i 's/Habbajet/HabbajetDev/' package.json
sed -i 's/Habbajet/HabbajetDev/' app/App_Resources/Android/app.gradle

echo 'Putting dev icons back...'
cp Piskel/Icons/DevIcon.png app/App_Resources/Android/drawable-ldpi/icon.png
cp Piskel/Icons/DevIcon.png app/App_Resources/Android/drawable-mdpi/icon.png
cp Piskel/Icons/DevIcon.png app/App_Resources/Android/drawable-hdpi/icon.png
cp Piskel/Icons/DevIcon.png app/App_Resources/Android/drawable-xhdpi/icon.png
cp Piskel/Icons/DevIcon.png app/App_Resources/Android/drawable-xxhdpi/icon.png
cp Piskel/Icons/DevIcon.png app/App_Resources/Android/drawable-xxxhdpi/icon.png