# POS Cash Drawer Button for Odoo

## Vue d'ensemble
Ce module ajoute un bouton "Ouvrir le tiroir-caisse" dans l'interface du Point de Vente (POS) d'Odoo.

## 🔄 Fonctionnement technique

```
+--------------------------+     +--------------------------+
|                          |     |                          |
|  Interface POS Odoo      |     |   Webservice             |
|                          |     |   (Port 22548)           |
|  +-----------------+     |     |                          |
|  |  Ajout Bouton   |     |     |                          |
|  |  Tiroir-caisse  |     |     |                          |
|  +-----------------+     |     |                          |
|         |                |     |                          |
|         |                |     |                          |
|         ↓                |     |                          |
|  +-----------------+     |     |                          |
|  | Clic & Popup de |     |     |                          |
|  |  Confirmation   |     |     |                          |
|  +-----------------+     |     |                          |
|         |                |     |                          |
|         |                |     |                          |
|         ↓                |     |                          |
|  +-----------------+     |     |  +-----------------+     |
|  | Requête HTTP    |  -----------→| Gestion des     |     |
|  | GET             |     |     |  | commandes       |     |
|  +-----------------+     |     |  +-----------------+     |
|                          |     |         |                |
|                          |     |         |                |
|                          |     |         ↓                |
|                          |     |  +-----------------+     |
|                          |     |  | Communication   |     |
|                          |     |  | avec le tiroir  |     |
|                          |     |  +-----------------+     |
|                          |     |         |                |
|                          |     |         |                |
|                          |     |         ↓                |
|                          |     |  +-----------------+     |
|                          |     |  |  Tiroir-caisse  |     |
|                          |     |  |  physique       |     |
|                          |     |  +-----------------+     |
+--------------------------+     +--------------------------+
```

### Explication du flux

1. **Déclenchement** : L'utilisateur clique sur le bouton "Ouvrir le tiroir-caisse" dans l'interface POS d'Odoo.

2. **Confirmation** : Une popup de confirmation s'affiche pour éviter les ouvertures accidentelles.

3. **Communication** : Après confirmation, le module envoie une requête HTTP GET vers le webservice local (port 22548).

4. **Traitement** : Le webservice client reçoit la requête et la traite :
   - Vérifie la validité de la demande
   - Prépare la commande pour le tiroir-caisse

5. **Action physique** : Le webservice envoie le signal approprié au tiroir-caisse qui s'ouvre mécaniquement.

### Sécurité et fiabilité

- Communication locale sécurisée (localhost)
- Système de confirmation pour éviter les erreurs
- Gestion des erreurs avec feedback utilisateur
- Mode no-cors pour la compatibilité navigateur

## 🌟 Fonctionnalités
- Ajout d'un bouton intuitif pour ouvrir le tiroir-caisse directement depuis l'interface POS
- Popup de confirmation avant l'ouverture du tiroir-caisse pour éviter les clics accidentels
- Interface utilisateur moderne et responsive
- Compatible avec les dernières versions d'Odoo (17.0)

## 📋 Prérequis
Ce module nécessite un service web client pour gérer le matériel du tiroir-caisse POS :

- [Odoo Cashdrawer Webservice](https://github.com/ralphi2811/odoo_cashdrawer_webservice)

Le webservice est développé et maintenu par [Raphaël Auberlet](https://github.com/ralphi2811).

## 🚀 Installation

1. Téléchargez le module et ajoutez-le à votre dossier d'addons Odoo
2. Redémarrez le serveur Odoo
3. Accédez à Apps dans l'interface web d'Odoo
4. Recherchez "POS Cash Drawer Button" et cliquez sur Installer

## ⚙️ Configuration

1. Assurez-vous que votre tiroir-caisse est correctement connecté à votre système
2. Installez et configurez le webservice selon les instructions fournies dans son dépôt
3. Redémarrez votre session POS pour que les changements prennent effet

## 💡 Utilisation

1. Ouvrez votre Point de Vente Odoo
2. Le bouton "Ouvrir le tiroir-caisse" apparaîtra dans l'interface
3. Cliquez sur le bouton pour ouvrir le tiroir-caisse
4. Confirmez l'action dans la fenêtre popup

## 🔧 Dépendances
Ce module dépend des modules Odoo suivants :
- `base`
- `point_of_sale`

## 📝 License
Ce module est sous licence LGPL-3.

## 👨‍💻 Auteur et Maintenance
Ce module est maintenu par [Raphaël Auberlet](https://github.com/ralphi2811).

### Contributions et Support
- GitHub: [odoo_pos_cashdrawer_button](https://github.com/ralphi2811/odoo_pos_cashdrawer_button)
- Pour les problèmes et suggestions, veuillez créer une issue sur GitHub

## 🔄 Versions
- Compatible avec Odoo 17.0
- Version actuelle : 17.0.1.0.0

---
Développé avec ❤️ pour la communauté Odoo
