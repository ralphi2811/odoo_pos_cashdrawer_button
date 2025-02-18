odoo.define('pos_open_cashdrawer.OpenDrawer', function (require) {
    'use strict';
    const { Gui } = require('point_of_sale.Gui');
    const PosComponent = require('point_of_sale.PosComponent');
    const { identifyError } = require('point_of_sale.utils');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const { useListener } = require("@web/core/utils/hooks");
    const Registries = require('point_of_sale.Registries');
    const PaymentScreen = require('point_of_sale.PaymentScreen');

    class OpenCashDrawer extends PosComponent {
        setup() {
            super.setup();
            useListener('click', this.onClick);
        }

        async onClick() {
            const { confirmed } = await this.showPopup("ConfirmPopup", {
                title: this.env._t('Ouvrir le tiroir-caisse ?'),
                body: this.env._t('Voulez-vous ouvrir le tiroir-caisse ?'),
            });

            if (confirmed) {
                this.sendGetRequest();
            }
        }

        async sendGetRequest() {
            const url = 'http://localhost:22548/open-cash-drawer';

            try {
                const requestOptions = {
                    method: 'GET',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };

                const response = await fetch(url, requestOptions);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}`);
                }
                
                const data = await response.json();
                console.log('Tiroir-caisse ouvert avec succès:', data);
            } catch (error) {
                console.error('Erreur:', error);
                await this.showPopup('ErrorPopup', {
                    title: this.env._t('Erreur'),
                    body: this.env._t('Impossible d\'ouvrir le tiroir-caisse. Veuillez vérifier la connexion au service.'),
                });
            }
        }
    }

    OpenCashDrawer.template = 'OpenCashDrawer';
    ProductScreen.addControlButton({
        component: OpenCashDrawer,
        condition: function () {
            return this.env.pos;
        },
    });
    Registries.Component.add(OpenCashDrawer);
    return OpenCashDrawer;
});
