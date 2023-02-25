import requests

url_stream = 'https://readthedocs.org/projects/python-guide/downloads/pdf/latest/'
my_stream_file = requests.get(url_stream, stream=True)
ruta = input("Escriba el nombre de usuario de su pc: ")
path = '/home/JuaneFe/Descargas/python_guide_stream.pdf'

with open(path, 'wb') as f:
    for ch in my_stream_file:
        f.write(ch)