import * as React from 'react';
import MegafonTv from 'icons/Service-logos/24/MF-TV.svg';

export const ProductTileRestWrapper = ({ children }) =>
    <div style={{ padding: '20px', display: 'flex' }}>{children}</div>;

export const tariff = {
    link: '/tariffs/vklyuchaysya/smotri.html',
    linkTarget: '_self',
    moreLinkText: 'Подробнее о тарифе',
    showMoreLink: true,
    buyLink: '/zakaz/?tariff=look',
    buyLinkTarget: '_self',
    buyButtonText: 'Выбрать',
    showBuyButton: true,
    connectLink: '#',
    connectLinkTarget: '_self',
    connectButtonText: 'Перейти',
    showConnectButton: true,
    'title': 'Включайся! Смотри',
    'description': 'Описание',
    'payment': {
        'value': '1000',
        'unitExtra': 'за 30 дней',
        'unitValue': '₽',
        'unit': '₽ за 30 дней',
        'discount': '',
    },
    'packs': [
        {
            'value': 1500,
            'unit': 'минут',
            'title': 'Безлим',
            isDelim: true,
        },
        {
            'value': 100,
            'unit': 'смс',
            'title': 'Безлим',
            isDelim: false,
        },
        {
            'value': 3,
            'unit': 'ГБ',
            'title': 'Безлим',
            isDelim: false,
        },
    ],
    'firstParams': {
        'title': 'Параметры',
        'caption': '',
        'items': [
            {
                'title': 'VIP-тариф',
                'caption': 'Привилегии обслуживания и другое',
                'svgIcon': <MegafonTv />,
            },
            {
                'title': 'МегаФон ТВ',
                'caption': 'Безлимитный трафик и пакеты кино, сериалов и ТВ-каналов на любой вкус',
                'svgIcon': <MegafonTv />,
            },
            {
                'title': 'VIP-тариф',
                'caption': 'Привилегии обслуживания и другое',
                'svgIcon': <MegafonTv />,
            },
            {
                'title': 'VIP-тариф',
                'caption': 'Привилегии обслуживания и другое',
                'svgIcon': <MegafonTv />,
            },
            {
                'title': 'VIP-тариф',
                'caption': 'Привилегии обслуживания и другое',
                'svgIcon': <MegafonTv />,
            },
            {
                'title': 'VIP-тариф',
                'caption': 'Привилегии обслуживания и другое',
                'svgIcon': <MegafonTv />,
            },
        ],
    },
    'secondParams': [{
        'title': 'Опция',
        'value': '300',
        'unit': 'минут',
    }],
    'cashback': {
        'title': 'Кэшбэк',
        'value': 20,
        'unit': '%',
    },
    'info': {
        'billingIds': ['sdf', 'sdf'],
        'sms': '05007897',
        'smsText': 'ДА',
        'smsSite': null,
        'ivr': '05007897',
        'ussd': '<span class="c-number-call"><b class="asterisk">*</b><b class="num">789</b><span class="c-number-call"><b class="asterisk">*</b><b class="num">7</b><b class="dash">#</b><b class="pipe"></b></span>',
        'lkLink': 'https://lk.megafon.ru/tariffs/',
        'title': 'Включайся! Смотри',
        'id': 1598,
    },
};

export const tariff2 = {
    link: '/tariffs/vklyuchaysya/smotri.html',
    buyLink: '/zakaz/?tariff=look',
    connectLink: '#',
    shopTag: 'tag',
    'title': 'Включайся! Смотри',
    'description': 'Описание',
    'payment': {
        title: 'При покупке новой SIM–карты',
        'value': '1000',
        'unitExtra': 'за 30 дней',
        'unitValue': '₽',
        'unit': '₽ за 30 дней',
        'discount': '600',
    },
    'packs': [
        {
            'value': 1500,
            'unit': 'минут',
        },
        {
            'value': 100,
            'unit': 'смс',
        },
        {
            'value': 3,
            'unit': 'ГБ',
        },
    ],
    'firstParams': {
        'title': 'Параметры',
        'caption': 'Параметры',
        'items': [
            {
                'title': 'VIP-тариф',
                'caption': 'Привилегии обслуживания и другое',
                'svgIcon': <MegafonTv />,
            },
            {
                'title': 'МегаФон ТВ',
                'caption': 'Безлимитный трафик и пакеты кино, сериалов и ТВ-каналов на любой вкус',
                'svgIcon': <MegafonTv />,
            },
            {
                'title': 'VIP-тариф',
                'caption': 'Привилегии обслуживания и другое',
                'svgIcon': <MegafonTv />,
            },
            {
                'title': 'VIP-тариф',
                'caption': 'Привилегии обслуживания и другое',
                'svgIcon': <MegafonTv />,
            },
            {
                'title': 'VIP-тариф',
                'caption': 'Привилегии обслуживания и другое',
                'svgIcon': <MegafonTv />,
            },
            {
                'title': 'VIP-тариф',
                'caption': 'Привилегии обслуживания и другое',
                'svgIcon': <MegafonTv />,
            },
        ],
    },
    'secondParams': [{
        'title': 'Опция',
        'value': '300',
        'unit': 'минут',
    }],
    'cashback': {
        'title': 'Кэшбэк',
        'value': 20,
        'unit': '%',
    },
    'info': {
        'billingIds': ['sdf', 'sdf'],
        'sms': '05007897',
        'smsText': 'ДА',
        'smsSite': null,
        'ivr': '05007897',
        'ussd': '<span class="c-number-call"><b class="asterisk">*</b><b class="num">789</b><span class="c-number-call"><b class="asterisk">*</b><b class="num">7</b><b class="dash">#</b><b class="pipe"></b></span>',
        'lkLink': 'https://lk.megafon.ru/tariffs/',
        'title': 'Включайся! Смотри',
        'id': 1598,
    },
};
