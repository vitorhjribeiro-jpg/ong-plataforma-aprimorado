// Vitor Hugo de Jesus Ribeiro


document.addEventListener('DOMContentLoaded', function () {


    var campoCpf = document.getElementById('cpf');

    if (campoCpf) {
        campoCpf.addEventListener('input', function (evento) {
            aplicarMascaraCpf(evento.target);
        });
    }

    var campoTelefone = document.getElementById('telefone');

    if (campoTelefone) {
        campoTelefone.addEventListener('input', function (evento) {
            aplicarMascaraTelefone(evento.target);
        });
    }


    var campoCep = document.getElementById('cep');

    if (campoCep) {
        campoCep.addEventListener('input', function (evento) {
            aplicarMascaraCep(evento.target);
        });
    }
});


/**
 * Formata o valor digitado no padrão 000.000.000-00.
 * Funcionamento, passo a passo:
 * 1. Remove tudo que não for número do texto digitado;
 * 2. Limita a 11 dígitos (tamanho de um CPF);
 * 3. Reinsere os pontos e o traço nas posições corretas.
 */
function aplicarMascaraCpf(campo) {
    var apenasNumeros = campo.value.replace(/\D/g, '').slice(0, 11);

    if (apenasNumeros.length > 9) {
        campo.value = apenasNumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    } else if (apenasNumeros.length > 6) {
        campo.value = apenasNumeros.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (apenasNumeros.length > 3) {
        campo.value = apenasNumeros.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    } else {
        campo.value = apenasNumeros;
    }
}

/**
 * Formata o valor digitado no padrão (00) 00000-0000.
 * Mesma lógica da função de CPF: remove caracteres não numéricos,
 * limita o tamanho e reinsere parênteses, espaço e traço.
 */
function aplicarMascaraTelefone(campo) {
    var apenasNumeros = campo.value.replace(/\D/g, '').slice(0, 11);

    if (apenasNumeros.length > 6) {
        campo.value = apenasNumeros.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    } else if (apenasNumeros.length > 2) {
        campo.value = apenasNumeros.replace(/(\d{2})(\d{1,5})/, '($1) $2');
    } else {
        campo.value = apenasNumeros;
    }
}

/**
 * Formata o valor digitado no padrão 00000-000.
 */
function aplicarMascaraCep(campo) {
    var apenasNumeros = campo.value.replace(/\D/g, '').slice(0, 8);

    if (apenasNumeros.length > 5) {
        campo.value = apenasNumeros.replace(/(\d{5})(\d{1,3})/, '$1-$2');
    } else {
        campo.value = apenasNumeros;
    }
}


/* ==========================================================================
   ENTREGA II — interatividade de interface
   ========================================================================== */

/* ---------- Menu hambúrguer e submenu dropdown ---------- */
document.addEventListener('DOMContentLoaded', function () {
    var botaoMenu = document.querySelector('.menu-toggle');
    var painel = document.getElementById('menu-principal');

    if (botaoMenu && painel) {
        botaoMenu.addEventListener('click', function () {
            var aberto = painel.classList.toggle('aberto');
            botaoMenu.setAttribute('aria-expanded', aberto);
            botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
        });
    }

    // Botão do submenu (usado no mobile; no desktop o :hover/:focus-within já abre)
    document.querySelectorAll('.submenu-botao').forEach(function (botao) {
        botao.addEventListener('click', function () {
            var submenu = botao.nextElementSibling;
            var aberto = submenu.classList.toggle('aberto');
            botao.setAttribute('aria-expanded', aberto);
        });
    });

    // Esc fecha menu e modal
    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        if (painel && painel.classList.contains('aberto')) {
            painel.classList.remove('aberto');
            botaoMenu.setAttribute('aria-expanded', 'false');
            botaoMenu.focus();
        }
        fecharModais();
    });

    // Alerts com botão de fechar
    document.querySelectorAll('.alerta__fechar').forEach(function (b) {
        b.addEventListener('click', function () { b.closest('.alerta').hidden = true; });
    });

    // Modals: [data-abrir-modal="id"] abre, [data-fechar-modal] fecha
    document.querySelectorAll('[data-abrir-modal]').forEach(function (b) {
        b.addEventListener('click', function () { abrirModal(b.getAttribute('data-abrir-modal')); });
    });
    document.querySelectorAll('[data-fechar-modal]').forEach(function (b) {
        b.addEventListener('click', fecharModais);
    });
    document.querySelectorAll('.modal').forEach(function (m) {
        m.addEventListener('click', function (e) { if (e.target === m) fecharModais(); });
    });

    document.querySelectorAll('[data-toast]').forEach(function (b) {
        b.addEventListener('click', function () { mostrarToast(b.getAttribute('data-toast'), b.getAttribute('data-toast-tipo') || 'info'); });
    });

    iniciarFormularioCadastro();
});

/* ---------- Modal ---------- */
var ultimoFoco = null;
function abrirModal(id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    ultimoFoco = document.activeElement;
    modal.classList.add('aberto');
    var foco = modal.querySelector('button, a, input');
    if (foco) foco.focus();
}
function fecharModais() {
    document.querySelectorAll('.modal.aberto').forEach(function (m) { m.classList.remove('aberto'); });
    if (ultimoFoco) { ultimoFoco.focus(); ultimoFoco = null; }
}

/* ---------- Toast ---------- */
function mostrarToast(mensagem, tipo) {
    var area = document.getElementById('toast-area');
    if (!area) return;
    var toast = document.createElement('div');
    toast.className = 'toast toast--' + (tipo || 'info');
    toast.setAttribute('role', tipo === 'erro' ? 'alert' : 'status');
    var texto = document.createElement('p');
    texto.textContent = mensagem;
    var fechar = document.createElement('button');
    fechar.type = 'button';
    fechar.setAttribute('aria-label', 'Fechar notificação');
    fechar.innerHTML = '&times;';
    fechar.addEventListener('click', function () { toast.remove(); });
    toast.appendChild(texto);
    toast.appendChild(fechar);
    area.appendChild(toast);
    setTimeout(function () { toast.remove(); }, 5000);
}

/* ---------- Formulário de cadastro: validação visual ---------- */
function mensagemDeErro(campo) {
    var v = campo.validity;
    if (v.valueMissing) return 'Preencha este campo.';
    if (v.typeMismatch) return 'Informe um valor válido (ex.: nome@email.com).';
    if (v.patternMismatch) return campo.getAttribute('title') || 'Use o formato indicado abaixo do campo.';
    if (v.tooShort) return 'Digite pelo menos ' + campo.minLength + ' caracteres.';
    if (v.rangeUnderflow || v.rangeOverflow) return 'Valor fora do intervalo permitido.';
    return 'Preencha este campo corretamente.';
}

function validarCampo(campo) {
    var bloco = campo.closest('.campo-formulario');
    if (!bloco || campo.type === 'checkbox' || campo.type === 'radio') return campo.checkValidity();
    var msg = bloco.querySelector('.mensagem-campo');
    if (!msg) {
        msg = document.createElement('span');
        msg.className = 'mensagem-campo';
        msg.setAttribute('role', 'alert');
        bloco.appendChild(msg);
    }
    var valido = campo.checkValidity();
    bloco.classList.toggle('campo--valido', valido && campo.value !== '');
    bloco.classList.toggle('campo--erro', !valido);
    msg.textContent = valido ? '' : mensagemDeErro(campo);
    campo.setAttribute('aria-invalid', String(!valido));
    return valido;
}

function iniciarFormularioCadastro() {
    var form = document.querySelector('form[novalidate]');
    if (!form) return;
    var alertaErro = document.getElementById('alerta-erro-form');
    var termos = document.getElementById('aceite-termos');
    var enviar = form.querySelector('button[type="submit"]');

    // Botão de envio fica desabilitado até aceitar os termos
    function atualizarEnvio() { if (enviar && termos) enviar.disabled = !termos.checked; }
    if (termos) { termos.addEventListener('change', atualizarEnvio); atualizarEnvio(); }

    form.querySelectorAll('input, select, textarea').forEach(function (campo) {
        campo.addEventListener('blur', function () { validarCampo(campo); });
        campo.addEventListener('input', function () {
            if (campo.closest('.campo--erro')) validarCampo(campo);
        });
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // demonstração: não há back-end
        var invalidos = [];
        form.querySelectorAll('input, select, textarea').forEach(function (c) { if (!validarCampo(c)) invalidos.push(c); });
        if (invalidos.length) {
            if (alertaErro) { alertaErro.hidden = false; }
            mostrarToast('Corrija ' + invalidos.length + ' campo(s) para enviar o cadastro.', 'erro');
            invalidos[0].focus();
            return;
        }
        if (alertaErro) alertaErro.hidden = true;
        mostrarToast('Cadastro enviado com sucesso!', 'sucesso');
        abrirModal('modal-sucesso');
    });

    form.addEventListener('reset', function () {
        setTimeout(function () {
            form.querySelectorAll('.campo--erro, .campo--valido').forEach(function (b) { b.classList.remove('campo--erro', 'campo--valido'); });
            if (alertaErro) alertaErro.hidden = true;
            atualizarEnvio();
        }, 0);
    });
}
