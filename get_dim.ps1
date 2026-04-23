Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('c:\Users\ASUS\Desktop\3rd-eye\UVC\UVC\assests\img\products\VacuumePumpsAndSystem\VACUUM PUMPS\IVPVP_1.png')
Write-Output "Width: $($img.Width) Height: $($img.Height)"
$img.Dispose()
