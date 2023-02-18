# Juan tiene N cantidad de pesos
# , Camila tiene la mitad de lo que posee Juan
#  y Ricardo tiene la mitad de lo que poseen Camila y Juan Juntos.
#  ¿Puede PYTHON ayudarme a calcular la cantidad de dinero de los 3?

juan = int(input("Digite la cantidad de dinero que tiene Juan: "))
camila = int(juan/2)
ricardo = int((juan + camila) / 2)
print(f"Si puede. Juan tiene: {juan}, Camila tiene: {camila}, Ricardo tiene: {ricardo}. La suma total es: {int(juan + camila + ricardo)}")