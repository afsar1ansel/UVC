Add-Type -AssemblyName System.Drawing
$dir = "c:\Users\ASUS\Desktop\3rd-eye\UVC\UVC\assests\img\products\VacuumePumpsAndSystem\VACUUM PUMPS"
Get-ChildItem -Path $dir -Filter "*.png" | ForEach-Object {
    $img = [System.Drawing.Image]::FromFile($_.FullName)
    Write-Output "$($_.Name) - Width: $($img.Width) Height: $($img.Height)"
    $img.Dispose()
}
