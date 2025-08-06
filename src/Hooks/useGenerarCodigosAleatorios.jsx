export const useGenerarCodigosAleatorios = () => {
    const caracteres = '0123456789';
    const codelength = 8;
    let randomCode = '';
    for (let i = 0; i < codelength; i++) {
        randomCode += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    const codigo = `${randomCode}369`
    return codigo;
}