# Challenge

Te proponemos el siguiente desaf铆o, 驴te animas?

馃摑 Toma cualquier desarrollo que hayas hecho hasta el momento y modifica alg煤n elemento a trav茅s del DOM.En el pr贸ximo encuentro nos contar谩s qu茅 modificaci贸n realizaste.

馃摑 隆No olvides traer maquetado el wireframe que te mostramos en clase!

# Pasos para crear un branch y pull request para revisi贸n de su c贸digo

Crea una rama de master, el nombre de su rama debe tener la siguiente estructura:
ch_nombre_apellidoPaterno_appelidoMaterno
ejemplo: ch_angel_perez_perez

Crea un directorio cuyo nombre debe tener la siguiente estructura:  
nombre_apellidoPaterno_appelidoMaterno  
ejemplo: angel_perez_perez  

Dentro de este directorio cargar el o los archivos de la soluci贸n al challengue.

Ejemplo de comandos de git en consola
```
cd 25_DOM_local_storage
git checkout main
git checkout -b ch_ange_perez_perez
mkdir angel_perez_perez
cd angel_perez_perez
touch script.js
git add *
git commit -m "Soluci贸n challenge"
git push origin ch_ange_perez_perez
```

Una vez agregada la soluci贸n a su branch lo que sigue es crear un **pull request (PR)**, para ello
realizamos los siguientes pasos:

- Actualizar su rama de trabajo con los ultimos cambios de main (antes master)
```
git checkout main
git pull origin main
git checkout ch_ange_perez_perez
git merge main
```

- En la pag铆na de su branch hacemos clic en el texto **pull request** 
![imagen](https://user-images.githubusercontent.com/16826246/109855157-91fb6680-7c1d-11eb-9b9e-88c387afeec4.png)

- Capturar la informaci贸n requerida
![imagen](https://user-images.githubusercontent.com/16826246/109855968-8eb4aa80-7c1e-11eb-969a-f05cae892423.png)

donde:
1. La rama (**branch**) a la cual se unificaran (**merge**) los cambios de su rama
2. Su rama en la que estan trabajando
3. Las personas que revisaran su c贸digo (**reviewers**), aqu铆 agregan mi usuario **cyberhavok** y si gustan agregar
  a otras personas adelante.
4. T铆tulo del PR
5. Comentarios relacionados con el PR
6. Finalmente crean el pull request (**Create pull request**)
