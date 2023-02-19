salarioBase = 3500000
comision = 1500000

ventasRealizadas = int(input("¿Cuantas comisiones vendio? "))

salarioMensual = salarioBase + (comision * ventasRealizadas)

print(f'El salario mensual para el empleado que vendio: {ventasRealizadas} de licencias es: {salarioMensual}')