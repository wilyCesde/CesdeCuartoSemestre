valorUno = int(input("Digite el primer valor (1-9): "))
valorDos = int(input("Digite el segundo valor (1-9): "))

if (valorUno == valorDos):
    print(f"El valor uno {valorUno} es igual al valor dos {valorDos}")
elif(valorUno > valorDos):
    print(f"El valor uno {valorUno} es mayor que el valor dos {valorDos}")
elif(valorUno < valorDos):
    print(f"El valor dos {valorDos} es mayor que el valor uno {valorUno}")
else:
    print("Digite valores correctos. DON CHIMBO")