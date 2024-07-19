#Condicionales----------------------------------------------------
# IF


# edad = 20

# if edad > 18:
#     print(f"Mayor a 18")

# print("fin")    


    #IF ELSE---------------------------------------------------------
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

#IF
edad = 20

if edad < 18:
    print(f"Menor a 18")
    print(f"tiene {edad} años.")

elif edad > 18 and edad <= 60:
    print(f"Es Adulto")
    print(f"tiene {edad} años.")

else:
    print(f"Mayor de edad")
    print(f"tiene {edad} años.")

print("fin")    















