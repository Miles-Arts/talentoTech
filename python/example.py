import math
import random

# # xc = 3
# # print(f"Hola {xc}")

#input---------------------------------------------------------------

# nombre = input ("Ingrese su nombre: ")
# print(f"Gran gusto tener acá, {nombre}, estás en BackMaria")

# number1 = input("Ingrese el primer número: ")
# number2 = input("Ingrese el segundo número: ")

# number1 = int(number1)
# number2 = int(number2)

# sumaq = number1 + number2

# number2 = input(f"La suma de los números {number1} y {number2} es: {sumaq}")

#Operadores asignación------------------------------------------------
# numero = 1
# suma = 2 + 4
# c = suma + numero * 3
# print("Valor de C es:", c)

# x,y,z = 1, 2, 3
# print("x =", x, "| y =", y,"| z =", z)

# numero = 5
# numero = numero + 1

# print("Valor número:", numero)

# numero += 1
# print("Valor numero:", numero)


#Operadores aritméticos------------------------------------------------
# numero1 = 2
# numero2 = 5
# print("Suma:", numero1 + numero2 )
# print("Resta:", numero1 - numero2 )
# print("Multiplicación:", numero1 * numero2 )
# print("División:", numero1 / numero2 )
# print("Moódulo:", numero1 % numero2 )
# print("División Entera:", numero1 // numero2 )
# print("Potencia:", numero1 ** numero2 )


#Operadores de comparación-------------------------------------------------

# x = "Juanita"
# y = 'n'
# z = 2
# a = 5.8
# b = True

# print(type(x) == str)
# print(type(y) == str)
# print(type(z) == str)
# print(type(a) == float)
# print(type(b) == bool)

# print(1 == 1)
# print(1 != 1)
# print(1 > 2)
# print(2 < 2 )
# print(1 >= 1)
# print(2 <= 3)

#Operadores lógicos----------------------------------------------

# print(True and True)
# print(True and False)
# print(False and True)
# print(False and False)
# print(True or True)
# print(True or False)
# print(False or True)
# print(False or False)
# print(not False)

#Precedencia de operadores------------------------------------------
# numero1 = 2
# numero2 = 5

# print("Resultado:", numero1 * numero2 // 3)
# print("Resultado:", (numero1 * numero2) // 3)
# print("Resultado:", numero1 * (numero2 // 3))

#Librería de matemáticas--------------------------------------------

# help(math)
# math.sqrt(9)
# math.log()


# num = 20
# num23 = 30
# sum = num * num23
# print(math.pi(num)) 


#Librería de random-------------------------------------------------


# random.random()
# numero =((random.random()) * 10) % ( 6 + 1 )
# print("Resultado", numero) 


#Condicionales-------------------------------------------------------
#IF
# edad = 20

# if edad > 18:
#     print(f"Mayor a 18")

#IF ELSE------------------------------------------------------------
#IF es condicion

# edad = input("Ingrese su edad: " )

# edad = int(edad)

# if edad > 18:
#     print("Adulto")    

# else:
#     print("Menor de edad")


#IF elif ELSE----------------------------------------------------
#  IF ENCADENADO
#  IF  sentencia con condicion
#  ELIF  es condicion y sentenciAS
#  ELSE  sentencias 
#

# edad = input("Ingrese su edad: " )
# edad = int(edad)

# if edad < 18:
#     print(f"Es menor de edad tiene: {edad} años.")

# elif edad >= 18 and edad < 60:
#     print(f"Es adulto tiene: {edad} años.")

# else:
#     print(f"Es adulto mayor tiene: {edad} años.")


#If ANIDADO--------------------------------------
#if condicion:
        # if condicion :
        # SENTENCIA
        # else:
        # SENTENCIA
        # else:
        # if condicion :
        # SENTENCIA
        # else:
        # SENTENCIA

edad = input("Ingrese su edad: ")

edad = int(edad)

if edad < 18:
    if edad > 12 and edad < 18:
        print(f"Es adolecente con {edad} años.")
    else:
        print("Está en la niñez") 

else:
    if edad >= 18 and edad < 60:
        print(f"Es adulto tiene {edad} años.")
    else:
        print(f"Es adulto mayor con {edad} años.")    







