import socket

hostname = socket.gethostname()
ip = socket.gethostbyname(hostname)

print(f"La ip del ordenador {hostname} es: {ip}")