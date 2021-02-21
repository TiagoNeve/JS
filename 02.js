function calc() {
    preco = parseFloat(unit.value);
    quantidade = parseFloat(quant.value);
    desconto = parseFloat(descont.value);
    resultado = 0;

    resultado = (preco * quantidade) - desconto;
    result.value = resultado;
}