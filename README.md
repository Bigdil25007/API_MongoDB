Ce dépôt est un projet d'API web utilisant une base de données mongoDB (NoSQL). Pour le faire fonctionner en local, il faut :
* Récupérer le dépôt
* Modifier le fichier .env pour qu'il correspond au bonne valeur (accès à la base de données, nom de la collection, port pour l'API, clé de cryptage des JWT)
* Pour éviter des problèmes, le fichier original JSON de la base de données est fourni dans le dossier "database"
* Un script JS est aussi fourni pour pouvoir effectuer les requêtes HTTP (testRequest.js)

Pour ce script JS, il est à noter que pour le faire fonctionner il suffit de modifier la méthode la requête HTTP (GET/PUT/DELETE/POST), le contenu du corps et l'adresse URL. La récupération et la sauvegarde du JWT en fonction de la requête est automatisée.

Les routes ont été configurées pour renvoyer des erreurs en cas de problèmes et la racine du serveur affiche la liste des endpoints disponibles.
