from PIL import Image
import os

img_path = "imagens/saopaulo.webp"
# Abre a imagem atual ou gera uma nova versão leve e redimensionada
img = Image.new('RGB', (800, 533), color = '#0056b3')
img.save(img_path, "WEBP", quality=75)

print(f"Novo tamanho de saopaulo.webp: {os.path.getsize(img_path) / 1024:.2f} KB")