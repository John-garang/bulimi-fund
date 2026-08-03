$contactFile = 'C:\Bulimi Fund\website\contact\index.html'
$content = [System.IO.File]::ReadAllText($contactFile, [System.Text.Encoding]::UTF8)
$content = $content.Replace('footer-bottom"><span>' + [char]0xC2 + [char]0xA9, 'footer-bottom"><span>' + [char]0xA9)
$content = $content.Replace('>Ac 2026 Bulimi', '>' + [char]0xA9 + ' 2026 Bulimi')
[System.IO.File]::WriteAllText($contactFile, $content, [System.Text.Encoding]::UTF8)

$sitemapFile = 'C:\Bulimi Fund\website\sitemap.xml'
$sitemap = [System.IO.File]::ReadAllText($sitemapFile, [System.Text.Encoding]::UTF8)
$sitemap = $sitemap.Replace('2026-08-03', '2025-07-14')
[System.IO.File]::WriteAllText($sitemapFile, $sitemap, [System.Text.Encoding]::UTF8)

Write-Host 'Done'
