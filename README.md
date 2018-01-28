# 3things
A web app to order food, watch videos, and listen to music. Total Fun!

## Installation
Install Meteor via Chocolatey
```
choco install meteor
```

### Chocolatey Installation
Through cmd.exe:
```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

Through PowerShell.exe:
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
After Meteor is installed, run in the root folder:
```
meteor run
```
