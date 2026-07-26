import urllib.request
import urllib.parse
import re
import xml.etree.ElementTree as ET

print("==========================================================")
print("FETCHING LIVE PUBLIC DATA FOR ZEPTO")
print("==========================================================\n")

# Search Play Store for Zepto package
search_url = "https://play.google.com/store/search?q=Zepto&c=apps&hl=en_IN"
req_search = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

try:
    with urllib.request.urlopen(req_search) as response:
        html = response.read().decode('utf-8')
        pkg_matches = re.findall(r'href=\"/store/apps/details\?id=([^\"]+)\"', html)
        if pkg_matches:
            real_pkg = pkg_matches[0]
            print(f"[1] Google Play Store: Found real Zepto Package ID -> {real_pkg}")
            
            pkg_url = f"https://play.google.com/store/apps/details?id={real_pkg}&hl=en_IN"
            req_pkg = urllib.request.Request(pkg_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            with urllib.request.urlopen(req_pkg) as pkg_resp:
                pkg_html = pkg_resp.read().decode('utf-8')
                print(f"    Successfully loaded Zepto store page ({len(pkg_html):,} bytes)")
                
                reviews = re.findall(r'\"([A-Z][^\"]{30,120}?(?:zepto|delivery|groceries|service|app)[^\"]{10,80}?)\"', pkg_html)
                print(f"    Found {len(reviews)} raw review snippets:")
                for idx, r in enumerate(list(set(reviews))[:5], 1):
                    print(f"    {idx}. \"{r.strip()}\"")
except Exception as e:
    print("    Play Store Scraping Error:", e)

print("\n" + "-"*58 + "\n")

# 2. Fetch Reddit Discussions for Zepto from r/india
reddit_url = "https://www.reddit.com/r/india/search.rss?q=zepto&restrict_sr=1&sort=relevance"
req_reddit = urllib.request.Request(reddit_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

try:
    with urllib.request.urlopen(req_reddit) as response:
        xml_data = response.read().decode('utf-8')
        print(f"[2] Reddit r/india: Successfully fetched RSS feed for query 'Zepto'")
        
        root = ET.fromstring(xml_data)
        entries = root.findall('{http://www.w3.org/2005/Atom}entry')
        print(f"    Found {len(entries)} live Reddit threads discussing Zepto in India:")
        for idx, entry in enumerate(entries[:5], 1):
            title = entry.find('{http://www.w3.org/2005/Atom}title').text
            link = entry.find('{http://www.w3.org/2005/Atom}link').get('href')
            print(f"    {idx}. Title: \"{title}\"")
            print(f"       Link: {link}")
except Exception as e:
    print("    Reddit Scraping Error:", e)

print("\n==========================================================")
