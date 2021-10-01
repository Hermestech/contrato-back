module.exports = ({dsActor, rpLegalActor, parteActor, dsResistente, rpLegalResistente, parteResistente,Servicios, domicilioActor,emailActor,domicilioResistente, emailResistente}) => {
    const today = new Date();
    
    return `
   
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
   <title>Document</title>
   <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap');
       *{
           margin: 2%;
           padding: 0;
           font-family: 'Montserrat', sans-serif;
           font-size: small;
           text-align: justify;
       }
       html {
           zoom: 0.90;
       }
       .antecedentes h4{
           margin-left: 37%;
       }
       .clausulas h4 {

           margin-left: 40%;
       }
       li{
           margin-left:7%;
       }

       .footer{
           margin-top: 5%;
           margin-bottom: 10%;
       }
       .firmas{
           margin-left: 66%;
       }

   </style>
</head>
<body>
<header>
<h4>CONVENIO DE CONFIDENCIALIDAD QUE CELEBRAN POR UNA PARTE ${dsActor.toUpperCase()} REPRESENTADA EN ESTE ACTO POR ${rpLegalActor.toUpperCase()}, EN LO    SUCESIVO
    DENOMINADO ${parteActor.toUpperCase()} Y, POR OTRA ${dsResistente.toUpperCase()}, REPRESENTADA EN ESTE ACTOR POR ${rpLegalResistente.toUpperCase()}, EN LO SUCESIVO DENOMINADO ${parteResistente.toUpperCase()}, QUIENES SE OBLIGAN AL TENOR DE LOS SIGUIENTES ATENCEDENTES, DECLARACIONES Y CLÁUSULAS.</h4>
    <br/>
    
</header>
<div class='antecedentes'>
<h4>ANTECEDENTES</h4>
<p> <b>UNICO</b>.- Ambas partes están por iniciar diversas pláticas para poder celebrar un contrato de prestación de servicios enfocados en: <b>${Servicios}</b> y/o llevar a cabo una alianza comercial o proyecto en conjunto.</p>
<h4>DECLARACIONES</h4>
</div>

<section class='declaraciones'>

<article class='declaraciones__Actor'>
<p>DECLARA <b>${parteActor}</b>, A TRAVÉS DE SU REPRESENTANTE LEGAL:</p>
<ol type="A">
    <li>Ser una persona moral legalmente constituida con base en las leyes vigentes de la República Mexicana, con la capacidad técnica y jurídica para la celebración del presente contrato;</li>
    <li>Que su domicilio, para los efectos del presente contrato, es el ubicado en <b>${domicilioActor}.</b> Así mismo, que su dirección de correo electrónico oficial, para los efectos del presente contrato, es la denominada:<b>${emailActor}</b></li>
    <li>Que su representante legal cuenta con todas las facultades necesarias para la celebración de este acto y que las mismas no le han sido revocadas o en forma alguna modificadas con anterioridad a la celebración de este convenio y;</li>
    <li>Que es su voluntad celebrar el presente convenio</li>
</ol>
</article>

<article class='declaraciones__Resistente'>
<p>DECLARA <b>${parteResistente}</b>, A TRAVÉS DE SU REPRESENTANTE LEGAL:</p>
    <ol type="A">
        <li>Ser una persona moral legalmente constituida con base en las leyes vigentes de la República Mexicana, con la capacidad técnica y jurídica para la celebración del presente contrato;</li>
        <li>Que su domicilio, para los efectos del presente contrato, es el ubicado en <b> ${domicilioResistente}.</b> Así mismo, que su dirección de correo electrónico oficial, para los efectos del presente contrato, es la denominada:<b>${emailResistente}</b></li>
        <li>Que su representante legal cuenta con todas las facultades necesarias para la celebración de este acto y que las mismas no le han sido revocadas o en forma alguna modificadas con anterioridad a la celebración de este convenio y;</li>
        <li>Que es su voluntad celebrar el presente convenio</li>
    </ol>

</article>

<article class='declaraciones__Ambas'>
<p>DECLARAN LAS PARTES, DE COMÚN ACUERDO:</p>
<ol type="A">
    <li>Que en la celebración del presente convenio no existe lesión, así como que no existe dolo, mala fe, error o cualquier otro vicio de la voluntado o circunstancia que pueda afectar la validez del presente convenio;</li>
    <li>Que el objeto del presente convenio es lícito y;</li>
    <li>Que consienten en obligarse al tenor de las siguientes:</li>
</ol>
</article>
</section>

<section class='clausulas'>
<h4>CLÁUSULAS</h4>

<p><b>PRIMERA</b>.- Las partes se obligan i) a abstenerse de divulgar toda o parte de la “Información Confidencial” quereciban con motivo de las pláticas descritas en el antecedente ÚNICO del presente contrato y; (ii) a abstenerse de utilizar toda o parte de la “Información Confidencial” para un propósito distinto a la realización de las pláticasdescritas en el antecedente ÚNICO del presente contrato.</p>
<p><b>SEGUNDA</b>.- Las partes acuerdan que por “Información Confidencial” se entenderá, toda aquella información que
cualquiera de las partes se compartan con motivo de las pláticas descritas en el antecedente ÚNICO del presente
convenio, incluyendo, pero sin limitar, secretos industriales en términos de la Ley de Propiedad Industrial,estrategias de negocios, planes de mercadotecnia, información relacionada con el desarrollo y lanzamiento al mercado de productos determinados, programas de cómputo, códigos fuente, códigos objeto, datos personales de socios, clientes, proveedores, asesores, administradores, consejeros, comisarios, factores, dependientes, comisionistas o accionistas de cualquiera de las partes, conocimientos técnicos, experiencia, estándares, información de proveedores, métodos de pruebas, resultados de pruebas y experimentos, procesos de manufactura, así como procedimientos relacionados con la elaboración de productos tecnológicos, prototipos, modelos de proyectos, procedimientos de control de calidad, fórmula, diseños, embalaje, fotografías, dibujos, especificaciones, evaluaciones sobre riesgos, información de almacenamiento y estabilidad, pronósticos comerciales, información de mercadotecnia, ventas y precios, muestras y cualquier otro material que lleve o incorpore información relacionada con las actividades de cada parte, nuevo productos, nuevos proyectos o información sobre oportunidades de inversión, oportunidades de nuevos negocios y/o aliados estratégicos; información y listado de clientes, clientes potenciales, prospectos comerciales, proveedores o aliados estratégicos y demás información de naturaleza similar o análoga. Ambas partes acuerdan que el presente convenio incluye todos y cada uno de los Secretos Industriales de cada una de las partes. De conformidad con el artículo 163 de la Ley Federal de Protección a la Propiedad Industrial, el término “Secreto Industrial” significa toda información de aplicación industrial o comercial que guarde cualquiera de las partes con carácter de confidencial, que le signifique obtener o mantener una ventaja competitiva o económica frente a terceros en la realización de actividades económicas y respecto de la cual haya adoptado losmedios y sistemas suficientes para preservar su confidencialidad y el acceso restringido de la misma.</p>
<p><b>TERCERA.-</b>Las partes acuerdan que la “Información Confidencial” podrá ser compartida, expresada o entregada por diversos medios ya sean en forma escrita o gráfica, en formato digital, a través de videos, videoconferencias, medios audiovisuales, imágenes, fotografías, en reuniones presenciales, o por cualquier otro medio. Así mismo, las partes reconocen que, sin importar el medio por el que se reciba la información, la parte receptora quedará obligada a cumplir con el presente contrato.</p>
<p><b>CUARTA.-</b>Las partes acuerdan que no se considerará “Información Confidencial” aquella que:</p>
<ol type="i">
<li>Se encontraba disponible en el dominio público o en cualquier fuente de acceso público antes de haber sido comunicada por la parte reveladora;</li>
<li>Ya se encontraba de manera legítima en posesión de la parte receptora, libre de cualquier obligación de  confidencialidad, con anterioridad a la comunicación realizada por la parte reveladora;</li>
<li>Sea legítimamente comunicada a cualquiera de las partes, libre de cualquier obligación de confidencialidad, por quien tenga derecho a comunicarla;</li>
<li>Sea desarrollada por cualquiera de las partes independientemente y sin referencia ni apoyo en la
Información Confidencial;</li>
<li>Sea legítimamente revelada en respuesta a un requerimiento u orden de autoridad o cualquier requerimiento o disposición legal, observándose lo dispuesto en la cláusula<b>QUINTA</b>del presente Convenio y;</li>
<li>Sea revelada de conformidad con una autorización escrita de la parte transmisora.</li>
</ol>
<p><b>QUINTA.-</b>Las partes acuerdan que, en caso de que la parte receptora reciba una orden o requerimiento, cualquiera sea su naturaleza, de cualquier autoridad competente, ya sea judicial, administrativa o de cualquier otra naturaleza similar o análoga, esta podrá comunicarla a dicha autoridad competente, siempre y cuando cumpla con lo siguiente:</p>
<ol type="i">
<li>La parte que reciba la orden o el requerimiento deberá de avisar a la parte transmisora sobre la existencia de dicha orden o requerimiento el mismo día en que lo reciba. Así mismo, junto con el aviso respectivo, la parte receptora de la orden o el requerimiento deberá de anexar copia simple o digitalizada de dicha orden o requerimiento;</li>
<li>La parte que reciba la orden o el requerimiento deberá de hacer todos los esfuerzos razonables para
divulgar únicamente la Información Confidencial que sea absolutamente necesaria para cumplir con la orden o el requerimiento de que se trate y;</li>
<li>La parte que reciba la orden o el requerimiento se obliga a coadyuvar con la parte reveladora para asegurar la protección adecuada de la secrecía de la Información Confidencial.</li>
</ol>
<p><b>SEXTA.-</b>Es voluntad de las partes sujetar las obligaciones del presente contrato a una condición resolutoria consistente en la celebración de un acuerdo posterior entre las partes que otorgue una protección mayor a la Información Confidencial que la establecida en el presente contrato.</p>
<p><b>SEPTIMA.-</b>Es voluntad de las partes sujetar las obligaciones establecidas en el presente contrato a un plazo de 3 años calendario contados a partir de la fecha de terminación del presente convenio.</p>
<p><b>OCTAVA.-</b>Ambas partes acuerdan que, en caso de incumplimiento de las obligaciones establecidas en el presente contrato, serán responsables del pago de los daños y perjuicios que su incumplimiento ocasione.</p>
<p><b>NOVENA.-</b>Las partes acuerdan que ni el presente convenio ni la transmisión de Información Confidencial
constituyen una cesión o licencia de derechos de propiedad intelectual o industrial, derechos de autor, registros de marcas, modelos de utilidad, diseños industriales o patentes por invenciones o creaciones nuevas. La propiedad de la Información Confidencial será siempre de la parte transmisora.</p>
<p><b>DECIMA.-</b>Las partes se obligan a devolver y destruir cualquier documento o base de datos que contenga
Información Confidencial (i) en caso de ser requerido por la parte que haya divulgado la información confidencial y/o (ii) a la fecha de terminación del presente convenio, salvo que la devolución o destrucción estén prohibidas por la ley aplicable o su realización implique gastos o costos económicos desmedidos para la parte receptora, a juicio razonable de esta última. En caso de que la Información Confidencial no pueda ser devuelta o destruida en términos de la presente cláusula, la parte receptora se obliga a guardar la confidencialidad de dicha Información Confidencial, así como a no divulgarla en términos del presente contrato.</p>
<p><b>DÉCIMA PRIMERA.-</b>Las partes acuerdan que en caso de que cualquier cláusula del presente convenio sea
declarada nula, la invalidez de dicha no afectará las demás cláusulas del presente convenio, mismas que seguirán siendo válidas y aplicables.</p>
<p><b>DÉCIMA SEGUNDA.-</b>Las partes acuerdan firmar el presente contrato mediante firma electrónica, usando para
tal efecto los certificados y firmas generadas a través del aplicativo electrónico denominado “HelloSign”,
consultable en la página de internet identificada con el nombre de dominio www.hellosign.com, reconociendo las
partes su validez transfronteriza, en términos del artículo 114 del Código de Comercio.</p>
<p><b>DÉCIMA TERCERA.-</b>Para la interpretación, cumplimiento y resolución de cualquier conflicto o controversia relacionada con el presente convenio, las partes convienen sujetarse a las leyes vigentes y tribunales competentes en la Ciudad de México, Estados Unidos Mexicanos, renunciando las partes a cualquier fuero o competencia que pudiere corresponderles en el futuro, incluso por razón de territorio.</p>
<article class="footer">
<p><b>HABIENDO LEÍDO EN SU TOTALIDAD EL PRESENTE DOCUMENTO Y HABIENDO MANIFESTADO SU COMPRENSIÓN PLENA DEL CONTENIDO, VALOR Y ALCANCES LEGALES DEL MISMO, PROCEDEN A FIRMARLO EL DÍA ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}</b></p>

</article>
</section>
<section class='firmas'>
<article class='firma_actor'>
______________________
<b><p>${dsActor.toUpperCase()}</p></b>
<b><p>${rpLegalActor}</p></b>

</article>
<br/>
<br>
<br>
<article class='firma_resistente'>
______________________
<b><p>${dsResistente.toUpperCase()}</p></b>
<b><p>${rpLegalResistente}</p></b>

</article>
</section>

    
    
</body>
</html>`}