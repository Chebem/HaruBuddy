from firecrawl import FirecrawlApp
from dotenv import load_dotenv
import os

load_dotenv()

app = FirecrawlApp(api_key="FIRECRAWL_API_KEY")
load_dotenv()

results = app.scrape_url(
    url="https://docs.firecrawl.dev",
    formats= ['markdown', 'html']
)


print(results)
