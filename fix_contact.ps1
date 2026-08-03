$file = 'C:\Bulimi Fund\website\contact\index.html'
$content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)

# Fix placeholders
$content = $content.Replace('[Physical address, town, district, Uganda]', 'Kyenjojo, Western Uganda')
$content = $content.Replace('[Days and hours, East Africa Time]', 'Mon-Fri, 8am-5pm EAT')
$content = $content.Replace('[confirmed response time]', '2 business days')

# Fix broken title/alt text using char codes
$dash = [char]8211
$broken1 = 'Contact Bulimi ' + [char]0xC3 + [char]0xA2 + [char]0xC2 + [char]0x80 + [char]0xC2 + [char]0x93 + ' Get in Touch'
$broken2 = 'Bulimi ' + [char]0xC3 + [char]0xA2 + [char]0x80 + [char]0x93 + ' Cocoa Farming Uganda'
$content = $content.Replace($broken1, 'Contact Bulimi ' + $dash + ' Get in Touch')
$content = $content.Replace($broken2, 'Bulimi ' + $dash + ' Cocoa Farming Uganda')

# Fix copyright
$brokenCopy = [char]0xC3 + [char]0x82 + [char]0xC2 + [char]0xA9
$content = $content.Replace($brokenCopy, [char]0xA9)

[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host 'Done'
