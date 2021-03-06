# Programan

## 1.- Agregar ítem
Agrega un nuevo ítem al menú de navegación desde Javascript.
![imagen](https://user-images.githubusercontent.com/16826246/111795762-1b04d580-888d-11eb-84a2-444ce5da4324.png)

## 2.- Agregar negrita
Agrega una negrita a una sola palabra dentro de tu párrafo
![imagen](https://user-images.githubusercontent.com/16826246/111795916-42f43900-888d-11eb-86eb-046efed2dfa7.png)

## 3.- Cambiar imagen
Luego de 10 segundos cambia la imagen. Intercala entre al menos 2 imágenes diferentes.
![imagen](https://user-images.githubusercontent.com/16826246/111796085-71721400-888d-11eb-9811-85bb72dc3f77.png)

## 4.- Invertir el orden
Invierte el orden de estas dos tarjetas.
![imagen](https://user-images.githubusercontent.com/16826246/111797601-eabe3680-888e-11eb-98dd-2361f9b0bf01.png)

# Pasos para crear un branch y pull request para revisión de su código
Crea una rama de main, el nombre de su rama debe tener la siguiente estructura:
pro_nombre_apellidoPaterno_appelidoMaterno
ejemplo: pro_angel_perez_perez

Crea un directorio cuyo nombre debe tener la siguiente estructura:  
nombre_apellidoPaterno_appelidoMaterno  
ejemplo: angel_perez_perez  

Dentro de este directorio cargar el o los archivos de la solución al challengue.

Ejemplo de comandos de git en consola
```
cd 25_DOM_local_storage
git checkout main
git checkout -b pro_ange_perez_perez
mkdir angel_perez_perez
cd angel_perez_perez
touch script.js
git add *
git commit -m "Solución challenge"
git push origin pro_ange_perez_perez
```

Una vez agregada la solución a su branch lo que sigue es crear un **pull request (PR)**, para ello
realizamos los siguientes pasos:

- Actualizar su rama de trabajo con los ultimos cambios de main (antes master)
```
git checkout main
git pull origin main
git checkout pro_ange_perez_perez
git merge main
```

- En la pagína de su branch hacemos clic en el texto **pull request** 
![imagen](https://user-images.githubusercontent.com/16826246/109855157-91fb6680-7c1d-11eb-9b9e-88c387afeec4.png)

- Capturar la información requerida
![imagen](https://user-images.githubusercontent.com/16826246/109855968-8eb4aa80-7c1e-11eb-969a-f05cae892423.png)

donde:
1. La rama (**branch**) a la cual se unificaran (**merge**) los cambios de su rama
2. Su rama en la que estan trabajando
3. Las personas que revisaran su código (**reviewers**), aquí agregan mi usuario **cyberhavok** y si gustan agregar
  a otras personas adelante.
4. Título del PR
5. Comentarios relacionados con el PR
6. Finalmente crean el pull request (**Create pull request**)
