import requests
from  bs4 import BeautifulSoup
import openpyxl

workbook = openpyxl.Workbook()

hoja_activa = workbook.active



# website = 'https://co.mileroticos.com/escorts/boyaca/tunja/'

url = requests.get('https://co')

soup = BeautifulSoup(url.content, 'html.parser' )


nombre = []

elementos_a = soup.find_all('div', class_='info-container country-co')

for elemento_h2 in elementos_a:
    elemento_a = elemento_h2.find('p')
    if elemento_a:
        nombre.append(elemento_a.text.strip())

# todo_junto = [(nombre[i]) for i in range(len(nombre))]
# for producto in todo_junto:
#     print(producto)

# for i in range(len(nombre)):
#     hoja_activa.cell(row=i+1, column=1, value=nombre[i])

#     workbook.save("nombre.xlsx")

print("Holaas")