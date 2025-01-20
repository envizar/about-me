import {defineConfig, transformerDirectives, transformerVariantGroup} from 'unocss'

export default defineConfig({

    transformers: [
        transformerVariantGroup(),
        transformerDirectives()
    ],

    theme: {
        colors: {
            'brand': 'var(--c-brand)',
            'brand-border': 'var(--c-brand-border)',
            'text': {
                'primary': 'var(--c-text-primary)',
                'secondary': 'var(--c-text-secondary)',
            },
            'sep': 'var(--c-sep)',
            'bg': {
                'body': 'var(--c-bg-body)',
                'card': 'var(--c-bg-card)',
                'hovercard': 'var(--c-bg-card-hover)'
            }
        }
    }

})