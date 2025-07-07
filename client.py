from requests import get

try:
    url = "http://localhost:9000/"
    res = get(url)
    print("Status:", res.status_code)
    data = res.json()
    print("Random Message:", data)
except Exception as e:
    print("Issue:", e)
