# 3things
A web app to order food, watch videos, listen to music, and even doodle. Total Fun!

## Installation
Install Meteor via Chocolatey:
```
choco install meteor
```
Add Angular.js package to meteor:
```
  meteor npm install --save babel-runtime angular angular-meteor
```



### Chocolatey Installation
#### Through cmd.exe:
```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

#### Through PowerShell.exe:
Run
```
Get-ExecutionPolicy
```
If it returns 'Restricted', run
```
Set-ExecutionPolicy AllSigned
```
Then run
```
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

## Run Application
After Meteor/Angular is installed, open MongoDB using:
> meteor mongo

Insert the following food items/ doodle board into mongo:
```
for (i = 0; i < 2048; i++) {     db.pixels.insert({     position:i,     color: 'LavenderBlush'     }) };

db.fooditems.insert({ name: "Pho", ingredients: "beef noodle soup", price: 9, email:"huy.do@wustl.edu" });

db.fooditems.insert({ name: "Fried Chicken", ingredients: "chicken", price: 8, email:"huy.do@wustl.edu" });

db.fooditems.insert({ name: "Brownies", ingredients: "chocolate", price: 5, email:"hdo@iwu.edu" });

db.fooditems.insert({ name: "Pizza", ingredients: "ham and pineapple", price: 10, email:"do.huyd@gmail.com" });

```

Run in the root folder:
```
meteor run
```
View application at:
```
localhost:3000
```
