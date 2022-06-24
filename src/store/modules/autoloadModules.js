const requireModule = require.context('.', false,  /\.js$/);
const modules = {};

requireModule.keys().forEach(filename => {
    // cria o nome do modulo a partir do nome do arquivo
    // remove o 'store.js' do nome do módulo
    // const moduleName = filename.replace(/(\.\/|\.store\.js)/g, '')
    
    const moduleName = filename.replace(/(\.\/|\.js)/g, '')

    modules[moduleName] = requireModule(filename).default || requireModule(filename);
});

export default modules;