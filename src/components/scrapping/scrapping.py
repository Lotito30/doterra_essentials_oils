import requests
from bs4 import BeautifulSoup
import json
import re

def get_product_description(product_url):
    response = requests.get(product_url)
    soup = BeautifulSoup(response.content, 'html.parser')
    product_description = soup.find('p').text.strip() if soup.find('p') else "No description available"
    return product_description

def get_product_data(soup):
    products_data = []
    product_list = soup.find_all('div', class_='grid-item grid-product')

    for product in product_list:
        product_name = product.find('a', class_='title').text.strip()
        product_price = product.find('div', class_='item-price-retail').text.strip()

        product_image_style = product.find('a', class_='prod-image')['style']
        product_image_url = re.search(r'url\((.*?)\)', product_image_style).group(1).strip('\'"')

        product_page_url = 'https://www.doterra.com' + product.find('a', class_='prod-image')['href']
        product_description = get_product_description(product_page_url)
        
        products_data.append({
            'name': product_name,
            'price': product_price,
            'image': product_image_url,
            'description': product_description
        })

    return products_data

def get_next_page(soup):
    # Encontrar el enlace a la siguiente página basado en el número de página
    current_page_num = soup.find('a', {'aria-label': re.compile(r"Página\d+- Actual")})
    if current_page_num:
        next_page_num = int(current_page_num.text) + 1
        next_page_link = soup.find('a', text=str(next_page_num))
        if next_page_link:
            return next_page_link.get('href')
    return None

base_url = "https://www.doterra.com"
start_url = "https://www.doterra.com/US/es/pl/all-products"

all_products = []
current_url = start_url
page = 1
while current_url:
    response = requests.get(current_url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    page_products = get_product_data(soup)
    all_products.extend(page_products)
    
    next_page_url = f"/US/es/pl/all-products?q=%3Aname-asc%3Aproductgroup%3Aretailproduct%3Aproductgroup%3Aonlinevisibleproductgroup%3AlrpEligibility%3ALRPONLY%3AlrpEligibility%3ASTANDARDONLY%3AlrpEligibility%3ALRPANDSTANDARDONLY&page={page}&sort=name-asc"
    if page < 5:
        current_url = base_url + next_page_url
    else:
        current_url = None
    page += 1    
with open('products.json', 'w', encoding='utf-8') as f:
    json.dump(all_products, f, ensure_ascii=False, indent=4)

print("Datos de los productos guardados en products.json")

# Contar el número total de productos
num_products = len(all_products)
print(f"Número total de productos: {num_products}")
print(f"Productos: {all_products}")
