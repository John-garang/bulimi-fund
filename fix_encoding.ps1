$file = 'C:\Bulimi Fund\website\contact\index.html'
$bytes = [System.IO.File]::ReadAllBytes($file)
$content = [System.Text.Encoding]::UTF8.GetString($bytes)

# Replace all variants of the corrupted em-dash before known phrases
$content = [System.Text.RegularExpressions.Regex]::Replace($content, 'Contact Bulimi [^\w\s]+ Get in Touch', 'Contact Bulimi – Get in Touch')
$content = [System.Text.RegularExpressions.Regex]::Replace($content, 'Bulimi [^\w\s]+ Cocoa Farming Uganda', 'Bulimi – Cocoa Farming Uganda')

# Fix corrupted copyright symbol variants
$content = [System.Text.RegularExpressions.Regex]::Replace($content, '<span>[^\w\s]+ 2026 Bulimi', '<span>© 2026 Bulimi')

[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host 'Done'
