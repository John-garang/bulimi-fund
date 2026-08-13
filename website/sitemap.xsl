<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  exclude-result-prefixes="sm image">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Sitemap – Bulimi</title>
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f5f0e8;color:#1a2e1a;min-height:100vh}
          header{background:#1a2e1a;padding:1.25rem 2rem;display:flex;align-items:center;gap:1rem}
          header img{height:40px}
          header span{color:#c8a84b;font-size:.85rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-left:.5rem}
          .container{max-width:960px;margin:0 auto;padding:2.5rem 1.5rem}
          h1{font-size:1.6rem;color:#1a2e1a;margin-bottom:.4rem}
          .subtitle{color:#6b7c6b;font-size:.9rem;margin-bottom:2rem}
          .subtitle a{color:#1a2e1a;font-weight:600;text-decoration:none}
          .subtitle a:hover{text-decoration:underline}
          table{width:100%;border-collapse:collapse;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.07)}
          thead tr{background:#1a2e1a;color:#fff}
          thead th{padding:.85rem 1.1rem;text-align:left;font-size:.8rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase}
          tbody tr{border-bottom:1px solid #eee;transition:background .15s}
          tbody tr:last-child{border-bottom:none}
          tbody tr:hover{background:#f9f5ed}
          td{padding:.85rem 1.1rem;font-size:.88rem;vertical-align:middle}
          td a{color:#1a2e1a;text-decoration:none;font-weight:500}
          td a:hover{color:#c8a84b;text-decoration:underline}
          .badge{display:inline-block;padding:.2rem .6rem;border-radius:20px;font-size:.75rem;font-weight:600}
          .badge-weekly{background:#e8f5e9;color:#2e7d32}
          .badge-monthly{background:#e3f2fd;color:#1565c0}
          .badge-yearly{background:#fce4ec;color:#880e4f}
          .priority-bar{display:flex;align-items:center;gap:.5rem}
          .bar-bg{background:#e8e8e8;border-radius:4px;height:6px;width:60px;overflow:hidden}
          .bar-fill{background:#c8a84b;height:6px;border-radius:4px}
          .count{color:#6b7c6b;font-size:.8rem}
          footer-note{display:block;margin-top:2rem;color:#6b7c6b;font-size:.8rem;text-align:center}
        </style>
      </head>
      <body>
        <header>
          <img src="/assets/logos/logo-landscape.png" alt="Bulimi"/>
          <span>Sitemap</span>
        </header>
        <div class="container">
          <h1>XML Sitemap</h1>
          <p class="subtitle">
            <xsl:value-of select="count(sm:urlset/sm:url)"/> URLs indexed &#8212;
            <a href="https://bulimifund.com/">bulimifund.com</a>
          </p>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Last Modified</th>
                <th>Change Frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sm:urlset/sm:url">
                <xsl:sort select="sm:priority" order="descending" data-type="number"/>
                <tr>
                  <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                  <td><xsl:value-of select="sm:lastmod"/></td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="sm:changefreq='weekly'"><span class="badge badge-weekly">weekly</span></xsl:when>
                      <xsl:when test="sm:changefreq='monthly'"><span class="badge badge-monthly">monthly</span></xsl:when>
                      <xsl:when test="sm:changefreq='yearly'"><span class="badge badge-yearly">yearly</span></xsl:when>
                      <xsl:otherwise><xsl:value-of select="sm:changefreq"/></xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td>
                    <div class="priority-bar">
                      <div class="bar-bg">
                        <div class="bar-fill">
                          <xsl:attribute name="style">width:<xsl:value-of select="sm:priority * 100"/>%</xsl:attribute>
                        </div>
                      </div>
                      <span class="count"><xsl:value-of select="sm:priority"/></span>
                    </div>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <footer-note>Generated for <a href="https://bulimifund.com">bulimifund.com</a> &#8212; submitted to Google Search Console</footer-note>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
