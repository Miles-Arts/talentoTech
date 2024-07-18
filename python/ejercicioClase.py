import math
import random

"""VENTA DE PRODUCTO"""
#Código de Producto
#Nombre Product
#Cantidad Comprada
#Valor unitario (sin IVA)

"""Calcular valor del producto. por valor unitario"""
"""Valor del IVA y valor final del producto"""
"""Valor final valor producto más IVA"""

"""INFORMACIÓN DE SALIDA"""
#Código de producto
#Nombre Producto
#Valor Producto sin IVA
#Valor producto con IVA

# print("hola")
# def generar_numeros_secuenciales():
#     productos = []
#     contador = 1
    

#     while True:
nombreProducto = input("Ingrese un producto: ")
valor = int(input("Ingrese valor producto: "))
            #terminar = input("Al terminar ingrese 's'")

    # if nombreProducto.lower() == 's':
    #     break    

iva = 0.19  
productoIva = valor * iva

productoConIva = productoIva + valor

            # total = 0#valor + productoConIva

print("")
print(f"Iva del 19%")
print(f"Producto unitario sin iva: ${valor}")
print("")
print(f"El nombre producto: {nombreProducto.upper()}.")
print(f"Producto con iva:  ${productoConIva}") 
           # print(f"Valor total compra con Iva ${total}")
print("")

            # productos.append((contador, nombreProducto))
            # contador += 1
            # print(productos)


    # return productos
# Uso de la función
# productos_con_numeros = generar_numeros_secuenciales
    

# # Mostrar los productos con sus números
# for contador an nombreProducto:
#     print(f"Número: {contador}, Producto: {nombreProducto}")

