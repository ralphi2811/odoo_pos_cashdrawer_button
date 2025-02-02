{
    'name': "Odoo POS Ouverture Tiroir-Caisse",
    'summary': """
        Ajoute un bouton pour ouvrir le tiroir-caisse dans le point de vente (POS). """,
    'description': """
         Ouvrez le tiroir-caisse dans le Point de vente Odoo à l'aide d'un bouton. 
    """,
    'author': "Raphaël Auberlet",
    'website': "https://github.com/ralphi2811/odoo_pos_cashdrawer_button",
    'maintainer': "Raphaël Auberlet",
    'category': 'Point of Sale',
    'version': '17.0.1.0.0',
    'depends': ['base', 'point_of_sale'],
    'assets': {
        'point_of_sale.assets': [
            'pos_open_cashdrawer/static/src/js/open_drawer.js',
            'pos_open_cashdrawer/static/src/xml/drawer_button.xml',
            'pos_open_cashdrawer/static/src/css/style.css',
        ],
    },
    'images': ['static/img/cashdrawer.jpg'],
    'license': 'LGPL-3',
    'installable': True,
    'auto_install': False,
    'application': False,
}