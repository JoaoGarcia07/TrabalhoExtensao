<?php
$title = "HOME";
include "includes/header.php";
?>

<div class="main">
    <div class="sugestao-content">
        <div class="sugestao-container">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr);">
                <div style="padding: 15px; text-align: center; align-content: center;">
                    <img src="assets/img/pixFrada.png">
                </div>
                <div style="padding: 15px; text-align: center;">
                    <h1>Centro <span style="color: #FFFFFF;">Frada</span></h1>
                    <p style="padding: 15px; color: #FFFFFF;">
                    Acesse seu APP de pagamentos e faça a leitura do QR Code ao lado
                    para efetuar o pagameto de forma rápida e segura.                    </p>
                    <p style="padding: 15px; color: #FFFFFF;">Chave pix para doar:</p>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr);">
                        <div style="padding: 15px; margin: 15px; background-color: #FFFFFF; border-radius: 5px;"><p id="chavePix">fradapix@gmail.com</p></div>
                        <div style="align-content: center;"><button class="copiar">Copiar chave</button></div>
                    </div>
                </div>
                <div style="padding: 15px; text-align: center; align-content: center;">
                    <img src="assets/img/Dog2.png">
                </div>
            </div>
        </div>
    </div>
</div>