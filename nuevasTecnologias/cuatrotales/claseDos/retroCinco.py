salarioBase = 3500000
comision = 1500000

ventasRealizadas = int(input("¿Cuantas comisiones vendio? "))

salarioMensual = salarioBase + (comision * ventasRealizadas)
deducciones = salarioMensual / 0.5

total = salarioMensual - deducciones

print(f'El salario mensual para el empleado que vendio: {ventasRealizadas} de licencias es: {total}')