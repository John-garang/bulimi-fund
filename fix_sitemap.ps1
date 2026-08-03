$file = 'C:\Bulimi Fund\website\sitemap.xml'
$content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
$content = $content.Replace('2026-08-03', '2025-07-14')
[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host 'sitemap.xml updated'
