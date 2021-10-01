const aliases = (prefix = `src`) => ({
    '@components': `${prefix}/components`,
    '@fonts': `${prefix}/fonts`,
    '@styles': `${prefix}/styles`,
    '@view': `${prefix}/view`,
    '@store': `${prefix}/store`,
    '@http': `${prefix}/http`,
    '@assets': `${prefix}/assets`,

});

module.exports = aliases;