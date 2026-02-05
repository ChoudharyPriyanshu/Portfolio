Add-Type -AssemblyName System.Drawing
$b = [System.Drawing.Bitmap]::FromFile('d:\PROJECTS\Portfolio\public\avatar.png')
$c1 = $b.GetPixel(10, $b.Height / 2)
$c2 = $b.GetPixel($b.Width / 2, $b.Height / 2)
$c3 = $b.GetPixel($b.Width / 2, 10)
$hex1 = "#{0:X2}{1:X2}{2:X2}" -f $c1.R, $c1.G, $c1.B
$hex2 = "#{0:X2}{1:X2}{2:X2}" -f $c2.R, $c2.G, $c2.B
$hex3 = "#{0:X2}{1:X2}{2:X2}" -f $c3.R, $c3.G, $c3.B
Write-Host "$hex1 $hex2 $hex3"
$b.Dispose()
