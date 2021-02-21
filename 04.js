function calc() {
    num = parseFloat(valor.value);
    prefix = pre.value;

    switch (prefix) {
        case 'M':
            result1.value = (num * 1000) + " k";
            result2.value = (num / 1000) + " G";
            result3.value = (num / 1000000) + " T"; 
            break;
        case 'k':
            result1.value = (num / 1000) + " M";
            result2.value = (num / 1000000) + " G";
            result3.value = (num / 1000000000) + " T";
            break;
        case 'G':
            result1.value = (num * 1000000) + " k";
            result2.value = (num * 1000) + " M";
            result3.value = (num / 1000) + " T";
            break;
        case 'T':
            result1.value = (num * 1000000000) + " k";
            result2.value = (num * 1000000) + " M";
            result3.value = (num * 1000) + " G";
            break;
        default:
            result1.value = "Digite um valor.";
            break;
    }
}