import random
import uuid

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

# import uuid

# def generar_id_producto():

#     idLargo = str(uuid.uuid4())
#     idCorto = idLargo[:8]
#     return idCorto

# id_producto = generar_id_producto()

# print("-----------TU VECINO-------------")
# nombreProducto = input("Ingrese un producto: ")
# valor = int(input("Ingrese valor producto: "))
# print("")
# iva = 0.19  
# productoIva = valor * iva

# productoConIva = productoIva + valor

# print("---------FACTURA-----------")
# print("")
# print(f"Código del producto: {id_producto}" )
# print(f"Nombre del producto: {nombreProducto.upper()}")
# print("")
# print(f"Valor producto sin IVA: ${valor}")
# print(f"Valor total:  ${productoConIva} IVA del 19%") 
           
#print(f"Total compra ${productoConIva}")


codigoProducto = input("Ingrese el código: ")
nombreProducto = input("Ingrese el nombre: ")
cantidad = float(input("Ingrese la cantidad: "))
valorUnitario = float(input("Ingrese el valor unitario: "))

valorProducto = cantidad * valorUnitario
iva = valorProducto * 0.19
valorFinal = valorProducto + iva

print(f"Codigo:  {codigoProducto}")
print(f"Nombre:  {nombreProducto}")
print(f"Valor Producto:  {valorProducto}")
print(f"Valor Final:  {valorFinal}")

