# reto numero uno: recibir numero y determinar multiplo de 5
print("Digite en numero para determinar si es multiplo de 5")
print("")
numero = int(input("Digite el numero que a determinar: "))
result = numero % 5
if (result == 0):
    print(f'El numero {numero} si es multiplo de 5')
else:
    print(f'El numero {numero} no es multiplo de 5')