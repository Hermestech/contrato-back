module.exports=({personaMoralDs,repLegalPersonaMoral,domicilioPersonaMoral,emailPersonaMoral,nombrePrestador,domicilioPrestador,emailPrestador,serviciosPrestador,contraprestacion,plazo,firmaElectronica}) => {

    const today = new Date();

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
               margin-bottom: 10%
           }
           table,td {
            border: 1px solid black;
        }
       </style>
            
    </head>
    <body>
    
        <header>
            <h4>CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES INDEPENDIENTES CELEBRADO ENTRE ${personaMoralDs}, REPRESENTADA EN ESTE ACTO POR ${repLegalPersonaMoral},EN LO SUCESIVO "LA SOCIEDAD" Y LA PERSONA FÍSICA QUE SE INDICA EN EL ANEXO A DEL PRESENTE CONTRATO, EN LO SUCESIVO "EL PRESTADOR", QUIENES SE OBLIGAN AL TENOR DE LAS SIGUIENTES DEFINICIONES,DECLARACIONES Y CLÁUSULAS.</h4>
            <br>
        </header>
    
        <section class="definiciones">
            <h4>DEFINICIONES</h4>
            <p><b>ÚNICO.-</b> Para los efectos del presente contrato, las partes acuerdan que los conceptos aquí establecidos tendrán el significado que se establece a continuación:</p>
            <ol type="I">
               <li><b>Creaciones Nuevas:</b>Cualquier invento, modelo de utilidad o diseño industrial, patentable o registrable en términos de la Ley Federal de Protección a la Propiedad Industrial.</li>
    
               <li><b>Elementos de Propiedad Intelectual:</b>Cualquiera de las <b>Creaciones Nuevas</b>o de las <b>Obras Protegidas</b>, tal y como se definen en el presente contrato.</li>
    
               <li><b>Información Confidencial:</b> Toda información relacionada con la <b>Sociedad</b>, a la cual el <b>Prestador</b> tenga acceso por virtud del presente contrato.</li>
               <li><b>Obras Protegidas: </b>Cualquier elemento de creación original, susceptible de ser divulgado o reproducido en cualquier forma o medio y que se encuentre protegido en términos de la Ley Federal del Derecho de Autor, incluyendo, pero sin limitar, programas de cómputo, código fuente o código objeto, programas digitales o electrónicos con o sin elementos visuales o animados, compilación de bases de datos, obras de diseño gráfico, obras musicales o audiovisuales y presentaciones comerciales.</li>
    
               <li><b>Secretos Comerciales: </b>Toda información relacionada con la <b>Sociedad,</b> su objeto social, modelo de negocios y actividad comercial, que tenga un valor comercial, como pueden, ser de manera enunciativa, estrategias de negocios, planes de mercadotecnia, información relacionada con el desarrollo y lanzamiento al mercado de productos determinados, programas de cómputo, códigos fuente, códigos objeto, datos personales de socios o accionistas de cualquiera de las partes, conocimientos técnicos, experiencia, estándares, información de proveedores, métodos de pruebas, resultados de pruebas y experimentos, procesos de manufactura, así como procedimientos relacionados con la elaboración de productos tecnológicos, prototipos, modelos de proyectos, procedimientos de control de calidad, fórmula, diseños, embalaje, fotografías, dibujos, especificaciones, evaluaciones sobre riesgos, información de almacenamiento y estabilidad, programas de computadora, pronósticos comerciales, información de mercadotecnia, ventas y precios, muestras y cualquier otro material que lleve o incorpore información relacionada con las actividades de cada parte, secretos industriales, nuevos productos, nuevos proyectos o información sobre oportunidades de inversión, oportunidades de nuevos negocios y/o aliados estratégicos; información y listado de clientes, proveedores o aliados estratégicos. </li>
    
               <li><b>Secretos Industriales:</b>Toda información de aplicación industrial o comercial relacionada con la <b>Sociedad,</b> su objeto social, modelo de negocios y actividad comercial, y que le signifique obtener o mantener una ventaja competitiva o económica frente a terceros en la realización de actividades económicas y respecto de la cual haya adoptado los medios o sistemas suficientes para preservar su confidencialidad y el acceso restringido a la misma, en términos de la fracción I del Artículo 163 de la Ley Federal de Protección a la Propiedad Industrial, como pueden, ser de manera enunciativa, estrategias de negocios, planes de mercadotecnia, información relacionada con el desarrollo y lanzamiento al mercado de productos determinados, programas de cómputo, códigos fuente, códigos objeto, datos personales de socios o accionistas de cualquiera de las partes, conocimientos técnicos, experiencia, estándares, información de proveedores, métodos de pruebas, resultados de pruebas y experimentos, procesos de manufactura, así como procedimientos relacionados con la elaboración de productos tecnológicos, prototipos, modelos de proyectos, procedimientos de control de calidad, fórmula, diseños, embalaje, fotografías, dibujos, especificaciones, evaluaciones sobre riesgos, información de almacenamiento y estabilidad, programas de computadora, pronósticos comerciales, información de mercadotecnia, ventas y precios, muestras y cualquier otro material que lleve o incorpore información relacionada con las actividades de cada parte, secretos industriales, nuevos productos, nuevos proyectos o información sobre oportunidades de inversión, oportunidades de nuevos negocios y/o aliados estratégicos; información y listado de clientes, proveedores o aliados estratégicos.</li> 
            </ol>
        </section>
        
        <section class='declaraciones'>
            <h4>DECLARACIONES</h4>
            <br>
            <ol type="I">
                <li><b>DECLARA LA SOCIEDAD, POR CONDUCTO DE SU REPRESENTANTE LEGAL:</b> (i) Ser una sociedad legalmente existente, constituida conforme a las leyes de la República Mexicana y estar legalmente inscrita, o en procesos de inscripción, en el Registro Público del Comercio de su domicilio social; (ii) Que su representante legal cuenta con todas las facultades para la celebración de este acto y que las mismas no le han sido revocadas o en forma alguna modificadas con anterioridad a la celebración del presente contrato; (iii) Que su domicilio convencional para los efectos del presente contrato es el ubicado en ${domicilioPersonaMoral}, y que su dirección de correo electrónico para los efectos del presente contrato es ${emailPersonaMoral}; (iv) Que reconoce que en la presente relación no tendrá un don de mando, toda vez que no existe subordinación por parte del Prestador, para los efectos legales a que haya lugar y; (v) Que es su voluntad celebrar el presente contrato y obligarse en sus términos. 
                </li> <br>
    
                <li><b>DECLARA EL PRESTADOR, POR SU PROPIO DERECHO:</b> (i) Que es una persona física, mayor de edad y plenamente capaz para la celebración del presente contrato; (ii) Que su domicilio convencional y su dirección de correo electrónico para los efectos del presente contrato son los mencionados en el Anexo A del presente contrato; (iii) Que cuenta con los recursos materiales, técnicos, humanos, herramientas, licencias, certificaciones y conocimientos suficientes para cumplir con las obligaciones que asume por virtud del presente contrato; (iv) Que es su deseo prestar a la <b>Sociedad</b> los servicios profesionales que se detallan en el Anexo A del presente contrato y; (v) Que reconoce que en la presente relación no tendrá un deber de obediencia, toda vez que no existe subordinación a la <b>Sociedad,</b> para los efectos legales a que haya lugar.</li><br>
    
                <li><b>DECLARAN LAS PARTES, BAJO PROTESTA DE DECIR VERDAD:</b>(i) Que en la celebración del presente contrato no existe dolo, violencia, mala fe, ni ningún otro vicio de la voluntad que pudiera acarrear la nulidad del presente contrato; (ii) Que en la celebración del presente contrato no existe lesión ni alguna situación de naturaleza similar o análoga que dé lugar a una reducción en las contraprestaciones aquí pactadas; (iii) Que el objeto del presente contrato es lícito y; (iv) Que es su voluntad celebrar el presente contrato, así como obligarse en términos de las siguientes:</li>
                <br>
            </ol>
        </section>
    
        <section class="clausulas">
            <h4>CLÁUSULAS</h4>
        <ol type="1">
            <b><li>OBJETO</b><br><p>El <b>Prestador</b> se obliga a prestar a la <b>Sociedad</b> diversos servicios profesionales independientes, para lo cual asumirá las obligaciones que se establecen en el <b>Listado</b> de Servicios que se agrega al presente contrato como Anexo A, cuyo contenido se tiene aquí por reproducido como si a la letra se insertase, para los efectos legales a que haya lugar.</p></li>
    
            <li><b>CONTRAPRESTACIÓN.</b><br><p>
                Como contraprestación recíproca a los servicios establecidos en la cláusula que antecede, la Sociedad pagará al <b>Prestador</b> la compensación establecida en el Anexo A del presente contrato, cuyo contenido se tiene aquí por reproducido como si a la letra se insertase, para los efectos legales a que haya lugar. 
            </p></li>
    
            <li><b>IMPUESTOS.</b><br>
                <p>
                Las partes acuerdan que cada una de ellas será responsable del pago de los impuestos locales o federales que se causen con motivo del cumplimiento de las obligaciones establecidas en el presente contrato. Así mismo, el <b>Prestador</b> se obliga a entregar a la <b>Sociedad</b> el comprobante fiscal correspondiente, que deberá de cumplir con todas las leyes y reglas aplicables en la República Mexicana aplicables a comprobantes fiscales.</p>
    
                <p>Por medio de este acto, el <b>Prestador</b> solicita a la <b>Sociedad</b> que a partir de esta fecha se asimile a salarios  cualquier ingreso que este perciba de conformidad con la cláusula 2 (Contraprestación)  del presente contrato, con fundamento en el artículo 94 Fracción V de la Ley del Impuesto Sobre la Renta.</p>
    
                <p>Ambas partes acuerdan que la solicitud referida en el párrafo que antecede no dará lugar a ningún cambio en la relación contractual, ni tampoco generará ninguna relación laboral, entre ellas. En tal virtud, por medio de este acto, el <b>Prestador</b> libera a la <b>Sociedad</b> de cualquier responsabilidad laboral, de seguridad social o cualquier otra de naturaleza similar o análoga en tanto a que los servicios que prestara al amparo del  presente contrato no son subordinados, sino independientes y los mismos se prestan con recursos humanos, técnicos y materiales propios.</p>
     
            </li>
    
            <li><b>NO RELACIÓN LABORAL.</b>
            <p>Las partes acuerdan que el <b>Prestador</b> prestará los servicios que se establecen en el presente contrato, en la forma, términos y tiempos que considere pertinentes y con recursos, herramientas y materiales propios. En consecuencia, no deberá de considerarse que existe entre las partes un don de mando ni un deber de obediencia, toda vez que en las obligaciones establecidas en el presente documento no existe subordinación del <b>Prestador</b> a la <b>Sociedad. </b>    
            </p>
            </li>
    
            <li><b>DERECHOS DE AUTOR.</b>
            <p>Ambas partes acuerdan que todas las <b>Obras Protegidas</b> que sean desarrolladas por el <b>Prestador</b> en cumplimiento de las obligaciones que asume por virtud del presente contrato, se sujetan a lo siguiente:</p>
                <ol type="i">
                    <li> <b>5.1 Obra Comisionada:</b> 
                    <p>Las partes acuerdan que todas las <b>Obras Protegidas</b>  creadas, desarrolladas o realizadas por el <b>Prestador</b>, en cumplimiento de las obligaciones que asume por virtud del presente contrato, son comisionadas por la  <b>Sociedad</b> en términos del artículo 83 de la Ley Federal del Derecho de Autor o la disposición normativa que en futuro haga sus veces. En consecuencia, corresponderá a la <b>Sociedad</b>  todos los derechos patrimoniales, así como las facultades relativas a la divulgación, integridad y compilación de todas las <b>Obras Protegidas</b> que el <b>Prestador</b> desarrolle, cree o realice, en ejecución de los servicios establecidos en el presente contrato.</p>    
                    </li>
    
                    <li><b>5.2 Obras comisionadas anteriores:</b><p>Así mismo, las partes aceptan y reconocen que cualquier <b>Obra Protegida</b> , relacionada directa e indirectamente con el objeto social, modelo de negocios y actividad comercial, presente y futura de la <b>Sociedad</b>, que haya sido creada, desarrollada o realizada por el <b>Prestador</b> con anterioridad a la celebración del presente contrato a solicitud de aquella, fue igualmente comisionada o realizada en colaboración remunerada por la <b>Sociedad</b> en términos del artículo 83 de la Ley Federal del Derecho de Autor. En consecuencia, las partes acuerdan que todos los derechos patrimoniales, así como las facultades relativas a la divulgación, integridad y compilación de las <b>Obras Protegidas</b> a que se hace referencia en el presente párrafo, corresponden a la <b>Sociedad.</b> </p></li>
                </ol>
            </li>
            <li><b>PROPIEDAD INDUSTRIAL.</b>
                <p>La propiedad industrial sobre las <b>Creaciones Nuevas</b> que el <b>Prestador</b> desarrolle, realice o reduzca a práctica, en ejecución de las obligaciones que asume por virtud del presente contrato se sujeta a lo siguiente:</p>
                <ol type="i">
                    <li> <b>6.1 Derechos de Patente o Registro:</b>La propiedad industrial sobre las  <b>Creaciones Nuevas</b> que el <b>Prestador</b>  desarrolle, realice o reduzca a práctica, en ejecución de las obligaciones que asume por virtud del presente contrato se transmite a la<b>Sociedad</b>, por medio de este acto y de manera irrevocable, así como el derecho a obtener la patente y/o el registro sobre cualquiera de las <b>Creaciones Nuevas</b>realizadas de conformidad con el párrafo anterior, con fundamento en el último párrafo del Artículo 38 de la Ley Federal de Protección a la Propiedad Industri </li>
                    <li><b>6.2 Patentes o Registros:</b>De igual forma, con fundamento en el artículo 137 de la Ley Federal de Protección a la Propiedad Industrial, el <b>Prestador</b> transmite a la <b>Sociedad,</b> por virtud de este acto, todos y cada uno de los derechos que confieren las patentes y registros enlistados en el documento que se agrega como <u>Anexo B </u> al presente contrato.</li>
                </ol>
                <br>
            </li>
            <li><b>CONFIDENCIALIDAD</b>
                 <p>El <b>Prestador</b>  podrá utilizar cualquiera de la <b>Información Confidencial</b> , los <b>Secretos Industriales</b>  y los <b>Secretos Comerciales</b>  de la <b>Sociedad</b>  a los que tenga acceso por virtud del presente contrato, de conformidad con lo siguiente:</p>
                <ol type="i">
                    <li><b>7.1 Confidencialidad:</b> El <b>Prestador</b> <p>se obliga a guardar absoluta reserva, entera confidencialidad y secrecía y a la no divulgación de la <b>Información Confidencial,</b> los <b>Secretos Industriales </b> y los <b>Secretos Comerciales</b> a la que tenga acceso por virtud del presente contrato. En consecuencia, el <b>Prestador</b>  deberá abstenerse de revelar dicha <b>Información Confidencial,</b>  los <b>Secretos Industriales</b>  y los <b>Secretos Comerciales,</b> a terceras personas sin causa justificada y sin autorización de la <b>Sociedad.</b> </p>
                    </li>
                    <li>
                        <b>7.2 Causa Justificada: </b> 
                        <p>Ambas partes acuerdan que se considerará como “causa justificada”, para efectos del párrafo anterior, la transmisión de la <b>Información Confidencial,</b> los <b>Secretos Industriales</b> y los <b>Secretos Comerciales</b> a: (i) Terceros proveedores o prestadores de servicios a favor de la <b>Sociedad,</b>  siempre y cuando la <b>Información Confidencial </b> sea necesaria para la efectiva prestación de dichos servicios; (ii) Terceros que deseen ser proveedores o prestadores de servicios a favor de la <b>Sociedad,</b> siempre y cuando la <b>Información Confidencial </b>  sea necesaria para la celebración de un contrato definitivo con dichas personas; (iii) Personas físicas o morales que asesoren a la sociedad para el desarrollo de sus productos o servicios, como por ejemplo, incubadoras, aceleradoras, mentores, asesores y; (iv) Cualquier otro siempre y cuando cuente con autorización y expresa y por escrito de la Sociedad, siempre y cuando, en todos los casos anteriores, las personas aquí mencionadas hayan contraído una obligación de confidencialidad con la Sociedad, sustancialmente similar a la establecida en el presente contrato, con anterioridad a la divulgación de la <b>Información Confidencial.</b></p>
                    </li>
                </ol>
                </li>
    
            <li>
                <b>DOCUMENTOS.</b>
                <p>El Prestador se obliga a celebrar y firmar todos los documentos necesarios para efectos de formalizar o cumplir con todos los requisitos para llevar a cabo todas y cada una de las cesiones de derechos y licencias a que se hacen referencia en las cláusulas <b>5 (Derechos de Autor), 6 (Propiedad Industrial) y 10 (Licencias)</b>  del presente contrato, incluyendo, pero sin limitar, la celebración de contratos específicos de cesión de derechos o cartas de colaboración remunerada que sean necesarias, así como la firma de cualquier solicitud de registro ante el Instituto Mexicano de la Propiedad Industrial (en adelante IMPI), el Instituto Nacional del Derecho de Autor  (en adelante INDAUTOR), o cualquier organismo o dependencia con facultades similares en cualquier otro país del extranjero. </p>
            </li>
            <li>
                <b>TERRITORIALIDAD.</b>
                <p>Ambas partes acuerdan que la <b>Sociedad</b> podrá utilizar y ejercer todos y cada uno de los derechos que recibe por virtud del presente contrato en cualquier país del mundo, incluyendo, pero sin limitar, la República Mexicana y los Estados Unidos de América. </p>
            </li>
            <li>
                <b>LICENCIAS.</b>
                <p>En caso de que no sea posible llevar a cabo cualquiera de las cesiones de derechos a que se hace referencia en las cláusulas <b>5 (Derechos de Autor) y 6 (Propiedad Industrial) </b> del presente contrato, el<b>Prestador</b>  otorga a la Sociedad, por medio de este acto, una licencia exclusiva, irrevocable, transferible y perpetua, sujeta a las limitaciones establecidas en las disposiciones legales que resulten aplicables dependiendo del caso concreto, sobre aquellos<b>Elementos de Propiedad Intelectual,</b>  que no pudieron ser transmitidos o cedidos en términos de las cláusulas<b>5 (Derechos de Autor) y 6 (Propiedad Industrial) </b> del presente contrato.</p>
            </li>
            <li>
                <b>PLAZO.</b>
                <p>El presente contrato tendrá la duración que se establece en el Anexo A del presente contrato y será  no renovable, quedando obligado el <b>Prestador</b> a entregar todos los servicios que le hubiesen sido requeridos a hasta la fecha efectiva de terminación natural del presente contrato. En caso de que la <b>Sociedad</b> requiriese los servicios del <b>Prestador</b> con posterioridad a la fecha de terminación natural del presente contrato, ambas partes deberán firmar un convenio modificatorio en donde se extenderá la duración del presente contrato o bien deberán celebrar un nuevo contrato de prestación de servicios profesionales independientes.  Las partes acuerdan que las obligaciones establecidas en las cláusulas <b>5 (Derechos de Autor), 6 (Propiedad Industrial), 7 (Confidencialidad), 8 (Documentos) 9 (Territorialidad) y 10 (Licencias),</b> seguirán vigentes a pesar de que opere la terminación del presente contrato.</p>
            </li>
    
            <li>
                <b>TERMINACIÓN ANTICIPADA.</b>
                <p>Ambas partes convienen que la <b>Sociedad</b>  se reserva el derecho de dar por terminado el presente contrato sin necesidad de declaración judicial o administrativa para tal efecto, mediante un aviso enviado al <b>Prestador</b>con una anticipación 30 días naturales a la fecha en la que efectivamente opere la terminación del presente contrato. Las partes acuerdan que las obligaciones establecidas en las cláusulas <b> 5 (Derechos de Autor), 6 (Propiedad Industrial), 7 (Confidencialidad), 8 (Documentos) 9 (Territorialidad) y 10 (Licencias),</b> seguirán vigentes a pesar de que opere la terminación anticipada del presente contrato.</p>
            </li>
            <li>
                <b>NOTIFICACIONES.</b>
                <p>Las partes acuerdan que cualquier notificación o comunicación relacionada con el presente contrato deberá de hacerse: (i) mediante notificación por escrito impreso y firmado, enviado al domicilio que cada una de ellas ha manifestado en las declaraciones del presente contrato o; (ii) mediante notificación por escrito, enviado a la dirección de correo electrónico que cada una de ellas ha manifestado en las declaraciones del presente contrato. En caso de que el escrito sea digital, las partes reconocen como válida la firma electrónica simple consistente en la identificación de las partes a través del uso de sus correos electrónicos.</p>
            </li>
            <li>
                <b>TÍTULOS DE LAS CLÁUSULAS.</b>
                <p>Las partes acuerdan que los títulos de las cláusulas son exclusivamente para facilitar la lectura del presente contrato, por lo que para interpretar la voluntad de las partes se deberá de estar a los contenidos de cada cláusula, así como a la redacción entera del clausulado del presente contrato, mismo que deberá interpretarse en su conjunto.</p>
            </li>
            <li>
                <b>NULIDAD DE CLÁUSULAS.</b>
                <p>En caso de que cualquier cláusula sea declarada nula por alguna autoridad judicial competente, las partes acuerdan que dicha cláusula nula se separará del contenido del presente contrato. El presente contrato continuará su vigencia con aquellas cláusulas que no hayan sido declaradas nulas, en lo que resulten aplicables y las partes se obligan a negociar de buena fe, otra cláusula que sustituya a aquella que fue declarada nula. </p>
            </li>
    
            <li>
                <b>CONTRATO FINAL.</b>
                <p>Es voluntad de las partes pactar que este es el contrato final celebrado entre ellas con relación con los servicios establecidos en el presente contrato, en consecuencia, no tendrá valor jurídico vinculante entre las partes cualquier promesa, pacto, negociación o acuerdo realizado con anterioridad a la fecha del presente contrato que se oponga al contenido de las cláusulas aquí establecidas.</p>
            </li>
            <li>
                <b>FIRMAS.</b>
                <p>Las partes acuerdan firmar el presente contrato mediante firma análoga o electrónica. En caso de que las partes decidan firmar el presente contrato con firma electrónica, las partes acuerdan utilizar: (i) el certificado de  firma electrónica que se señala en el Anexo A, para los efectos del último párrafo del artículo 114 del Código de Comercio;  (ii) el certificado de la firma electrónica amparada por el certificado emitido por cualquier autoridad con competencia y jurisdicción dentro del territorio de los Estados Unidos Mexicanos o; (iii) el certificado de firma electrónica emitido por un Prestador de Servicios de Certificación autorizado por la Secretaría.</p>
            </li>
            <li>
                <b>LEY APLICABLE,JURISDICCIÓN Y COMPETENCIA.</b>
                <p>Las partes acuerdan que para la interpretación y el cumplimiento del presente contrato serán aplicables las leyes vigentes en la <b>Ciudad de México,</b> entidad federativa de la República Mexicana. Así mismo, las partes acuerdan que someterán cualquier controversia que se derive del presente contrato a la jurisdicción de los tribunales de la <b>Ciudad de México,</b>  entidad federativa de la República Mexicana, renunciando las partes, expresamente, a cualquier fuero o competencia que pudiera corresponderles en el futuro, incluso por razón de territorio.</p>
            </li>
        </ol>
    <p><b>HABIENDO LEÍDO EN SU TOTALIDAD EL PRESENTE DOCUMENTO Y HABIENDO MANIFESTADO SU COMPRENSIÓN PLENA DEL CONTENIDO, VALOR Y ALCANCES LEGALES DEL MISMO, PROCEDEN A FIRMARLO EL DÍA ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}</b></p>
        </section>
    
        <footer class="firmas">
        

            <p>________________________</p>
            <b>La Sociedad</b>
            <br>

    
            <p>_________________________</p>
            <b>El Prestador</b>
            <br>
        </footer>
        <br>
        <br><br>
    
        <section class="Anexo_A">
            <b>AnexoA: Datos generales.</b>
            <p>__________________________________________________________________________________________________________________________________________________</p>
            <br><br><br>
    
            <table width="500" >
               
                <tr>
                  <th>Prestador:</th>
                  <td> ${nombrePrestador}</td>
                </tr>
                <tr>
                 <th>Domicilio:</th>
                 <td>${domicilioPrestador}</td>
                  <th>Correo:</th>
                  <td>${emailPrestador}</td>
                </tr>
    
                <tr>
                  <th>Servicios:</th>
                  <td width="400" height="200">${serviciosPrestador}</td>
                </tr>
    
                <tr>
                  <th>Contraprestación:</th>
                  <td>${contraprestacion}</td>
              
                  <th>Plazo:</th>
                  <td>${plazo}</td>
              
                </tr>
    
                <tr>
                    <th>Firma electronica a usarse: </th>
                    <td>${firmaElectronica}</td>
                </tr>
    
              </table>
              <br>
              <section class="firmas">
                <p>________________________</p>
                <b>La Sociedad</b>
                <br>
        
                <p>_________________________</p>
                <b>El Prestador</b>
                <br>
            </section>
        </section>
    
        
    </body>
    </html>`
}