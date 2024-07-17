import requests 
from bs4 import BeautifulSoup

url = 'https://listado.mercadolibre.com.co/tenis'

response = requests.get(url)

if response.status_code == 200:

    soup = BeautifulSoup(response.text, 'html.parser')
    productos = soup.find_all('div', class_='andes-card andes-card--flat andes-card--padding-16')
    print(len(productos))

    print("Obtuvimos la pagina")
else:
    print("Error al cargar la web, código:", response.status_code)






