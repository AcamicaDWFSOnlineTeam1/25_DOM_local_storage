# Programan

## 1.- Genera un array con 10 posiciones numéricas.

Toma de manera aleatoria 3 elementos.
Lanza 3 fetch al mismo Endpoint de Pokemon y muestra solamente la primera respuesta.

## 2.- Cambia uno de los elementos de tu array a un valor tipo string.

Repite el proceso: toma de manera aleatoria 3 elementos.
Lanza 3 fetch al mismo Endpoint de Pokemon y muestra los siguientes resultados:
- Si los 3 request finalizaron correctamente, muestra los resultados por pantalla.
- Si algún request falló (te tocó el valor string en la elección aleatoria), muestra un error por pantalla.



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
