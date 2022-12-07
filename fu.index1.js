function type_binario(e) {
  var tecla = (window.event) ? event.keyCode : e.which;
  if ((tecla == 48 || tecla == 49)) return true;
  else {
    return false;
  }
}


function type_decimal(e) {
  var tecla = (window.event) ? event.keyCode : e.which;
  if ((tecla >= 48 && tecla <= 57)) return true;
  else {
    return false;
  }
}



function type_octal(e) {
  var tecla = (window.event) ? event.keyCode : e.which;
  if ((tecla >= 48 && tecla <= 55)) return true;
  else {
    return false;
  }
}


function type_hexadecimal(e) {
  var tecla = (window.event) ? event.keyCode : e.which;
  if ((tecla >= 48 && tecla <= 57 || tecla >= 65 && tecla <= 70 || tecla >= 97 && tecla <= 102)) return true;
  else {
    return false;
  }
}



function habi_desabi(value) {


  if (value == 10) {
    ipt_decimal.disabled = false;
  } else if (value != 10) {
    ipt_decimal.disabled = true;
  }


  if (value == 2) {
    ipt_binario.disabled = false;
  } else if (value != 2) {
    ipt_binario.disabled = true;
  }


  if (value == 8) {
    ipt_octal.disabled = false;
  } else if (value != 8) {
    ipt_octal.disabled = true;
  }


  if (value == 16) {
    ipt_hexadecimal.disabled = false;
  } else if (value != 16) {
    ipt_hexadecimal.disabled = true;
  }
};
function chamar_calculo() {


  if (tipos_bases.value == 10) {
    convert_decimal();
  }


  if (tipos_bases.value == 2) {
    convert_binario();
  }


  if (tipos_bases.value == 8) {
    convert_octal();
  }


  if (tipos_bases.value == 16) {
    convert_hexadecimal();
  }
};


const validarDecimal = (decimal) => {
  return true;
};
const validarBinario = (binario) => {
  let binarioComoCadena = String.valueOf(binario);
  for (let i = 0; i < binarioComoCadena.length(); i++) {
    let caracter = binarioComoCadena.charAt(i);
    if (caracter !== 48 && caracter !== 49) {
      return false;
    }
  }
  return true;
};
const validarOctal = (octal) => {
  let octalComoCadena = String.valueOf(octal);
  let caracteresOctales = '01234567';
  for (let i = 0; i < octalComoCadena.length(); i++) {
    let caracter = octalComoCadena.charAt(i);
    if (caracteresOctales.indexOf(caracter) === -1) {
      return false;
    }
  }
  return true;
};
const validarHexadecimal = (hexadecimal) => {
  let caracteresHexadecimales = '0123456789ABCDEF';
  for (let i = 0; i < hexadecimal.length(); i++) {
    let caracter = hexadecimal.charAt(i);
    if (caracteresHexadecimales.indexOf(caracter) === -1) {
      return false;
    }
  }
  return true;
};
const decimalABinario = (decimal) => {
  let binario = '';
  while (decimal > 0) {
    binario = decimal % 2 + binario;
    decimal = decimal / 2;
  }
  return binario;
};
const decimalAOctal = (decimal) => {
  let residuo = 0;
  let octal = '';
  let caracteresOctales = [48, 49, 50, 51, 52, 53, 54, 55];
  while (decimal > 0) {
    residuo = decimal % 8;
    let caracter = caracteresOctales[residuo];
    octal = caracter + octal;
    decimal = decimal / 8;
  }
  return octal;
};
const decimalAHexadecimal = (decimal) => {
  let residuo = 0;
  let hexadecimal = '';
  let caracteresHexadecimales = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70];
  while (decimal > 0) {
    residuo = decimal % 16;
    let caracterHexadecimal = caracteresHexadecimales[residuo];
    hexadecimal = caracterHexadecimal + hexadecimal;
    decimal = decimal / 16;
  }
  return hexadecimal;
};
const binarioADecimal = (binario) => {
  let decimal = 0;
  let potencia = 0;
  while (true) {
    if (binario === 0) {
      break;
    } else {
      let temp = binario % 10;
      decimal += temp * Math.pow(2, potencia);
      binario = binario / 10;
      potencia++;
    }
  }
  return decimal;
};
const octalADecimal = (octal) => {
  decimal = 0;
  potencia = 0;
  while (true) {
    if (octal === 0) {
      break;
    } else {
      let temp = octal % 10;
      decimal += temp * Math.pow(8, potencia);
      octal = octal / 10;
      potencia++;
    }
  }
  return decimal;
};
const hexadecimalADecimal = (hexadecimal) => {
  let caracteresHexadecimales = '0123456789ABCDEF';
  hexadecimal = hexadecimal.toUpperCase();
  let decimal = 0;
  for (let i = 0; i < hexadecimal.length(); i++) {
    let caracter = hexadecimal.charAt(i);
    let posicionEnCaracteres = caracteresHexadecimales.indexOf(caracter);
    decimal = 16 * decimal + posicionEnCaracteres;
  }
  return decimal;
};