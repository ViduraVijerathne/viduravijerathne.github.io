import re

def html_to_jsx(html):
    # Very basic regex based conversion for this specific file
    # Replace class= with className=
    jsx = html.replace('class="', 'className="')
    # Replace for= with htmlFor=
    jsx = jsx.replace('for="', 'htmlFor="')
    # Self closing tags
    jsx = re.sub(r'<img([^>]+)>', r'<img\1 />', jsx)
    jsx = re.sub(r'<input([^>]+)>', r'<input\1 />', jsx)
    jsx = re.sub(r'<br>', r'<br />', jsx)
    jsx = re.sub(r'<hr>', r'<hr />', jsx)
    # Styles - very crude, we only have one or two inline styles in index.html
    # style="opacity: 0; transform: scale(0.9);"
    jsx = jsx.replace('style="opacity: 0; transform: scale(0.9);"', 'style={{ opacity: 0, transform: "scale(0.9)" }}')
    jsx = jsx.replace('style="text-align: center; margin-bottom: 24px;"', 'style={{ textAlign: "center", marginBottom: "24px" }}')
    jsx = jsx.replace('style="max-width: 540px; color: rgba(255,255,255,0.7); font-size: 17px;"', 'style={{ maxWidth: "540px", color: "rgba(255,255,255,0.7)", fontSize: "17px" }}')
    jsx = jsx.replace('style="display: flex; gap: 20px;"', 'style={{ display: "flex", gap: "20px" }}')
    jsx = jsx.replace('style="color: rgba(255,255,255,0.6);"', 'style={{ color: "rgba(255,255,255,0.6)" }}')

    # SVG tags to camelCase where necessary
    jsx = jsx.replace('stroke-width', 'strokeWidth')
    jsx = jsx.replace('stroke-dasharray', 'strokeDasharray')
    jsx = jsx.replace('stroke-linecap', 'strokeLinecap')
    jsx = jsx.replace('stroke-linejoin', 'strokeLinejoin')
    jsx = jsx.replace('viewBox', 'viewBox') # already camel
    jsx = jsx.replace('fill-rule', 'fillRule')
    jsx = jsx.replace('clip-rule', 'clipRule')
    jsx = jsx.replace('crossOrigin', 'crossOrigin') # from my layout.tsx
    
    # Comments
    jsx = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', jsx, flags=re.DOTALL)
    
    # Inline onclick
    jsx = jsx.replace('onclick="openContactModal(event)"', 'onClick={(e) => { e.preventDefault(); document.getElementById("contactModal").classList.add("active"); document.body.style.overflow = "hidden"; }}')
    jsx = jsx.replace('onclick="closeContactModal(event)"', 'onClick={(e) => { e.preventDefault(); document.getElementById("contactModal").classList.remove("active"); document.body.style.overflow = ""; }}')
    jsx = jsx.replace('onclick="event.stopPropagation()"', 'onClick={(e) => e.stopPropagation()}')

    return jsx

with open('../_old_portfolio/index.html', 'r') as f:
    content = f.read()

# Extract body
body_match = re.search(r'<body>(.*?)<script', content, re.DOTALL)
if body_match:
    body_content = body_match.group(1)
    jsx_content = html_to_jsx(body_content)
    
    final_output = f"""
"use client";

import {{ useEffect }} from 'react';
import Script from 'next/script';

export default function Home() {{
  return (
    <>
      {{/* GSAP CDNs */}}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="beforeInteractive" />
      
      {{/* Our local animation script */}}
      <Script src="/script.js" strategy="lazyOnload" />

      {jsx_content}
    </>
  );
}}
"""
    with open('src/app/page.tsx', 'w') as f_out:
        f_out.write(final_output)
    print("Successfully converted index.html to page.tsx")
else:
    print("Could not find body in index.html")
