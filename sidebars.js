// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
    mainSidebar: [
        {
            type: 'category',
            label: 'Introduction',
            className: 'menu_outer_list',
            collapsible: false,
            items: [{type: 'doc', id: 'index', label: 'About'}]
        },
        {
            type: 'category',
            label: 'User Guides',
            collapsible: true,
            collapsed: false,
            className: 'menu_outer_list',
            items: [
                {
                    type: 'category',
                    label: 'IBEX Loyalty Program',
                    collapsible: true,
                    collapsed: false,
                    link: {
                        type: 'generated-index',
                        title: 'IBEX Loyalty Program',
                        description: 'High Stakes\' Stakers extra reward program',
                        keywords: ['guides'],
                    },
                    items: [
                        'loyalty-program/index',
                        'loyalty-program/register',
                        'loyalty-program/link',
                        'loyalty-program/redeem',
                    ]
                },
            ],
        },
        {
            type: 'category',
            label: 'Staking Guides',
            collapsible: true,
            collapsed: false,
            className: 'menu_outer_list',
            link: {
                type: 'generated-index',
                title: 'Staking Guides',
                description: 'Staking guides for the chains we support. More to come soon!',
                keywords: ['guides'],
            },
            items: [
                'delegating/cosmos',
                'delegating/secretnetwork',
                'delegating/injective',
                'delegating/terra',
                'delegating/persistence',
                'delegating/provenance',
                'delegating/band',
                'delegating/desmos',
                'delegating/fetch',
                'delegating/iris',
                'delegating/migaloo',
                /*
              'delegating/shentu',
              'delegating/teritori',
              'delegating/terp',
              'delegating/arable',

                 */

            ]
        },
    ],
}
