print(" Python environment is working correctly!")

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://www.hikorea.go.kr/")

print("✅ Page title:", driver.title)
driver.quit()