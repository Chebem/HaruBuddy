from firecrawl import FirecrawlApp
from dotenv import load_dotenv
import os

load_dotenv()

app = FirecrawlApp(api_key="FIRECRAWL_API_KEY")


schema = {
    "type": "object",
    "properties": {"description": {"type": "string"}},
    "required": ["description"],
}

res = app.extract(
    urls=[""],
    prompt="Extract the page description",
    schema=schema,
)

print(res.data["description"])
