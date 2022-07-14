import Api from '../Api';

export async function buscarTodasFrutas() {
    try {
        const resultado = await Api.get(`/hortfruit`);
        return resultado.data;

    } catch (error) {

        console.log(error);
        return [];

    }
}

export async function pesquisaNomeFruta(nomeFruta){
    try {
        const resultado = await Api.get(`/hortfruit?fruta=${nomeFruta}`);
        return resultado.data
    } catch (error) {
        console.log(error);
        return [];
    }
}


export async function salvarNovaFruta(idp,frutap,valorp,fotop){
    try{
        await Api.post(`/hortfruit`,{
        id: idp,
        fruta: frutap,
        valor: valorp,
        foto: fotop
        })

    } catch (error) {
        console.log();
        return[];
    }
}

export async function alterarFrutas(idp,frutap,valorp,fotop){
    try {
        await Api.put(`/hortfuit/${idp}`,
        {
        id: idp,
        fruta: frutap,
        valor: valorp,
        foto: fotop
        });
        return 'Sucesso';
    } catch (error) {
        console.log();
        return[];
    }
}

export async function deletarFrutas(idp,frutap,valorp,fotop){
    try {
        await Api.delete(`/hortfuit/${idp}`);
        return 'Sucesso';
    } catch (error) {
        console.log();
        return[];
    }
}