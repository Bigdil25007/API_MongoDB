Ce dépôt est un projet d'API web utilisant une base de données mongoDB (NoSQL). Pour le faire fonctionner en local, il faut :
* Récupérer le dépôt
* Modifier le fichier .env pour qu'il correspond au bonne valeur (accès à la base de données, nom de la collection, port pour l'API, clé de cryptage des JWT)
* Pour éviter des problèmes, le fichier original JSON de la base de données est fourni dans le dossier "database"
* Un script JS est aussi fourni pour pouvoir effectuer les requêtes HTTP (testRequest.js)

Les routes ont été configurées pour renvoyer des erreurs en cas de problèmes et la racine du serveur affiche la liste des endpoints disponibles.
